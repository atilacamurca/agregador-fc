<template>
  <Layout>
    Dicas para Rodada
    <ul>
      <li v-for="item in $page.rodadas.edges" :key="item.node.rodada">
        <g-link :to="item.node.path">
          Rodada {{ item.node.rodada }}
        </g-link>
      </li>
    </ul>

  </Layout>
</template>

<page-query>
query TodasRodadas {
  rodadas: allRodadaTemplate (perPage: 10, order: DESC) {
    edges {
      node {
        path,
        rodada
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

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
