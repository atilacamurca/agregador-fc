<template>
    <HeroLayout>
        <b-row slot="hero" class="mt-n6">
            <b-col class="mx-2 mx-sm-auto" md="10" offset-md="1" lg="8" offset-lg="2">
                <b-card class="shadow-lg border-none" no-body>
                    <b-card-body>
                        <b-row>
                            <b-col lg="5" class="text-center">
                                <div class="display-4">
                                    Rodada
                                    <span class="display-2 font-weight-bold text-stroke">{{ rodadaAtual.rodada }}</span>
                                </div>
                                <div class="lead">{{ rodadaAtual.inicio_rodada | fromNow }}</div>
                            </b-col>
                            <b-col lg="7" class="mt-4">
                                <sumario-partida :partida-data="rodadaAtual.partida_inicial.partida_data"
                                    :local="rodadaAtual.partida_inicial.local"
                                ></sumario-partida>
                                <sumario-clubes :clube-casa="rodadaAtual.partida_inicial.clube_casa_abreviacao"
                                        :clube-visitante="rodadaAtual.partida_inicial.clube_visitante_abreviacao"
                                        :escudo-casa="rodadaAtual.partida_inicial.escudo_casa"
                                        :clube-casa-posicao="rodadaAtual.partida_inicial.clube_casa_posicao"
                                        :escudo-visitante="rodadaAtual.partida_inicial.escudo_visitante"
                                        :clube-visitante-posicao="rodadaAtual.partida_inicial.clube_visitante_posicao"
                                ></sumario-clubes>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-footer class="d-flex justify-content-end border-top-0">
                        <g-link :to="rodadaAtual.path" class="btn btn-warning btn-lg">Ir para rodada</g-link>
                    </b-card-footer>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="mt-2" v-if="$page.rodadas.edges.length > 0">
            <b-col md="8" offset-md="2" lg="6" offset-lg="3">
                <h4 class="mb-4">Rodadas anteriores</h4>
                <b-card no-body class="shadow-sm">
                    <b-list-group flush>
                        <b-list-group-item v-for="item in $page.rodadas.edges"
                            :key="item.node.rodada"
                            :href="$url(item.node.path)"
                            class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between align-items-center">
                                <h5 class="mb-1">Rodada {{ item.node.rodada }}</h5>
                                <small>{{ item.node.inicio_rodada | fromNow }}</small>
                            </div>
                        </b-list-group-item>
                    </b-list-group>
                </b-card>
            </b-col>
        </b-row>
    </HeroLayout>
</template>

<page-query>
query TodasRodadas {
  rodadas: allRodadaTemplate(
    perPage: 10
    order: DESC
    sortBy: "rodada"
    skip: 1
    filter: { ano: { eq: "2020" } }
  ) {
    edges {
      node {
        path
        rodada
        inicio_rodada
      }
    }
  }

  rodadaAtual: rodadaAtualTemplate(id: "latest") {
    path
    rodada
    inicio_rodada
    partida_inicial {
      partida_id
      clube_casa_id
      clube_casa
      clube_casa_posicao
      clube_casa_abreviacao
      escudo_casa
      clube_visitante_id
      clube_visitante
      clube_visitante_posicao
      clube_visitante_abreviacao
      escudo_visitante
      partida_data
      local
    }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
        title: 'Dicas para Rodada'
    },
    computed: {
        rodadaAtual() {
            return this.$page.rodadaAtual
        }
    }
}
</script>

<style scoped>
.mt-n6 {
    margin-top: -5rem !important;
}
.text-stroke {
    -webkit-text-stroke: 3px var(--primary);
    color: white;
}
</style>
