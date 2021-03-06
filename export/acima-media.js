
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

const CURRENT_YEAR = process.env.GRIDSOME_TEMPORADA
const SQL = `
    SELECT DISTINCT rodada_id + 1 as rodada,
    to_jsonb(melhores_posicao(rodada_id, ano, 1)) AS goleiros,
    to_jsonb(melhores_posicao(rodada_id, ano, 2)) AS laterais,
    to_jsonb(melhores_posicao(rodada_id, ano, 3)) AS zagueiros,
    to_jsonb(melhores_posicao(rodada_id, ano, 4)) AS meias,
    to_jsonb(melhores_posicao(rodada_id, ano, 5)) AS atacantes,
    to_jsonb(melhores_posicao(rodada_id, ano, 6)) AS tecnicos
FROM partidas_rodada p
WHERE rodada_id = $1 - 1 -- rodada anterior
  AND ano = $2
`

async function query (rodada_id, ano) {
    try {
        const res = await client.query(SQL, [rodada_id, ano])
        return res.rows[0]
    } catch (err) {
        console.log(err)
        throw err
    }
}

const altetaVazio = {
    atleta_id: 0,
      apelido: '',
      foto: '',
      clube: '',
      jogos_num: 0,
      media_num: 0,
      preco_num: 0,
      pontos_num: 0,
      variacao_num: 0,
      abreviacao_posicao: '',
      nome_posicao: '',
      partida: {
        clube_casa: '',
        clube_casa_escudo: '',
        clube_visitante: '',
        clube_visitante_escudo: ''
    }
}

const rodada1 = {
    rodada: 1,
    goleiros: [altetaVazio],
    laterais: [altetaVazio],
    zagueiros: [altetaVazio],
    meias: [altetaVazio],
    atacantes: [altetaVazio],
    tecnicos: [altetaVazio]
}

async function gerarRodada (rodada) {
    console.log(`Exportando JSON da Rodada ${rodadaAtual}/${CURRENT_YEAR} ...`)

    const saveTo = path.resolve(__dirname, '../melhores/rodada', `${CURRENT_YEAR}`, `${rodadaAtual}`)
    mkdirp.sync(saveTo)
    const filename = `${saveTo}/acima-media.json`
    fs.writeFileSync(filename, JSON.stringify(rodada, null, 2))
}

if (rodadaAtual === 1) {
    ;(async () => {
        await gerarRodada(rodada1)
    })()
    return;
}

client.connect()
    .then(() => query(rodadaAtual, CURRENT_YEAR))
    .then(gerarRodada)
    .then(async () => {
        await client.end()
    })
    .catch(err => {
        console.error('connection error', err)
        return client.end()
    })
