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
    background: #087ee1;
    background: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%) fixed;
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
