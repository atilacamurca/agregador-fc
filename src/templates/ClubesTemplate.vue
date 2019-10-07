<template>
    <Layout>
        <b-row class="mt-2">
            <b-col cols="12" sm="5">
                <header-clube v-bind="$page.clube">
                </header-clube>
                <b-row>
                    <b-col>
                        <b-card no-body header="Pontuações Médias dos Adversários" class="mt-4">
                            <b-list-group>
                                <b-list-group-item
                                    v-for="item in posicoes"
                                    :key="item.abrev"
                                    :href="$url(urlPontuacaoAdversario($page.clube.id, item.abrev))">
                                    {{ item.nome }}
                                </b-list-group-item>
                            </b-list-group>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" sm="7">
                <b-row class="mt-4">
                    <b-col cols="4">
                        <h4>Atletas</h4>
                    </b-col>
                    <b-col cols="8">
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
                    <b-col cols="12">
                            <hr>
                            <b-card no-body>
                                <b-list-group flush>
                                    <b-list-group-item v-for="item in atletas"
                                        :key="item.id"
                                        :href="$url(urlPontuacao()(item.id))">
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
import useLinks from '~/mixins/useLinks'
import posicoes from '~/mixins/posicoes'
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
        new useLinks(),
        new posicoes()
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
        },
        urlPontuacaoAdversario() {
            return this.makeUrlPontuacaoAdversario()
        }
    }
}
</script>
