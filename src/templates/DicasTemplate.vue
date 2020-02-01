<template>
    <Layout>
        <b-row>
            <b-col md="8" offset-md="2" lg="6" offset-lg="3">
                <div class="dicas-content" v-html="$page.dicas.content" />
            </b-col>
        </b-row>
    </Layout>
</template>

<page-query>
query($path: String!) {
  dicas: dicasTemplate(path: $path) {
    path
    content
  }
}
</page-query>

<script>
export default {

}
</script>

<style scoped>
.dicas-content {
  font-size: 1.1rem;
}
</style>
