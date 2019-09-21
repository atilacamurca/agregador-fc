
export default function () {
    return {
        methods: {
            urlPontuacao() {
                return (atleta_id) => (`/pontuacoes/atleta/${this.$year}/${atleta_id}`)
            },
            makeUrlPontuacaoAdversario() {
                return (clube_id, posicao_abrev) =>
                    `/pontuacoes/adversario/${this.$year}/${clube_id}/${posicao_abrev}`
            }
        }
    }
}
