<template>
    <b-navbar type="primary" variant="light" fixed="top" class="shadow">
        <b-container>
            <b-navbar-brand href="#" to="/">
                <g-image class="color-brand-logo" alt="logo" src="~/assets/img/logo.svg" width="30"/>
                {{ $static.metadata.siteName }}
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/clubes/">Clubes</b-nav-item>
                    <b-nav-item to="/sobre/">Sobre</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {

}
</script>
