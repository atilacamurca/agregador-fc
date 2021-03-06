
const client = require('../import/database').client
const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')

const args = process.argv.slice(2)
let rodadaAtual = process.env.RODADA_ATUAL_ID
// override RODADA ATUAL
if (args[0]) {
    rodadaAtual = parseInt(args[0])
}

let CURRENT_YEAR = process.env.GRIDSOME_TEMPORADA
if (args[1]) {
    CURRENT_YEAR = parseInt(args[1])
}
const SQL_PARTIDAS_RODADA = `
    SELECT partida_id,
        sumario_gols(pr.rodada_id, pr.ano, pr.clube_casa_id) as sumario_gols_casa,
        sumario_gols(pr.rodada_id, pr.ano, pr.clube_visitante_id) as sumario_gols_visitante,
        stat_destaques_defesa(pr.rodada_id, pr.ano, pr.clube_casa_id) as destaques_defesa_casa,
        stat_destaques_defesa(pr.rodada_id, pr.ano, pr.clube_visitante_id) as destaques_defesa_visitante,
        stat_goleiros(pr.rodada_id, pr.ano, pr.clube_casa_id) AS goleiros_casa,
        stat_goleiros(pr.rodada_id, pr.ano, pr.clube_visitante_id) AS goleiros_visitante,
        stat_zagueiros(pr.rodada_id, pr.ano, pr.clube_casa_id) AS zagueiros_casa,
        stat_zagueiros(pr.rodada_id, pr.ano, pr.clube_visitante_id) AS zagueiros_visitante,
        stat_laterais(pr.rodada_id, pr.ano, pr.clube_casa_id) as laterais_casa,
        stat_laterais(pr.rodada_id, pr.ano, pr.clube_visitante_id) as laterais_visitante,
        stat_meias(pr.rodada_id, pr.ano, pr.clube_casa_id) as meias_casa,
        stat_meias(pr.rodada_id, pr.ano, pr.clube_visitante_id) as meias_visitante,
        stat_atacantes(pr.rodada_id, pr.ano, pr.clube_casa_id) AS atacantes_casa,
        stat_atacantes(pr.rodada_id, pr.ano, pr.clube_visitante_id) AS atacantes_visitante,
        stat_destaques_ataque(pr.rodada_id, pr.ano, pr.clube_casa_id) AS destaques_ataque_casa,
        stat_destaques_ataque(pr.rodada_id, pr.ano, pr.clube_visitante_id) AS destaques_ataque_visitante,
        clube_casa_id,
        cc.nome_fantasia as clube_casa,
        cc.escudo_60 as escudo_casa,
        cc.abreviacao as clube_casa_abreviacao,
        clube_casa_posicao,
        aproveitamento_mandante,
        clube_casa_posicao,
        clube_visitante_id,
        cv.nome_fantasia as clube_visitante,
        cv.escudo_60 as escudo_visitante,
        cv.abreviacao as clube_visitante_abreviacao,
        clube_visitante_posicao,
        aproveitamento_visitante,
        clube_visitante_posicao,
        partida_data,
        "local",
        valida,
        coalesce(placar_oficial_mandante, 0) as placar_oficial_mandante,
        coalesce(placar_oficial_visitante, 0) as placar_oficial_visitante,
        url_confronto,
        url_transmissao,
        valida
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

mkdirp.sync(path.resolve(__dirname, '../rodada', `${CURRENT_YEAR}`))
client.connect()
    .then(() => queryPartidasRodada(rodadaAtual, CURRENT_YEAR))
    .then(async partidas => {
        console.log(`Exportando JSON da Rodada ${rodadaAtual}/${CURRENT_YEAR} ...`)
        const inicio_rodada = await queryInicioRodada(rodadaAtual, CURRENT_YEAR)

        const pathRodada = path.resolve(__dirname, '../rodada', `${CURRENT_YEAR}`)
        const filename = `${pathRodada}/${rodadaAtual}.json`
        fs.writeFileSync(filename, JSON.stringify({
            rodada: rodadaAtual,
            ano: CURRENT_YEAR,
            inicio_rodada,
            partidas
        }, null, 2))
        await client.end()
    })
    .catch(err => {
        console.error('connection error', err)
        return client.end()
    })
