
const client = require('../import/database').client
const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')

const CURRENT_YEAR = new Date().getFullYear()
const SQL = `
SELECT c.id as clube_id,
       p.nome as posicao,
       p.abreviacao as posicao_abreviada,
       pontuacao_adversario_por_posicao($1, c.id, p.id) as pontuacoes
FROM clubes c,
     posicoes p
WHERE c.id <> 1
ORDER BY c.id,
         p.id
`

async function queryPontuacoes (ano) {
    try {
        const res = await client.query(SQL, [ano])
        return res.rows
    } catch (err) {
        console.log(err)
        throw err
    }
}

client.connect()
    .then(() => queryPontuacoes(CURRENT_YEAR))
    .then(async clubes => {
        console.log(`Exportando dos adversários por posição do ano de ${CURRENT_YEAR} ...`)

        const pathRodada = path.resolve(__dirname, '../pontuacoes/adversario', `${CURRENT_YEAR}`)
        for (i in clubes) {
            const c = clubes[i]
            mkdirp.sync(`${pathRodada}/${c.clube_id}`)
            const filename = `${pathRodada}/${c.clube_id}/${c.posicao_abreviada}.json`
            fs.writeFileSync(filename, JSON.stringify(c, null, 2))
        }
        await client.end()
    })
    .catch(err => {
        console.error('connection error', err)
        return client.end()
    })
