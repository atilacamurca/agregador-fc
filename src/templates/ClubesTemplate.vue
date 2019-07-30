<template>
    <Layout></Layout>
</template>

<page-query>
query($path: String!) {
  clube: clubesTemplate(path: $path) {
    id
    nome_fantasia
    clube_abrev
    escudo_60
    posicao
    atletas {
      id
      apelido
      posicao
      posicao_abrev
      foto
      pontos_num
      preco_num
      variacao_num
      media_num
      jogos_num
    }
  }
}
</page-query>

<script>
export default {

}
</script>

<style>

</style>
