<template>
    <div class="app">
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

<style scoped>
.app {
    padding-top: 80px;
    padding-bottom: 80px;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    background: #087ee1;
    background: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%) fixed;
    height: 100%;
}

.fade-enter-active {
    transition: opacity .5s;
}

.fade-enter {
    opacity: 0;
}
</style>
