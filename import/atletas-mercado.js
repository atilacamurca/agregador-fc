
const axios = require('axios')
const client = require('./database').client

const UPSERT_STATUS = 'INSERT INTO status(id, nome) VALUES($1, $2) ON CONFLICT DO NOTHING'
const UPSERT_POSICOES = 'INSERT INTO public.posicoes (id, nome, abreviacao) VALUES($1, $2, $3) ON CONFLICT DO NOTHING'
const UPSERT_CLUBES = `INSERT INTO public.clubes (id, nome, nome_fantasia,
    abreviacao, posicao, escudo_60) VALUES ($1, $2, $3, $4, $5, $6)
    ON CONFLICT ON CONSTRAINT clubes_pkey DO
    UPDATE SET escudo_60=EXCLUDED.escudo_60`
const INSERT_CLUBES_TEMPORADA = `INSERT INTO public.clubes_temporada(
    clube_id, temporada) VALUES ($1, $2) ON CONFLICT DO NOTHING`
const UPSERT_ATLETAS = `INSERT INTO public.atletas(id, nome, slug, apelido, foto, clube_id, posicao_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    ON CONFLICT (id) DO UPDATE SET nome=EXCLUDED.nome, slug=EXCLUDED.slug,
    apelido=EXCLUDED.apelido, foto=EXCLUDED.foto, clube_id=EXCLUDED.clube_id,
    posicao_id=EXCLUDED.posicao_id`
const UPSERT_ATLETAS_MERCADO = `INSERT INTO public.atletas_mercado (atleta_id, rodada_id,
    ano, pontos_num, preco_num, variacao_num, media_num, jogos_num, ds, g, a, sg, fs, ff,
    fd, ft, de, dp, gc, cv, ca, pp, gs, fc, i, pi, pc, ps, status_id)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18,
    $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29)
    ON CONFLICT ON CONSTRAINT atletas_mercado_pkey DO
    UPDATE
    SET pontos_num=EXCLUDED.pontos_num,
        preco_num=EXCLUDED.preco_num,
        variacao_num=EXCLUDED.variacao_num,
        media_num=EXCLUDED.media_num,
        jogos_num=EXCLUDED.jogos_num,
        ds=EXCLUDED.ds,
        g=EXCLUDED.g,
        a=EXCLUDED.a,
        sg=EXCLUDED.sg,
        fs=EXCLUDED.fs,
        ff=EXCLUDED.ff,
        fd=EXCLUDED.fd,
        ft=EXCLUDED.ft,
        de=EXCLUDED.de,
        dp=EXCLUDED.dp,
        gc=EXCLUDED.gc,
        cv=EXCLUDED.cv,
        ca=EXCLUDED.ca,
        pp=EXCLUDED.pp,
        gs=EXCLUDED.gs,
        fc=EXCLUDED.fc,
        i=EXCLUDED.i,
        pi=EXCLUDED.pi,
        pc=EXCLUDED.pc,
        ps=EXCLUDED.ps,
        status_id=EXCLUDED.status_id`
const CURRENT_YEAR = process.env.GRIDSOME_TEMPORADA
const RODADA_ATUAL_ID = parseInt(process.env.RODADA_ATUAL_ID)

async function fetch() {
    try {
        const response = await axios.get('https://api.cartolafc.globo.com/atletas/mercado')
        // console.log(response.data)
        return response.data
    } catch (error) {
        throw error
    }
}

async function save(data) {
    try {
        await client.query('BEGIN')
        const { status, posicoes, clubes, atletas } = data
        const batchStatus = []
        for (id in status) {
            batchStatus.push(client.query(UPSERT_STATUS, [
                status[id].id,
                status[id].nome
            ]))
        }
        Promise.all(batchStatus)

        const batchPosicoes = []
        for (id in posicoes) {
            batchPosicoes.push(client.query(UPSERT_POSICOES, [
                posicoes[id].id,
                posicoes[id].nome,
                posicoes[id].abreviacao
            ]))
        }
        Promise.all(batchPosicoes)

        if (RODADA_ATUAL_ID === 1) {
            const batchClubes = []
            for (id in clubes) {
                batchClubes.push(client.query(UPSERT_CLUBES, [
                    clubes[id].id,
                    clubes[id].nome,
                    clubes[id].nome_fantasia,
                    clubes[id].abreviacao,
                    1,
                    clubes[id].escudos['60x60']
                ]))
                batchClubes.push(client.query(INSERT_CLUBES_TEMPORADA, [
                    clubes[id].id,
                    CURRENT_YEAR
                ]))
            }
            Promise.all(batchClubes)
        }

        const batchAtletas = []
        const batchAtletasMercado = []
        for (id in atletas) {
            const a = atletas[id]
            batchAtletas.push(client.query(UPSERT_ATLETAS, [
                a.atleta_id,
                a.nome,
                a.slug,
                a.apelido,
                a.foto ? a.foto.replace('FORMATO', '140x140') : 'https://via.placeholder.com/140',
                a.clube_id,
                a.posicao_id
            ]))

            batchAtletasMercado.push(client.query(UPSERT_ATLETAS_MERCADO, [
                a.atleta_id,
                a.rodada_id,
                CURRENT_YEAR,
                a.pontos_num,
                a.preco_num,
                a.variacao_num,
                a.media_num,
                a.jogos_num,
                orZero(a.scout, 'ds'),
                orZero(a.scout, 'g'),
                orZero(a.scout, 'a'),
                orZero(a.scout, 'sg'),
                orZero(a.scout, 'fs'),
                orZero(a.scout, 'ff'),
                orZero(a.scout, 'fd'),
                orZero(a.scout, 'ft'),
                orZero(a.scout, 'de'),
                orZero(a.scout, 'dp'),
                orZero(a.scout, 'gc'),
                orZero(a.scout, 'cv'),
                orZero(a.scout, 'ca'),
                orZero(a.scout, 'pp'),
                orZero(a.scout, 'gs'),
                orZero(a.scout, 'fc'),
                orZero(a.scout, 'i'),
                orZero(a.scout, 'pi'),
                orZero(a.scout, 'pc'),
                orZero(a.scout, 'ps'),
                a.status_id
            ]))
        }
        Promise.all(batchAtletas)
        Promise.all(batchAtletasMercado)

        await client.query('COMMIT')
        return client.end()
    } catch (err) {
        console.error(err)
        await client.query('ROLLBACK')
        throw err
    }
}

function orZero(obj, key) {
    return obj && obj[key.toUpperCase()] ? obj[key.toUpperCase()] : 0
}

// const data = await fetch()
const data = require('./atletas-mercado.json')

client.connect()
    .then(() => save(data))
    .catch(err => {
        console.error('connection error', err)
        return client.end()
    })
