<template>
  <Layout>
    <b-row>
      <b-col
        cols="8"
        md="6"
        lg="7"
        offset-lg="1"
      >
        <h3>Rodada {{ $page.rodada.rodada }}</h3>
      </b-col>
      <b-col
        cols="4"
        md="6"
        lg="3"
        class="text-light"
      >
        <div class="d-flex justify-content-end align-items-center">
          <twitter-button
            :page_url="pageUrl"
            :page_title="pageTitle"
          ></twitter-button>
          <facebook-button
            :page_url="pageUrl"
            :page_title="pageTitle"
          ></facebook-button>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        lg="10"
        offset-lg="1"
      >
        <b-card
          no-body
          border-variant="light"
          class="shadow-sm mt-2"
        >
          <b-card-body
            v-for="partida in $page.rodada.partidas"
            :key="partida.partida_id"
            class="card-body-sumario border-bottom-light"
            :class="[partida.valida ? '' : 'alert-warning']"
          >
            <details class="details">
              <summary>
                <div
                  class="summary-title mb-3"
                  :title="partida.valida ? '' : 'Partida inválida para a rodada'"
                >
                  <sumario-partida
                    :partida-data="partida.partida_data"
                    :local="partida.local"
                    class="mb-3"
                  ></sumario-partida>
                  <sumario-clubes
                    :clube-casa="partida.clube_casa_abreviacao"
                    :clube-visitante="partida.clube_visitante_abreviacao"
                    :escudo-casa="partida.escudo_casa"
                    :clube-casa-posicao="partida.clube_casa_posicao"
                    :escudo-visitante="partida.escudo_visitante"
                    :clube-visitante-posicao="partida.clube_visitante_posicao"
                    :placar-mandante="partida.placar_oficial_mandante"
                    :placar-visitante="partida.placar_oficial_visitante"
                  ></sumario-clubes>
                </div>
                <div class="summary-chevron-up">
                  <chevron-up-icon></chevron-up-icon>
                </div>
              </summary>
              <div class="summary-content">
                  <div class="mt-2 py-2 bg-dark">
                    <b-row>
                    <b-col
                        cols="6"
                        class="border-right"
                    >
                        <row-sumario-gols v-bind="partida.sumario_gols_casa">
                        </row-sumario-gols>
                    </b-col>
                    <b-col cols="6">
                        <row-sumario-gols v-bind="partida.sumario_gols_visitante">
                        </row-sumario-gols>
                    </b-col>
                    </b-row>
                  </div>
                <sumario-estatisticas
                  :partida="partida"
                  :urlPontuacao="urlPontuacao()"
                ></sumario-estatisticas>
              </div>
              <div class="summary-chevron-down">
                <chevron-down-icon></chevron-down-icon>
              </div>
            </details>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        lg="10"
        offset-lg="1"
      >
        <h3 class="my-4">Melhores no quesito...</h3>
        <b-row>
          <b-col
            md="6" lg="4"
            class="d-flex align-items-stretch"
          >
            <b-card class="w-100">
              <b-card-title>Radar da rodada</b-card-title>
              <b-card-text>
                Radar comparativo dos scouts acumulados por posição
              </b-card-text>
              <div slot="footer">
                <g-link
                  :to="`/melhores${$page.rodada.path}/radar-rodada`"
                  class="card-link"
                >
                  Conferir
                </g-link>
              </div>
            </b-card>
          </b-col>
          <b-col
            md="6" lg="4"
            class="d-flex align-items-stretch"
          >
            <b-card class="mt-2 mt-md-0 w-100">
              <b-card-title><em>Ah, ladrão!</em></b-card-title>
              <b-card-text>
                25 melhores nos Desarmes com poucas faltasRoubadas de bola
              </b-card-text>
              <div slot="footer">
                <g-link
                  :to="`/melhores${$page.rodada.path}/ah-ladrao`"
                  class="card-link"
                >
                  Conferir
                </g-link>
              </div>
            </b-card>
          </b-col>
          <b-col
            md="6" lg="4"
            class="d-flex align-items-stretch"
          >
            <b-card class="mt-2 mt-lg-0 w-100">
              <b-card-title>Acima da média</b-card-title>
              <b-card-text>
                10 jogadores de cada posição com as melhores médias por jogos.
              </b-card-text>
              <div slot="footer">
                <g-link
                  :to="`/melhores${$page.rodada.path}/acima-media`"
                  class="card-link"
                >
                  Conferir
                </g-link>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </Layout>
