<template>
    <Layout>
        <b-row class="mt-2">
            <b-col md="6" offset-md="3">
                <b-card no-body>
                    <b-list-group flush>
                        <b-list-group-item v-for="item in $page.clubes.edges"
                            :key="item.node.id"
                            :href="$url(item.node.path)"
                            class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <div class="d-flex align-items-center">
                                    <g-image
                                        :src="item.node.escudo_60"
                                        :alt="item.node.clube_abrev"
                                        style="width: 36px;height: 36px"
                                    ></g-image>
                                    <h5 class="ml-4">{{ item.node.nome_fantasia }}</h5>
                                </div>
                                <div class="d-flex align-items-center">
                                    <h4><b-badge variant="success">{{ item.node.posicao }} &deg;</b-badge></h4>
                                </div>
                            </div>
                        </b-list-group-item>
                    </b-list-group>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>

<page-query>
query {
  clubes: allClubesTemplate(
    sort: [{ by: "posicao", order: ASC }, { by: "nome_fantasia", order: ASC }]
  ) {
    edges {
      node {
        path
        id
        nome_fantasia
        clube_abrev
        escudo_60
        posicao
      }
    }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
        title: 'Clubes'
    }
}
</script>
