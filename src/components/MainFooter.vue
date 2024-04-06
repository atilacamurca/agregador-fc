<template>
  <footer class="page-footer font-small bg-dark text-white pb-4">
    <div class="container text-center text-md-left mt-5 pt-4">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase font-weight-bold border-bottom pb-3">Agregador FC</h6>
          <p>
              Confira estatísticas de todos os times a cada rodada do
              <a href="https://cartolafc.globo.com/#!/home" target="_blank" rel="noopener noreferrer" class="text-warning">Cartola FC</a>.
          </p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase font-weight-bold border-bottom pb-3">Temporadas</h6>
          <p>
            <a href="https://agregador-fc-2023.netlify.app/"
             target="_blank" rel="noopener noreferrer" class="text-white">2023</a>
          </p>
          <p>
            <a href="https://agregador-fc-2022.netlify.app/"
             target="_blank" rel="noopener noreferrer" class="text-white">2022</a>
          </p>
          <p>
            <a href="https://agregador-fc-2021.netlify.app/"
             target="_blank" rel="noopener noreferrer" class="text-white">2021</a>
          </p>
          <p>
            <a href="https://agregador-fc-2020.netlify.app/"
             target="_blank" rel="noopener noreferrer" class="text-white">2020</a>
          </p>
          <p>
            <a href="https://agregador-fc-2019.netlify.app/"
             target="_blank" rel="noopener noreferrer" class="text-white">2019</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase font-weight-bold border-bottom pb-3">Redes Sociais</h6>
          <p>
            <a href="https://www.facebook.com/AgregadorFC" target="_blank" rel="noopener noreferrer" class="text-white">
                <facebook-icon></facebook-icon>
                Página do Facebook
            </a>
          </p>
          <p>
            <a href="https://github.com/atilacamurca/agregador-fc" target="_blank" rel="noopener noreferrer" class="text-white">
                <github-icon></github-icon>
                Código-fonte
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { GithubIcon, FacebookIcon } from 'vue-feather-icons'
export default {
    components: {
        GithubIcon,
        FacebookIcon
    }
}
</script>
