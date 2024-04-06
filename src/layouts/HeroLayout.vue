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
.header  {
  height: 200px;
  background: linear-gradient(103deg,#9aecee,#4d8f91,#ddda3b);
  background-size: 180% 180%;
  animation: gradient-animation 9s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.fade-enter-active {
    transition: opacity .5s;
}

.fade-enter {
    opacity: 0;
}
</style>
