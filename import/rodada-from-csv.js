// const fs = require('fs')
const csv = require('csvtojson')
const path = require('path')

const args = process.argv.slice(2)
let csvInputFilename = ''
if (args[0]) {
    csvInputFilename = args[0]
}

if (!csvInputFilename) {
    console.log('arquivo de entrada é obrigatório.')
    process.exit(1)
}

const scout = (value) => value === 'NA' ? 0 : value

const CURRENT_YEAR = process.env.GRIDSOME_TEMPORADA
const filepath = path.resolve(process.cwd(), csvInputFilename)

csv()
    .fromFile(filepath)
    .then((list) => {
        for (let i in list) {
            const item = list[i]
            const a = item.atletas
            // console.log(a.atleta_id);
            console.log(`INSERT INTO public.atletas_mercado (atleta_id, rodada_id,
        ano, pontos_num, preco_num, variacao_num, media_num, rb, g, a, sg, fs, ff,
        fd, ft, dd, dp, gc, cv, ca, pp, gs, fc, i, pe, jogos_num, status_id)
    VALUES (${a.atleta_id}, ${a.rodada_id}, ${CURRENT_YEAR}, ${a.pontos_num},
        ${a.variacao_num}, ${a.media_num}, ${a.media_num}, ${scout(item.RB)},
        ${scout(item.G)}, ${scout(item.A)}, ${scout(item.SG)}, ${scout(item.FS)},
        ${scout(item.FF)}, ${scout(item.FD)}, ${scout(item.FT)}, ${scout(item.DD)},
        ${scout(item.DP)}, ${scout(item.GC)}, ${scout(item.CV)}, ${scout(item.CA)},
        ${scout(item.PP)}, ${scout(item.GS)}, ${scout(item.FC)}, ${scout(item.I)},
        ${scout(item.PE)}, coalesce((SELECT aux.jogos_num + 1 FROM atletas_mercado aux
            WHERE aux.rodada_id < ${a.rodada_id} AND aux.atleta_id = ${a.atleta_id} LIMIT 1), 1),
        (SELECT s.id FROM status s WHERE s.nome = '${a.status_id}'))
        ON CONFLICT ON CONSTRAINT atletas_mercado_pkey DO
        UPDATE
        SET pontos_num=EXCLUDED.pontos_num,
            preco_num=EXCLUDED.preco_num,
            variacao_num=EXCLUDED.variacao_num,
            media_num=EXCLUDED.media_num,
            rb=EXCLUDED.rb,
            g=EXCLUDED.g,
            a=EXCLUDED.a,
            sg=EXCLUDED.sg,
            fs=EXCLUDED.fs,
            ff=EXCLUDED.ff,
            fd=EXCLUDED.fd,
            ft=EXCLUDED.ft,
            dd=EXCLUDED.dd,
            dp=EXCLUDED.dp,
            gc=EXCLUDED.gc,
            cv=EXCLUDED.cv,
            ca=EXCLUDED.ca,
            pp=EXCLUDED.pp,
            gs=EXCLUDED.gs,
            fc=EXCLUDED.fc,
            i=EXCLUDED.i,
            pe=EXCLUDED.pe;\n`)
        }
    })
