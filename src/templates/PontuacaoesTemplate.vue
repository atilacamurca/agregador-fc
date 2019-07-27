<template>
    <Layout>
        <b-row>
            <b-col cols="4" lg="2" md="3">
                <div class="d-md-flex justify-content-md-end">
                    <b-img-lazy :src="pontuacao.foto" width="96"
                        blank-width="96"
                        blank-height="96"
                        thumbnail
                        rounded="circle"
                        :alt="pontuacao.apelido"
                    ></b-img-lazy>
                </div>
                <b-img-lazy
                    :src="pontuacao.escudo_60"
                    width="32px"
                    height="32px"
                    blank-width="32px"
                    blank-height="32px"
                    :alt="pontuacao.clube"
                    class="atleta-escudo"
                ></b-img-lazy>
            </b-col>
            <b-col>
                <h4>{{ pontuacao.apelido }}</h4>
                <p class="text-primary">
                    {{ pontuacao.posicao }} do
                    {{ pontuacao.clube }}
                </p>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="h-25 mt-2">
                <bar-chart :data="data" :options="options"></bar-chart>
            </b-col>
        </b-row>
    </Layout>
</template>

<page-query>
query Pontuacao($path: String!) {
  pontuacao: pontuacaoesTemplate(path: $path) {
    ano
    atleta_id
    apelido
    clube
    clube_id
    posicao
    foto
    escudo_60
    rodadas
    pontos
    precos
    variacoes
    medias
    partidas {
      clube_casa_abrev
      clube_casa_id
      clube_casa_escudo
      clube_visitante_abrev
      clube_visitante_id
      clube_visitante_escudo
    }
  }
}
</page-query>

<script>
import BarChart from '@/components/charts/BarChart'

export default {
    components: {
        BarChart
    },
    computed: {
        pontuacao() {
            return this.$page.pontuacao
        },
        data() {
            const { partidas, clube_id } = this.pontuacao
            return {
                labels: this.pontuacao.rodadas.map((value, index) => {
                    const partida = partidas[index]
                    const emCasa = clube_id === partida.clube_casa_id
                    const abrev = emCasa ?
                        partida.clube_visitante_abrev : partida.clube_casa_abrev
                    return [
                        `Rod. ${value}`,
                        abrev,
                        emCasa ? 'CASA' : 'VISIT'
                    ]
                }),
                datasets: [
                    {
                        label: 'Média',
                        data: this.pontuacao.medias,
                        type: 'line',
                        pointBorderColor: '#34495e',
                        pointBorderWidth: 3,
                        backgroundColor: 'whitesmoke',
                        pointHoverBackgroundColor: 'whitesmoke',
                        pointHoverBorderColor: '#34495e',
                        pointHoverBorderWidth: 4,
                        fill: false,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        borderColor: '#bdc3c7'
                    },
                    {
                        label: 'Pontos',
                        data: this.pontuacao.pontos,
                        backgroundColor: this.pontuacao.pontos.map((value) => (value >= 0 ? '#28a745' : '#dc3545'))
                    }
                ]
            }
        },
        options() {
            return {
                responsive: true,
                maintainAspectRatio: false,
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        }
    }
}
</script>

<style scoped>
.atleta-escudo {
    position: absolute;
    bottom: 0px;
    right: 0px;
}
</style>
