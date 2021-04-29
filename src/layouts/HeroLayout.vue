<template>
    <div class="app bg-light h-100">
        <div class="header">
            <main-nav-hero></main-nav-hero>
        </div>
        <transition name="fade" appear>
            <div>
                <slot name="hero"></slot>
                <b-container class="pb-5 my-5">
                    <slot></slot>
                </b-container>
            </div>
        </transition>
        <main-footer></main-footer>
    </div>
</template>

<script>
import MainNavHero from '~/components/MainNavHero'
import MainFooter from '~/components/MainFooter'

export default {
    components: {
        MainNavHero,
        MainFooter
    }
}
</script>

<style scoped>
.app {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}
.header {
    background: #6B960C;
    background: -webkit-linear-gradient(top left, #36DDAC, #6B960C) fixed;
    background: -moz-linear-gradient(top left, #36DDAC, #6B960C) fixed;
    background: linear-gradient(to bottom right, #36DDAC, #6B960C) fixed;
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
