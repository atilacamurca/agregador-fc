<template>
    <b-row>
        <b-col md="6" lg="5" offset-lg="2">
            <b-row class="h-100">
                <col-nome
                    :nome="clube_casa_abreviacao"
                    :posicao="clube_casa_posicao"
                    order="2"
                    order-md="1"
                ></col-nome>
                <b-col cols="12" md="2"
                    class="d-flex align-items-center justify-content-sm-center justify-content-around"
                    order="1"
                    order-md="2">
                    <div class="mx-2">
                        <g-image :width="escudoSize"
                            :src="escudo_casa"
                            alt="escudo-casa"
                            :style="{width: escudoSize, height: escudoSize}"
                        ></g-image>
                    </div>
                    <div class="text-center d-flex flex-direction-column lead">
                        <span class="mx-2">X</span>
                    </div>
                    <div class="mx-2">
                        <g-image :width="escudoSize"
                            :src="escudo_visitante"
                            alt="escudo-visitante"
                            :style="{width: escudoSize, height: escudoSize}"
                        ></g-image>
                    </div>
                </b-col>
                <col-nome
                    :nome="clube_visitante_abreviacao"
                    :posicao="clube_visitante_posicao"
                    order="3"
                    order-md="3"
                ></col-nome>
            </b-row>
        </b-col>
        <b-col md="6" lg="4">
            <radar-chart :data="data" :options="options" style="height: 300px"></radar-chart>
        </b-col>
    </b-row>
</template>

<script>
import RadarChart from '~/components/charts/RadarChart'

export default {
    components: {
        RadarChart
    },
    props: {
        clube_casa_abreviacao: {
            type: String,
            required: true
        },
        clube_visitante_abreviacao: {
            type: String,
            required: true
        },
        escudo_casa: {
            type: String,
            required: true
        },
        escudo_visitante: {
            type: String,
            required: true
        },
        clube_casa_posicao: {
            type: Number,
            required: false
        },
        clube_visitante_posicao: {
            type: Number,
            required: false
        },
        escudoSize: {
            type: String,
            reqyured: false,
            default: '40px'
        },
        radar_casa: {
            type: Array,
            required: true
        },
        radar_visitante: {
            type: Array,
            required: true
        }
    },
    computed: {
        data() {
            const labels = []
            const datasetCasa = []
            const datasetVisitante = []
            for (let i = 0; i < 5; i++) {
                labels.push(this.radar_casa[i].pos)
                datasetCasa.push(this.radar_casa[i].sum_pos)
                datasetVisitante.push(this.radar_visitante[i].sum_pos)
            }
            return {
                labels,
                datasets: [
                    {
                        label: this.clube_casa_abreviacao,
                        data: datasetCasa,
                        backgroundColor: 'rgba(40,167,69,0.1)',
                        borderColor: 'rgb(40,167,69)',
                        pointBackgroundColor: 'rgb(40,167,69)'
                    },
                    {
                        label: this.clube_visitante_abreviacao,
                        data: datasetVisitante,
                        backgroundColor: 'rgba(167,40,138,0.1)',
                        borderColor: 'rgb(167,40,138)',
                        pointBackgroundColor: 'rgb(167,40,138)'
                    }
                ]
            }
        },
        options () {
            return {
                responsive: true,
                maintainAspectRatio: false,
				tooltips: {
					mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(item, data) {
                            const i = data.datasets[item.datasetIndex]
                            return i.label + ': ' + i.data[item.index]
                        }
                    }
				},
                legend: {
					position: 'bottom'
				}
            }
        }
    }
}
</script>
