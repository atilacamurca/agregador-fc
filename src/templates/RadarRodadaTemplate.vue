<template>
    <Layout>
        <b-row>
            <b-col cols="12" class="text-center">
                <h3 class="mb-2 ">Radar da Rodada {{ $page.radar.rodada }}</h3>
                <p class="lead mb-4">
                    Radar comparativo dos scouts acumulados por posição
                </p>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-card no-body border-variant="light" class="shadow-sm">
                    <b-card-body v-for="item in $page.radar.partidas"
                        :key="item.partida_id"
                        class="card-body-sumario border-bottom-light">
                        <row-radar-rodada v-bind="item"></row-radar-rodada>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p class="mt-4 text-muted">
                    A Pontuação total é calculada como o somatório das pontuações de todos os jogadores por posição, levando em conta o número de pontos por <em>scout</em>.
                </p>
            </b-col>
        </b-row>
    </Layout>
</template>

<page-query>
query($path: String!) {
  radar: radarRodadaTemplate(path: $path) {
    rodada
    partidas {
      partida_id
      radar_casa {
        pos
        sum_pos
      }
      radar_visitante {
        pos
        sum_pos
      }
      clube_casa_id
      clube_casa
      escudo_casa
      clube_casa_abreviacao
      clube_casa_posicao
      clube_visitante_id
      clube_visitante
      escudo_visitante
      clube_visitante_abreviacao
      clube_visitante_posicao
    }
  }
}
</page-query>

<script>
export default {
}
</script>
