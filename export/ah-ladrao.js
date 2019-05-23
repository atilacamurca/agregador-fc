
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
    SELECT am.atleta_id,
        apelido,
        p.nome as posicao,
        p.abreviacao as posicao_abrev,
        rb,
        fc,
        ca,
        ca * -2 AS tot_ca,
        rb * 1.5 AS tot_rb,
        fc * -0.5 AS tot_fc,
        (rb * 1.5) + (fc * -0.5) + (ca * -2) AS tot_pontuacao,
        c.nome_fantasia AS clube,
        a.foto,
        c.escudo_60 as escudo,
        preco_num,
        variacao_num,
        media_num,
        jogos_num
    FROM atletas_mercado am
    INNER JOIN atletas a ON am.atleta_id = a.id
    INNER JOIN clubes c ON a.clube_id = c.id
    INNER JOIN posicoes p ON a.posicao_id = p.id
    WHERE rodada_id = $1 - 1 -- rodada anterior
    AND ano = $2
    ORDER BY (rb * 1.5) + (fc * -0.5) + (ca * -2) DESC
    LIMIT 25
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
    .then(async lista => {
        console.log(`Exportando JSON da Rodada ${rodadaAtual}/${CURRENT_YEAR} ...`)

        const saveTo = path.resolve(__dirname, '../melhores/rodada', `${CURRENT_YEAR}`, `${rodadaAtual}`)
        mkdirp.sync(saveTo)
        const filename = `${saveTo}/ah-ladrao.json`
        fs.writeFileSync(filename, JSON.stringify({
            rodada: rodadaAtual,
            lista
        }, null, 2))
        await client.end()
    })
    .catch(err => {
        console.error('connection error', err)
        return client.end()
    })
