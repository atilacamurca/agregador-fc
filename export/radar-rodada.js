
const client = require('../import/database').client
const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')

const args = process.argv.slice(2)
let rodadaAtual = process.env.RODADA_ATUAL_ID
// override RODADA ATUAL
if (args[0]) {
    rodadaAtual = new Number(args[0])
}

const CURRENT_YEAR = new Date().getFullYear()
const SQL = `
    SELECT partida_id,
        radar_por_posicao(pr.rodada_id, pr.ano, pr.clube_casa_id) AS radar_casa,
        radar_por_posicao(pr.rodada_id, pr.ano, pr.clube_visitante_id) AS radar_visitante,
        clube_casa_id,
        cc.nome_fantasia as clube_casa,
        cc.escudo_60 as escudo_casa,
        cc.abreviacao as clube_casa_abreviacao,
        clube_casa_posicao,
        clube_visitante_id,
        cv.nome_fantasia as clube_visitante,
        cv.escudo_60 as escudo_visitante,
        cv.abreviacao as clube_visitante_abreviacao,
        clube_visitante_posicao
    FROM partidas_rodada pr
    INNER JOIN clubes cc ON pr.clube_casa_id = cc.id
    INNER JOIN clubes cv ON pr.clube_visitante_id = cv.id
    WHERE pr.rodada_id = $1
        AND pr.ano = $2
    ORDER BY partida_data ASC
`

async function query (rodada_id, ano) {
    try {
        const res = await client.query(SQL, [rodada_id, ano])
        return res.rows
    } catch (err) {
        console.log(err)
        throw err
    }
}

client.connect()
    .then(() => query(rodadaAtual, CURRENT_YEAR))
    .then(async partidas => {
        console.log(`Exportando JSON da Rodada ${rodadaAtual}/${CURRENT_YEAR} ...`)

        const saveTo = path.resolve(__dirname, '../melhores/rodada', `${CURRENT_YEAR}`, `${rodadaAtual}`)
        mkdirp.sync(saveTo)
        const filename = `${saveTo}/radar-rodada.json`
        fs.writeFileSync(filename, JSON.stringify({
            rodada: rodadaAtual,
            partidas
        }, null, 2))
        await client.end()
    })
    .catch(err => {
        console.error('connection error', err)
        return client.end()
    })
