<template>
    <Layout>
        <b-row>
            <b-col cols="12">
                <h3 class="mb-2"><em>Ah, ladrão!</em> - Rodada {{ $page.scouts.rodada }}</h3>
                <p class="lead mb-4">
                    Jogadores com muitas roubadas de bola e poucas
                    faltas cometidas ou cartões amarelos.
                </p>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-card no-body border-variant="light" class="shadow-sm">
                    <b-card-body v-for="item in $page.scouts.lista"
                        :key="item.atleta_id"
                        class="card-body-sumario border-bottom-light">
                        <row-ah-ladrao
                            v-if="item.atleta_id > 0"
                            v-bind="item"
                            :urlPontuacao="urlPontuacao()(item.atleta_id)"
                        ></row-ah-ladrao>
                        <b-row v-else>
                            <b-col>Não temos dados na primeira rodada.</b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p class="mt-4 text-muted">
                    A Pontuação total é calculada como o somatório das roubadas de bola,
                    faltas cometidas e cartões amarelos.
                </p>
            </b-col>
        </b-row>
    </Layout>
</template>

<page-query>
query($path: String!) {
  scouts: ahLadraoTemplate(path: $path) {
    rodada
    lista {
      atleta_id
      apelido
      posicao
      posicao_abrev
      escudo
      clube
      foto
      rb
      fc
      ca
      tot_rb
      tot_fc
      tot_ca
      tot_pontuacao
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

export default {
    mixins: [
        new useLinks()
    ]
}
</script>
