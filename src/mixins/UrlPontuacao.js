
export default function () {
    return {
        methods: {
            urlPontuacao() {
                return (atleta_id) => (`/pontuacoes/${this.$year}/${atleta_id}`)
            }
        }
    }
}
