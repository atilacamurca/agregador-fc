<template>
    <Layout>
        <b-row class="mt-2">
            <b-col md="6" offset-md="3">
                <div class="d-flex w-100 justify-content-between">
                    <div class="d-flex align-items-center">
                        <g-image
                            :src="$page.clube.escudo_60"
                            :alt="$page.clube.clube_abrev"
                            style="width: 40px;height: 40px"
                        ></g-image>
                        <h5 class="ml-4">{{ $page.clube.nome_fantasia }}</h5>
                    </div>
                    <div class="d-flex align-items-center">
                        <h4><b-badge variant="success">{{ $page.clube.posicao }} &deg;</b-badge></h4>
                    </div>
                </div>
            </b-col>
      </b-row>
      <b-row class="mt-4">
          <b-col cols="4" sm="2" offset-sm="3">
            <h4>Atletas</h4>
          </b-col>
          <b-col cols="8" sm="4">
              <input
                v-model.lazy="filter"
                v-debounce="delay"
                placeholder="Buscar atleta..."
                :autofocus="'autofocus'"
                class="form-control"
            />
          </b-col>
      </b-row>
      <b-row>
          <b-col sm="8" offset-sm="2" lg="6" offset-lg="3">
                <hr>
                <b-card no-body>
                    <b-list-group flush>
                        <b-list-group-item v-for="item in atletas"
                            :key="item.id"
                            :href="urlPontuacao()(item.id)">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex flex-column align-items-center"
                                    style="width: 120px">
                                    <div>
                                        <g-image
                                            :src="item.foto"
                                            :alt="item.apelido"
                                            style="width: 64px;height: 64px"
                                            class="img-thumbnail rounded-circle"
                                        ></g-image>
                                    </div>
                                    <div class="lead text-center">{{ item.apelido }}</div>
                                </div>
                                <div class="d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        <span>
                                            {{ item.posicao }}
                                        </span>
                                    </div>
                                    <div>
                                        <b-badge variant="dark">ULT. {{ item.pontos_num }}</b-badge>
                                        &nbsp;
                                        <variacao-num variant="light" :variacao_num="item.variacao_num"></variacao-num>
                                    </div>
                                    <div>
                                        <b-badge variant="warning">M {{ item.media_num }}</b-badge>
                                        em <b-badge variant="light">{{ item.jogos_num }} J</b-badge>
                                    </div>
                                </div>
                            </div>
                        </b-list-group-item>
                    </b-list-group>
                </b-card>
          </b-col>
      </b-row>
    </Layout>
</template>

<page-query>
query($path: String!) {
  clube: clubesTemplate(path: $path) {
    id
    nome_fantasia
    clube_abrev
    escudo_60
    posicao
    atletas {
      id
      apelido
      posicao
      posicao_abrev
      foto
      pontos_num
      preco_num
      variacao_num
      media_num
      jogos_num
    }
  }
}
</page-query>

<script>
import UrlPontuacao from '~/mixins/UrlPontuacao'
import Fuse from 'fuse.js'
import debounce from 'v-debounce'

const options = {
  keys: ['apelido']
};

export default {
    data () {
        return {
            fuse: null,
            filter: '',
            delay: 250
        }
    },
    mixins: [
        new UrlPontuacao()
    ],
    directives: {
        debounce
    },
    beforeMount () {
        this.fuse = new Fuse(this.$page.clube.atletas, options)
    },
    computed: {
        atletas () {
            if(this.filter === '') {
                return this.$page.clube.atletas;
            }
            return this.fuse.search(this.filter)
        }
    }
}
</script>
