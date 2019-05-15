
const client = require('../import/database').client
const path = require('path')
const fs = require('fs')

const args = process.argv.slice(2)
let rodadaAtual = process.env.RODADA_ATUAL_ID
// override RODADA ATUAL
if (args[0]) {
    rodadaAtual = new Number(args[0])
}

const CURRENT_YEAR = new Date().getFullYear()
const SQL_PARTIDAS_RODADA = `
    SELECT partida_id,
        stat_destaques_defesa(pr.rodada_id, pr.ano, pr.clube_casa_id) as destaques_defesa_casa,
        stat_destaques_defesa(pr.rodada_id, pr.ano, pr.clube_visitante_id) as destaques_defesa_visitante,
        stat_goleiros(pr.rodada_id, pr.ano, pr.clube_casa_id) AS goleiros_casa,
        stat_goleiros(pr.rodada_id, pr.ano, pr.clube_visitante_id) AS goleiros_visitante,
        stat_zagueiros(pr.rodada_id, pr.ano, pr.clube_casa_id) AS zagueiros_casa,
        stat_zagueiros(pr.rodada_id, pr.ano, pr.clube_visitante_id) AS zagueiros_visitante,
        stat_meias(pr.rodada_id, pr.ano, pr.clube_casa_id) as meias_casa,
        stat_meias(pr.rodada_id, pr.ano, pr.clube_visitante_id) as meias_visitante,
        stat_atacantes(pr.rodada_id, pr.ano, pr.clube_casa_id) AS atacantes_casa,
        stat_atacantes(pr.rodada_id, pr.ano, pr.clube_visitante_id) AS atacantes_visitante,
        stat_destaques_ataque(pr.rodada_id, pr.ano, pr.clube_casa_id) AS destaques_ataque_casa,
        stat_destaques_ataque(pr.rodada_id, pr.ano, pr.clube_visitante_id) AS destaques_ataque_visitante,
        clube_casa_id,
        cc.nome_fantasia as clube_casa,
        cc.escudo_60 as escudo_casa,
        clube_casa_posicao,
        aproveitamento_mandante,
        clube_visitante_id,
        cv.nome_fantasia as clube_visitante,
        cv.escudo_60 as escudo_visitante,
        clube_visitante_posicao,
        aproveitamento_visitante,
        partida_data,
        "local",
        valida,
        placar_oficial_mandante,
        placar_oficial_visitante,
        url_confronto,
        url_transmissao
    FROM partidas_rodada pr
    INNER JOIN clubes cc ON pr.clube_casa_id = cc.id
    INNER JOIN clubes cv ON pr.clube_visitante_id = cv.id
    WHERE pr.rodada_id = $1
    AND pr.ano = $2
    ORDER BY partida_data ASC
`

const SQL_RODADA = `
SELECT inicio
FROM rodadas
WHERE rodada_id = $1
AND ano = $2
`

async function queryInicioRodada(rodada_id, ano) {
    try {
        const res = await client.query(SQL_RODADA, [rodada_id, ano])
        return res.rows[0].inicio
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function queryPartidasRodada(rodada_id, ano) {
    try {
        const res = await client.query(SQL_PARTIDAS_RODADA, [rodada_id, ano])
        return res.rows
    } catch (err) {
        console.log(err)
        throw err
    }
}

client.connect()
    .then(() => queryPartidasRodada(rodadaAtual, CURRENT_YEAR))
    .then(async partidas => {
        console.log(`Exportando JSON da Rodada ${rodadaAtual}/${CURRENT_YEAR} ...`)
        const inicio_rodada = await queryInicioRodada(rodadaAtual, CURRENT_YEAR)

        const pathRodada = path.resolve(__dirname, '../rodada', `${CURRENT_YEAR}`)
        const filename = `${pathRodada}/${rodadaAtual}.json`
        fs.writeFileSync(filename, JSON.stringify({
            rodada: rodadaAtual,
            inicio_rodada,
            partidas
        }, null, 2))
        await client.end()
    })
    .catch(err => {
        console.error('connection error', err)
        return client.end()
    })
