<template>
    <b-navbar type="dark" variant="faded" fixed="top">
        <b-container class="border-bottom border-white border-primary py-2">
            <b-navbar-brand href="#" to="/">
                <g-image class="color-brand-logo" alt="logo" src="~/assets/img/logo.svg" width="30"/>
                {{ $static.metaData.siteName }}
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item class="text-light" to="/clubes">Clubes</b-nav-item>
                    <b-nav-item to="/about">Sobre</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {

}
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.75); }
  .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
    color: rgba(255, 255, 255, 1); }
  .navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(255, 255, 255, 0.50); }
</style>
