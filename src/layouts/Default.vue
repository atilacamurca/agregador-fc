<template>
    <div>
        <main-nav></main-nav>
        <b-container class="shadow pt-4 pb-5 mb-5 rounded-lg bg-white">
            <slot></slot>
        </b-container>
    </div>
</template>

<script>
import MainNav from '~/components/MainNav'

export default {
    components: {
        MainNav
    }
}
</script>

<style>
body {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    background: #009FFF;
    background: -webkit-linear-gradient(to left, #009FFF, #EC2F4C);
    background: -moz-linear-gradient(to left, #009FFF, #EC2F4C);
    background: linear-gradient(to left, #009FFF, #EC2F4C);
}
</style>
