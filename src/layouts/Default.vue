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
    background: #f12711;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 100%;
}

.fade-enter-active {
    transition: opacity .5s;
}

.fade-enter {
    opacity: 0;
}
</style>
