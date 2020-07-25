<template functional>
    <b-row :id="props.id">
        <b-col col cols="12">
            <h3 class="pb-4 pt-5 pl-4">{{ props.title }}</h3>
            <b-row class="justify-content-center py-2 bg-green-field text-light">
                <b-col v-for="atleta in props.atletas" :key="atleta.atleta_id"
                    cols="6" md="3" sm="4" lg="2" class="mb-2 mx-lg-3">
                    <div v-if="atleta.atleta_id > 0">
                        <dados-atleta
                            v-bind="atleta"
                            :urlPontuacao="props.urlPontuacao(atleta.atleta_id)"
                            class="mx-3 my-2"
                            esconder-posicao>
                        </dados-atleta>
                        <b-card no-body>
                            <b-card-text class="text-dark py-1">
                                <div class="d-flex flex-columns justify-content-around">
                                    <div>
                                        <g-image width="24px"
                                            :src="atleta.partida.clube_casa_escudo"
                                            :alt="atleta.partida.clube_casa"
                                            :title="atleta.partida.clube_casa"
                                            style="width: 24px; height: 24px;"
                                        ></g-image>
                                    </div>
                                    <div class="">X</div>
                                    <div>
                                        <g-image width="24px"
                                            :src="atleta.partida.clube_visitante_escudo"
                                            :alt="atleta.partida.clube_visitante"
                                            :title="atleta.partida.clube_visitante"
                                            style="width: 24px; height: 24px;"
                                        ></g-image>
                                    </div>
                                </div>
                            </b-card-text>
                        </b-card>
                    </div>
                    <div v-else>
                        Não temos dados na primeira rodada.
                    </div>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        atletas: {
            type: Array,
            required: true
        },
        urlPontuacao: {
            type: Function,
            required: true
        }
    }
}
</script>
