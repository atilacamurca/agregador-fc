<template>
    <b-navbar type="primary" variant="light" fixed="top">
        <b-container>
            <b-navbar-brand href="#" to="/">
                <g-image class="color-brand-logo" src="~/assets/img/logo.svg" width="30"/>
                {{ $static.metaData.siteName }}
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
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
