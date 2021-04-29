<template>
    <div class="app">
        <main-nav></main-nav>
        <transition name="fade" appear>
            <b-container class="shadow pt-4 pb-5 mb-5 rounded-lg bg-white">
                <slot></slot>
            </b-container>
        </transition>
        <main-footer></main-footer>
    </div>
</template>

<script>
import MainNav from '~/components/MainNav'
import MainFooter from '~/components/MainFooter'

export default {
    components: {
        MainNav,
        MainFooter
    }
}
</script>

<style scoped>
.app {
    padding-top: 80px;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    background: #6B960C;
    background: -webkit-linear-gradient(top left, #36DDAC, #6B960C) fixed;
    background: -moz-linear-gradient(top left, #36DDAC, #6B960C) fixed;
    background: linear-gradient(to bottom right, #36DDAC, #6B960C) fixed;
    height: 100%;
}

.fade-enter-active {
    transition: opacity .5s;
}

.fade-enter {
    opacity: 0;
}
</style>
