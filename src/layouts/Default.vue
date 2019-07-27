<template>
    <div>
        <main-nav></main-nav>
        <transition name="fade" appear>
            <b-container class="shadow pt-4 pb-5 mb-5 rounded-lg bg-white">
                <slot></slot>
            </b-container>
        </transition>
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
    background: -webkit-linear-gradient(135deg, #009FFF, #EC2F4C) fixed;
    background: -moz-linear-gradient(135deg, #009FFF, #EC2F4C) fixed;
    background: linear-gradient(135deg, #009FFF, #EC2F4C) fixed;
}

.fade-enter-active {
    transition: opacity .5s;
}

.fade-enter {
    opacity: 0;
}
</style>
