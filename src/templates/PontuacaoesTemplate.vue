<template>
    <Layout>
        <b-row>
            <b-col cols="4" lg="2">
                <div class="d-lg-flex justify-content-lg-end">
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
            <b-col class="h-25">
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
      clube_casa
      clube_casa_id
      clube_casa_escudo
      clube_visitante
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
            return {
                labels: this.pontuacao.rodadas,
                datasets: [
                    {
                        label: 'Média',
                        data: this.pontuacao.medias,
                        type: 'line',
                        backgroundColor: '#dc3545',
                        fill: false
                    },
                    {
                        label: 'Pontos',
                        data: this.pontuacao.pontos,
                        backgroundColor: '#28a745'
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
                legend: {
                    display: true
                },
                title: {
                    display: true
                },
                legendCallback: function (chart) {
                    var text = [];
  text.push('<ul class="' + chart.id + '-legend">');
  for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
    text.push('<li><span style="background-color:' +
    chart.data.datasets[0].backgroundColor[i] + '">');
      if (chart.data.labels[i]) {
      text.push(chart.data.labels[i] + ' teste');
    }
    text.push('</span></li>');
  }
  text.push('</ul>');
  return text.join("");
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