</template>

<page-query>
query Rodada($path: String!) {
  rodada: rodadaTemplate(path: $path) {
    path
    rodada
    partidas {
      partida_id
      clube_casa
      clube_casa_abreviacao
      clube_visitante
      clube_visitante_abreviacao
      escudo_casa
      clube_casa_posicao
      escudo_visitante
      clube_visitante_posicao
      partida_data
      local
      placar_oficial_mandante
      placar_oficial_visitante
      valida
      sumario_gols_casa {
        gols_marcados_total
        gols_marcados_casa
        gols_marcados_fora
        gols_sofridos_total
        gols_sofridos_casa
        gols_sofridos_fora
      }
      sumario_gols_visitante {
        gols_marcados_total
        gols_marcados_casa
        gols_marcados_fora
        gols_sofridos_total
        gols_sofridos_casa
        gols_sofridos_fora
      }
      destaques_defesa_casa {
        atleta_id
        apelido
        jogos_num
        preco_num
        media_num
        variacao_num
        pontos_num
        foto
        nome_posicao
        abreviacao_posicao
      }
      destaques_defesa_visitante {
        atleta_id
        apelido
        jogos_num
        preco_num
        media_num
        variacao_num
        pontos_num
        foto
        nome_posicao
        abreviacao_posicao
      }
      goleiros_casa {
        sum_sg
        sum_de
        sum_dp
        sum_gs
      }
      goleiros_visitante {
        sum_sg
        sum_de
        sum_dp
        sum_gs
      }
      zagueiros_casa {
        sum_gc
        sum_g
        sum_fs
        sum_ca
        sum_fc
        sum_pe
        sum_ds
        sum_pi
      }
      zagueiros_visitante {
        sum_gc
        sum_g
        sum_fs
        sum_ca
        sum_fc
        sum_pe
        sum_ds
        sum_pi
      }
      laterais_casa {
        sum_g
        sum_a
        sum_fs
        sum_pe
        sum_ff
        sum_fd
        sum_fc
        sum_ds
        sum_pi
      }
      laterais_visitante {
        sum_g
        sum_a
        sum_fs
        sum_pe
        sum_ff
        sum_fd
        sum_fc
        sum_ds
        sum_pi
      }
      meias_casa {
        sum_g
        sum_a
        sum_fs
        sum_ff
        sum_fc
        sum_fd
        sum_ca
        sum_pe
        sum_ds
        sum_pi
      }
      meias_visitante {
        sum_g
        sum_a
        sum_fs
        sum_ff
        sum_fc
        sum_fd
        sum_ca
        sum_pe
        sum_ds
        sum_pi
      }
      atacantes_casa {
        sum_g
        sum_a
        sum_ff
        sum_fd
        sum_fs
        sum_pp
        sum_fc
        sum_i
        sum_fs
      }
      atacantes_visitante {
        sum_g
        sum_a
        sum_ff
        sum_fd
        sum_fs
        sum_pp
        sum_fc
        sum_i
        sum_fs
      }
      destaques_ataque_casa {
        atleta_id
        apelido
        jogos_num
        preco_num
        media_num
        variacao_num
        pontos_num
        foto
        nome_posicao
        abreviacao_posicao
      }
      destaques_ataque_visitante {
        atleta_id
        apelido
        jogos_num
        preco_num
        media_num
        variacao_num
        pontos_num
        foto
        nome_posicao
        abreviacao_posicao
      }
    }
  }
}
</page-query>

<script>
import useLinks from '~/mixins/useLinks'

export default {
  mixins: [
    new useLinks()
  ],
  computed: {
    pageUrl () {
      return `${process.env.GRIDSOME_SITE_URL}${this.$page.rodada.path}`
    },
    pageTitle () {
      return `Estatísticas para rodada ${this.$page.rodada.rodada} do @cartolafc no Agregador FC.`
    },
    pageDicas () {
      return `/dicas/rodada-${this.$page.rodada.rodada}`
    },
    partidas () {
      return Object.freeze(this.$page.rodada.partidas)
    }
  },
  metaInfo () {
    return {
      meta: [
        {
          name: 'og:title',
          content: this.pageTitle
        },
        {
          name: 'og:description',
          content: `Veja as estatísticas de todos os confrontos da rodada ${this.$page.rodada.rodada} do Cartola FC. Compare os times e escale seu esquadrão.`
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-body.card-body-sumario {
  padding: 1.25rem 0 !important;
}
</style>
