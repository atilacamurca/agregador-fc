<template>
    <HeroLayout>
        <b-row slot="hero" class="mt-4">
            <b-col lg="8" offset-lg="2">
                <b-card></b-card>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col md="6" offset-md="3">
                <b-card no-body>
                    <b-list-group flush>
                        <b-list-group-item v-for="(item, index) in $page.rodadas.edges"
                            :key="item.node.rodada"
                            :href="item.node.path"
                            class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Rodada {{ item.node.rodada }}</h5>
                                <small>{{ item.node.inicio_rodada | fromNow }}</small>
                            </div>

                            <p class="m-1 lead" v-if="index === 0">
                                <span class="text-warning">&starf;</span>
                                Prepare-se para a próxima rodada aqui
                            </p>
                        </b-list-group-item>
                    </b-list-group>
                </b-card>
            </b-col>
        </b-row>
    </HeroLayout>
</template>

<page-query>
query TodasRodadas {
  rodadas: allRodadaTemplate(perPage: 10, order: DESC, sortBy: "rodada") {
    edges {
      node {
        path
        rodada
        inicio_rodada
      }
    }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
        title: 'Dicas para Rodada'
    }
}
</script>
