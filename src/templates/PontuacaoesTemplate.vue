<template>
    <Layout>
        <b-row>
            <b-col cols="4" sm="3" lg="2">
                <div class="d-md-flex justify-content-md-end">
                    <g-image :src="pontuacao.foto" width="96"
                        class="img-thumbnail rounded-circle"
                        :alt="pontuacao.apelido"
                        style="width: 96px; height: 96px"
                    ></g-image>
                </div>
                <g-image
                    :src="pontuacao.escudo_60"
                    width="32px"
                    height="32px"
                    :alt="pontuacao.clube"
                    class="atleta-escudo"
                        style="width: 32px; height: 32px"
                ></g-image>
            </b-col>
            <b-col cols="8" sm="4" lg="3">
                <h4>{{ pontuacao.apelido }}</h4>
                <p class="text-primary">
                    {{ pontuacao.posicao }} do
                    {{ pontuacao.clube }}
                </p>
            </b-col>
            <b-col cols="12" sm="5" lg="4" offset-lg="2" class="my-4 my-sm-0">
                <div class="d-flex justify-content-around align-items-center h-100">
                    <div class="text-center">
                        <div class="font-weight-light text-uppercase">Preço</div>
                        <div class="lead">
                            <b-badge variant="danger" class="mr-2">{{ pontuacao.scouts.preco_num }}</b-badge>
                            <variacao-num :variacao_num="pontuacao.scouts.variacao_num"></variacao-num>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="font-weight-light text-uppercase">Média</div>
                        <div class="lead">
                            <b-badge variant="warning">{{ pontuacao.scouts.media_num }}</b-badge>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="font-weight-light text-uppercase">Jogos</div>
                        <div class="lead">
                            <b-badge variant="primary">{{ pontuacao.scouts.jogos_num }}</b-badge>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="h-25 mt-2">
                <bar-chart :data="data" :options="options"></bar-chart>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col lg="3">
                <h4 class="ml-2">Partidas</h4>
                <b-card no-body>
                    <b-list-group flush>
                        <b-list-group-item v-for="(item, index) in partidasReverse"
                            :key="index">
                            <div class="d-flex flex-columns justify-content-around">
                                <div>Rod. {{ item.rodada_id }}</div>
                                <div>
                                    <g-image width="24px"
                                        :src="item.clube_casa_escudo"
                                        :alt="item.clube_casa_abrev"
                                        :title="item.clube_casa_abrev"
                                        style="width: 24px; height: 24px"
                                    ></g-image>
                                </div>
                                <div class="">
                                    {{ item.placar_oficial_mandante }}
                                    X
                                    {{ item.placar_oficial_visitante }}
                                </div>
                                <div>
                                    <g-image width="24px"
                                        :src="item.clube_visitante_escudo"
                                        :alt="item.clube_visitante_abrev"
                                        :title="item.clube_visitante_abrev"
                                        style="width: 24px; height: 24px"
                                    ></g-image>
                                </div>
                            </div>
                        </b-list-group-item>
                    </b-list-group>
                </b-card>
                <small class="text-danger">* Jogador não necessariamente jogou.</small>
            </b-col>
            <b-col lg="4" offset-lg="1"
                class="mt-4 mt-lg-0"
                v-if="pontuacao.scouts.posicao_abrev !== 'tec'">
                <component :is="`scouts-${pontuacao.scouts.posicao_abrev}`"
                    v-bind="pontuacao.scouts"
                ></component>
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
      placar_oficial_mandante
      placar_oficial_visitante
      rodada_id
    }
    scouts {
      ultima_rodada: rodada_id
      rb
      g
      a
      sg
      fs
      ff
      fd
      ft
      dd
      dp
      gc
      cv
      ca
      pp
      gs
      fc
      i
      pe
      pontos_num
      preco_num
      variacao_num
      media_num
      jogos_num
      posicao_abrev
      posicao
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
        partidasReverse() {
            return this.pontuacao.partidas.reverse()
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
