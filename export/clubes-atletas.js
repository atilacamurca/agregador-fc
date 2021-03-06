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
const SQL_CLUBES = `
SELECT c.id,
       c.nome_fantasia,
       c.abreviacao AS clube_abrev,
       escudo_60,
       posicao,
       atletas_por_clube($1, $2, c.id) AS atletas
FROM clubes c
INNER JOIN clubes_temporada ct ON c.id = ct.clube_id
WHERE id <> 1 AND ct.temporada = $2
ORDER BY c.posicao, c.nome_fantasia
`

async function queryClubesAtletas (rodada_id, ano) {
    try {
        const res = await client.query(SQL_CLUBES, [rodada_id, ano])
        return res.rows
    } catch (err) {
        console.log(err)
        throw err
    }
}

const pathClubes = path.resolve(__dirname, '../clubes', `${CURRENT_YEAR}`)
mkdirp.sync(pathClubes)

client.connect()
    .then(() => queryClubesAtletas(rodadaAtual, CURRENT_YEAR))
    .then(async clubes => {
        console.log(`Exportando clubes da rodada ${rodadaAtual} ${CURRENT_YEAR} ...`)

        for (i in clubes) {
            const c = clubes[i]
            const filename = `${pathClubes}/${c.id}.json`
            fs.writeFileSync(filename, JSON.stringify(c, null, 2))
        }
        await client.end()
    })
    .catch(err => {
        console.error('connection error', err)
        return client.end()
    })
