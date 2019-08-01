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
const SQL_CLUBES = `
SELECT c.id,
       c.nome_fantasia,
       c.abreviacao AS clube_abrev,
       escudo_60,
       posicao,
       atletas_por_clube($1, $2, c.id) AS atletas
FROM clubes c
WHERE id <> 1
ORDER BY c.posicao
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

client.connect()
    .then(() => queryClubesAtletas(rodadaAtual, CURRENT_YEAR))
    .then(async clubes => {
        console.log(`Exportando clubes da rodada ${rodadaAtual} ${CURRENT_YEAR} ...`)

        const pathClubes = path.resolve(__dirname, '../clubes', `${CURRENT_YEAR}`)
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
