const client = require('./database').client
const CURRENT_YEAR = process.env.GRIDSOME_TEMPORADA

const UPSERT_CLUBES = `INSERT INTO public.clubes (id, nome, nome_fantasia,
    abreviacao, posicao, escudo_60) VALUES ($1, $2, $3, $4, $5, $6)
    ON CONFLICT ON CONSTRAINT clubes_pkey DO
    UPDATE SET escudo_60=EXCLUDED.escudo_60`

const INSERT_CLUBES_TEMPORADA = `INSERT INTO public.clubes_temporada(
    clube_id, temporada) VALUES ($1, $2) ON CONFLICT DO NOTHING`

async function save (data) {
    try {
        await client.query('BEGIN')

        const batchClubes = []
        for (id in data) {
            if (data[id].posicao === undefined) {
                continue
            }
            batchClubes.push(client.query(UPSERT_CLUBES, [
                data[id].id,
                data[id].nome,
                data[id].nome_fantasia,
                data[id].abreviacao,
                data[id].posicao,
                data[id].escudos['60x60']
            ]))
            batchClubes.push(client.query(INSERT_CLUBES_TEMPORADA, [
                data[id].id,
                CURRENT_YEAR
            ]))
        }
        Promise.all(batchClubes)

        await client.query('COMMIT')
        return client.end()
    } catch (err) {
        console.error(err)
        await client.query('ROLLBACK')
        throw err
    }
}

const data = require('./clubes.json')

client.connect()
    .then(() => save(data))
    .catch(err => {
        console.error('connection error', err)
        return client.end()
    })
