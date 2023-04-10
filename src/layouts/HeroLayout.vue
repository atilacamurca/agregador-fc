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
    background: #4A00E0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
