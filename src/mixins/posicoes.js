
export default function () {
    return {
        computed: {
            posicoes() {
                return [
                    {
                        nome: 'Goleiro',
                        abrev: 'gol'
                    },
                    {
                        nome: 'Lateral',
                        abrev: 'lat'
                    },
                    {
                        nome: 'Zagueiro',
                        abrev: 'zag'
                    },
                    {
                        nome: 'Meia',
                        abrev: 'mei'
                    },
                    {
                        nome: 'Atacante',
                        abrev: 'ata'
                    },
                    {
                        nome: 'Técnico',
                        abrev: 'tec'
                    }
                ]
            }
        }
    }
}
