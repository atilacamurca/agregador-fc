<template>
    <div>
        <main-nav-hero></main-nav-hero>
        <transition name="fade" appear>
            <slot name="hero"></slot>
            <b-container class="shadow pt-4 pb-5 mb-5 rounded-lg bg-white">
                <slot></slot>
            </b-container>
        </transition>
    </div>
</template>

<script>
import MainNavHero from '~/components/MainNavHero'

export default {
    components: {
        MainNavHero
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
    background-repeat: no-repeat;
    background-size: 100% 50%;
}

.fade-enter-active {
    transition: opacity .5s;
}

.fade-enter {
    opacity: 0;
}
</style>
