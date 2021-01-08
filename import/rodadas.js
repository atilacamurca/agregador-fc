
const client = require('./database').client

const data = require('./rodadas.json')

const CURRENT_YEAR = process.env.GRIDSOME_TEMPORADA
const UPSERT_RODADAS = `INSERT INTO public.rodadas(
            rodada_id, ano, inicio, fim)
    VALUES ($1, $2, $3, $4) ON CONFLICT ON CONSTRAINT rodadas_pkey
    DO UPDATE SET inicio = EXCLUDED.inicio, fim = EXCLUDED.fim`

async function save(data) {
    try {
        await client.query('BEGIN')
        const batch = []
        for (let id = 0; id < data.length; id++) {
            batch.push(client.query(UPSERT_RODADAS, [
                data[id].rodada_id,
                CURRENT_YEAR,
                data[id].inicio,
                data[id].fim
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
