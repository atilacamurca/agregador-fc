<template>
  <Layout>
    <div>Rodada {{ $page.rodada.rodada }}</div>
  </Layout>
</template>

<page-query>
query Rodada ($path: String!) {
  rodada: rodadaTemplate (path: $path) {
    rodada
  }
}
</page-query>

<script>
export default {

}
</script>

<style>

</style>
