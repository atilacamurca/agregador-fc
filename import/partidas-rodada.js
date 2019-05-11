
const client = require('./database').client

const data = require('./partidas-rodada.json')

const CURRENT_YEAR = new Date().getFullYear()
const UPSERT_PARTIDAS_RODADA = `
    INSERT INTO public.partidas_rodada (partida_id, rodada_id, ano,
    clube_casa_id, clube_casa_posicao, aproveitamento_mandante,
    clube_visitante_id, clube_visitante_posicao, aproveitamento_visitante,
    partida_data, local, valida, placar_oficial_mandante, placar_oficial_visitante,
    url_confronto, url_transmissao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,
    $13, $14, $15, $16) ON CONFLICT ON CONSTRAINT partidas_rodada_pkey
    DO UPDATE SET clube_casa_id=EXCLUDED.clube_casa_id,
    clube_casa_posicao=EXCLUDED.clube_casa_posicao,
    aproveitamento_mandante=EXCLUDED.aproveitamento_mandante,
    clube_visitante_id=EXCLUDED.clube_visitante_id,
    clube_visitante_posicao=EXCLUDED.clube_visitante_posicao,
    aproveitamento_visitante=EXCLUDED.aproveitamento_visitante,
    partida_data=EXCLUDED.partida_data, local=EXCLUDED.local,
    valida=EXCLUDED.valida, placar_oficial_mandante=EXCLUDED.placar_oficial_mandante,
    placar_oficial_visitante=EXCLUDED.placar_oficial_visitante,
    url_confronto=EXCLUDED.url_confronto, url_transmissao=EXCLUDED.url_transmissao
`

async function save(data) {
    try {
        await client.query('BEGIN')
        const rodada_id = data.rodada
        const batch = []
        for (let id = 0; id < data.partidas.length; id++) {
            const partida = data.partidas[id];
            batch.push(client.query(UPSERT_PARTIDAS_RODADA, [
                partida.partida_id,
                rodada_id,
                CURRENT_YEAR,
                partida.clube_casa_id,
                partida.clube_casa_posicao,
                JSON.stringify(partida.aproveitamento_mandante),
                partida.clube_visitante_id,
                partida.clube_visitante_posicao,
                JSON.stringify(partida.aproveitamento_visitante),
                partida.partida_data,
                partida.local,
                partida.valida,
                partida.placar_oficial_mandante,
                partida.placar_oficial_visitante,
                partida.url_confronto,
                partida.url_transmissao
            ]))
        }
        Promise.all(batch)

        await client.query('COMMIT')
        return client.end()
    } catch (err) {
        console.log(err)
        await client.query('ROLLBACK')
        throw err
    }
}

client.connect()
    .then(() => save(data))
    .catch(err => {
        console.error('connection error', err)
        return client.end()
    })
