// https://api.cartolafc.globo.com/auth/mercado/atleta/83257/pontuacao

/**
 * @deprecated
 *
 * Informações obtidas:
 * [ { atleta_id: 37688,
 *   rodada_id: 1,
 *   pontos: 1.6,
 *   preco: 7.35,
 *   variacao: -1.65,
 *   media: 1.6 },
 * { atleta_id: 37688,
 *   rodada_id: 2,
 *   pontos: 19.4,
 *   preco: 14.2,
 *   variacao: 6.85,
 *   media: 10.5 }, ... ]
 *
 * Entretanto, todas essas informações podem ser obtidas localmente, usando
 * a tabela atletas_mercado diretamente. A única vantagem seria ter informações
 * das rodadas iniciais.
 */

const axios = require('axios')
const client = require('./database').client

const CURRENT_YEAR = new Date().getFullYear()
const RODADA_ATUAL_ID = parseInt(process.env.RODADA_ATUAL_ID)
const SELECT_ATLETAS = `
SELECT a.id FROM atletas a
INNER JOIN atletas_mercado am ON a.id = am.atleta_id
WHERE am.rodada_id = $1 - 1 AND am.ano = $2
`

async function fetch (id) {
    try {
        const response = await axios.get(`https://api.cartolafc.globo.com/auth/mercado/atleta/${id}/pontuacao`, {
            headers: {
                'X-GLB-Token': '160b0cce43f78d6abe23188e0e96469b349633046327253757230794c5132306254505333444c594c516d33384b7579715a4e347762743644484b706d7242584d53363663416830497a71564c533854396a557754364d464b2d6473676432747a5042543044513d3d3a303a75676b6a6f61706868616c626865637366727575'
            }
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        if (error.response.status === 401) {
            return []
        }
        throw error
    }
}

async function save (data) {

}

async function listar (rodada_id, ano) {
    try {
        const res = await client.query(SELECT_ATLETAS + ' LIMIT 10', [rodada_id, ano])
        return res.rows
    } catch (err) {
        console.log(err)
        throw err
    }
}

client.connect()
    .then(() => listar(RODADA_ATUAL_ID, CURRENT_YEAR))
    .then(async (atletas) => {
        for (i in atletas) {
            console.log(`Buscando dados do atleta ${atletas[i].id} ...`)
            const data = await fetch(atletas[i].id)
        }
        client.end()
    })
    .catch(err => {
        console.error('connection error', err)
        return client.end()
    })
