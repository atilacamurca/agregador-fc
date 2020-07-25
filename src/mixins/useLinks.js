
export default function () {
    return {
        methods: {
            urlPontuacao() {
                return (atleta_id) => `/pontuacoes/atleta/${process.env.GRIDSOME_TEMPORADA}/${atleta_id}/`
            },
            makeUrlPontuacaoAdversario() {
                return (clube_id, posicao_abrev) =>
                    `/pontuacoes/adversario/${process.env.GRIDSOME_TEMPORADA}/${clube_id}/${posicao_abrev}/`
            }
        }
    }
}
