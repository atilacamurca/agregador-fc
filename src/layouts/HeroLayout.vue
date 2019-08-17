<template>
    <div class="app bg-light h-100">
        <div class="header">
            <main-nav-hero></main-nav-hero>
        </div>
        <transition name="fade" appear>
            <div>
                <slot name="hero"></slot>
                <b-container class="pt-4 pb-5 my-5">
                    <slot></slot>
                </b-container>
            </div>
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

<style scoped>
.app {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}
.header {
    background: #009FFF;
    background: -webkit-linear-gradient(150deg, #009FFF, #EC2F4C) fixed;
    background: -moz-linear-gradient(150deg, #009FFF, #EC2F4C) fixed;
    background: linear-gradient(150deg, #009FFF, #EC2F4C) fixed;
    background-repeat: no-repeat;
    background-size: 100% 50%;
    height: 200px;
}

.fade-enter-active {
    transition: opacity .5s;
}

.fade-enter {
    opacity: 0;
}
</style>
