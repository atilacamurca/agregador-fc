<template>
    <Layout>
        <b-row>
            <b-col cols="12" sm="8" offset-sm="2">
                <header-clube v-if="clube" v-bind="clube">
                </header-clube>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col cols="12">
                    <h3 class="text-center">Pontuações do adversário - {{ $page.clube.posicao }}</h3>
                    <hr>
                    <b-card no-body>
                        <b-list-group flush>
                            <b-list-group-item v-for="item in $page.clube.pontuacoes"
                                :key="item.rodada_id">
                                <b-row>
                                    <b-col sm="7" lg="5">
                                        <div class="d-flex flex-columns justify-content-around align-items-center h-100">
                                            <div>Rod. {{ item.rodada_id }}</div>
                                            <sumario-clubes :clube-casa="item.clube_casa_abreviacao"
                                                :clube-visitante="item.clube_visitante_abreviacao"
                                                :escudo-casa="item.escudo_casa"
                                                :escudo-visitante="item.escudo_visitante"
                                                :placar-mandante="item.placar_oficial_mandante"
                                                :placar-visitante="item.placar_oficial_visitante"
                                                escudo-size="24px"
                                            ></sumario-clubes>
                                        </div>
                                    </b-col>
                                    <b-col sm="5" lg="4" offset-lg="3" class="my-4 my-sm-0">
                                        <div class="d-flex justify-content-around align-items-center h-100">
                                            <div class="text-center">
                                                <div v-if="item.clube_id === item.clube_casa_id">
                                                    <g-image width="24px"
                                                        :src="item.escudo_casa"
                                                        :alt="item.clube_casa_abrev"
                                                        :title="item.clube_casa_abrev"
                                                        style="width: 24px; height: 24px"
                                                    ></g-image>
                                                </div>
                                                <div class="lead" v-else>
                                                    <g-image width="24px"
                                                        :src="item.escudo_visitante"
                                                        :alt="item.clube_visitante_abreviacao"
                                                        :title="item.clube_visitante_abreviacao"
                                                        style="width: 24px; height: 24px"
                                                    ></g-image>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <div class="font-weight-light text-uppercase">Média</div>
                                                <div class="lead">
                                                    <b-badge variant="primary" class="mr-2">{{ item.pontos_num_avg }}</b-badge>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <div class="font-weight-light text-uppercase">Máx.</div>
                                                <div class="lead">
                                                    <b-badge variant="success">{{ item.pontos_num_max }}</b-badge>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <div class="font-weight-light text-uppercase">Min.</div>
                                                <div class="lead">
                                                    <b-badge variant="danger">{{ item.pontos_num_min }}</b-badge>
                                                </div>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                    </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>

<page-query>
query($path: String!) {
  clube: pontuacaoesAdversarioTemplate(path: $path) {
    path
    clube_id
    posicao
    pontuacoes {
      clube_id
      rodada_id
      pontos_num_avg
      pontos_num_max
      pontos_num_min
      clube_casa_id
      clube_casa_abreviacao
      escudo_casa
      clube_visitante_id
      clube_visitante_abreviacao
      escudo_visitante
      placar_oficial_mandante
      placar_oficial_visitante
    }
  }
}
</page-query>

<script>
export default {
    data() {
        return {
            clube: null
        }
    },
    async mounted() {
        try {
            const results = await this.$fetch(`/clubes/${this.$year}/${this.$page.clube.clube_id}`)

            this.clube = results.data.clube
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
