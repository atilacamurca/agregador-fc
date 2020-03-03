<template>
    <div>
        <b-container class="inline pt-4">
            <div class="d-flex flex-column flex-md-row justify-content-md-between align-items-md-baseline">
                <div class="text-white">
                    <g-link to="/" class="text-white text-decoration-none" style="font-size: 1.5rem;">
                        <g-image
                            class="color-brand-logo"
                            alt="logo"
                            src="~/assets/img/logo-rounded.svg"
                            width="48"/>
                        <span class="underline-from-center ml-2">{{ $static.metadata.siteName }}</span>
                    </g-link>
                </div>
                <div class="d-flex justify-content-end">
                    <g-link
                        class="text-white text-decoration-none underline-from-center font-weight-bold"
                        to="/clubes/"
                    >
                        Clubes
                    </g-link>
                    <g-link
                        class="text-white text-decoration-none ml-3 underline-from-center font-weight-bold"
                        to="/sobre/"
                    >
                        Sobre
                    </g-link>
                </div>
            </div>
        </b-container>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {

}
</script>

<style scoped>
/* Underline From Center */
.underline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.underline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: #fff;
  height: 2px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.underline-from-center:hover:before, .underline-from-center:focus:before, .underline-from-center:active:before {
  left: 0;
  right: 0;
}
</style>
