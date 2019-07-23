
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
const SQL_PONTUACOES = `
WITH u AS
  (SELECT DISTINCT rodada_id,
                   ano
   FROM partidas_rodada
   WHERE ano = $1
   ORDER BY rodada_id DESC
   LIMIT 12),
     t AS
  (SELECT tam.atleta_id,
          tam.ano,
          tam.pontos_num,
          tam.preco_num,
          tam.variacao_num,
          tam.media_num,
          tam.rodada_id,
          partida_por_clube(tam.rodada_id, tam.ano, a.clube_id)
   FROM atletas_mercado tam
   INNER JOIN u ON tam.rodada_id = u.rodada_id
   AND tam.ano = u.ano
   INNER JOIN atletas a ON tam.atleta_id = a.id
   WHERE tam.ano = $2
   ORDER BY tam.atleta_id,
            tam.rodada_id)
SELECT ano,
       atleta_id,
       apelido,
       c.nome_fantasia AS clube,
       c.id as clube_id,
       p.nome as posicao,
       jsonb_agg(rodada_id ORDER BY rodada_id) as rodadas,
       jsonb_agg(pontos_num ORDER BY rodada_id) as pontos,
       jsonb_agg(preco_num ORDER BY rodada_id) as precos,
       jsonb_agg(variacao_num ORDER BY rodada_id) as variacoes,
       jsonb_agg(media_num ORDER BY rodada_id) as medias,
       jsonb_agg(partida_por_clube ORDER BY rodada_id) as partidas,
       foto,
       escudo_60
FROM t
INNER JOIN atletas a ON t.atleta_id = a.id
INNER JOIN clubes c ON a.clube_id = c.id
INNER JOIN posicoes p ON a.posicao_id = p.id
GROUP BY atleta_id,
         ano,
         apelido,
         c.nome_fantasia,
         c.id,
         p.nome,
         foto,
         escudo_60
ORDER BY atleta_id
LIMIT 10
`

async function queryPontuacoes(ano) {
    try {
        const res = await client.query(SQL_PONTUACOES, [ano, ano])
        return res.rows
    } catch (err) {
        console.log(err)
        throw err
    }
}

client.connect()
    .then(() => queryPontuacoes(CURRENT_YEAR, CURRENT_YEAR))
    .then(async atletas => {
        console.log(`Exportando pontuações do ano de ${CURRENT_YEAR} ...`)

        const pathRodada = path.resolve(__dirname, '../pontuacoes', `${CURRENT_YEAR}`)
        for (i in atletas) {
            const a = atletas[i]
            const filename = `${pathRodada}/${a.atleta_id}.json`
            fs.writeFileSync(filename, JSON.stringify({
                ... a
            }, null, 2))
        }
        await client.end()
    })
    .catch(err => {
        console.error('connection error', err)
        return client.end()
    })
