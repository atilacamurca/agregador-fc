<template>
    <Layout>
        <b-row>
            <b-col md="10" offset-md="1">
                <h3 class="mb-2">Acima da média - Rodada {{ $page.dados.rodada }}</h3>
                <p class="lead">
                    10 jogadores de cada posição com as melhores médias e com mais jogos.
                </p>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="10" offset-md="1">
                <div class="float-right">
                    <b-list-group horizontal class="d-flex flex-fill flex-wrap flex-sm-nowrap">
                        <b-list-group-item href="#goleiros">Goleiros</b-list-group-item>
                        <b-list-group-item href="#laterais">Laterais</b-list-group-item>
                        <b-list-group-item href="#zagueiros">Zagueiros</b-list-group-item>
                        <b-list-group-item href="#meias">Meias</b-list-group-item>
                        <b-list-group-item href="#atacantes">Atacantes</b-list-group-item>
                        <b-list-group-item href="#tecnicos">Técnicos</b-list-group-item>
                    </b-list-group>
                </div>
            </b-col>
        </b-row>
        <row-acima-media
            title="Goleiros"
            id="goleiros"
            :atletas="$page.dados.goleiros"
            :urlPontuacao="urlPontuacao()"
        ></row-acima-media>
        <row-acima-media
            title="Laterais"
            id="laterais"
            :atletas="$page.dados.laterais"
            :urlPontuacao="urlPontuacao()"
        ></row-acima-media>
        <row-acima-media
            title="Zagueiros"
            id="zagueiros"
            :atletas="$page.dados.zagueiros"
            :urlPontuacao="urlPontuacao()"
        ></row-acima-media>
        <hr>
        <row-acima-media
            title="Meias"
            id="meias"
            :atletas="$page.dados.meias"
            :urlPontuacao="urlPontuacao()"
        ></row-acima-media>
        <row-acima-media
            title="Atacantes"
            id="atacantes"
            :atletas="$page.dados.atacantes"
            :urlPontuacao="urlPontuacao()"
        ></row-acima-media>
        <row-acima-media
            title="Técnicos"
            id="tecnicos"
            :atletas="$page.dados.tecnicos"
            :urlPontuacao="urlPontuacao()"
        ></row-acima-media>
    </Layout>
</template>

<page-query>
query($path: String!) {
  dados: acimaMediaTemplate(path: $path) {
    rodada
    goleiros {
      atleta_id
      apelido
      foto
      clube
      jogos_num
      media_num
      preco_num
      pontos_num
      variacao_num
      abreviacao_posicao
      nome_posicao
      partida {
        clube_casa
        clube_casa_escudo
        clube_visitante
        clube_visitante_escudo
      }
    }
    laterais {
      atleta_id
      apelido
      foto
      clube
      jogos_num
      media_num
      preco_num
      pontos_num
      variacao_num
      abreviacao_posicao
      nome_posicao
      partida {
        clube_casa
        clube_casa_escudo
        clube_visitante
        clube_visitante_escudo
      }
    }
    zagueiros {
      atleta_id
      apelido
      foto
      clube
      jogos_num
      media_num
      preco_num
      pontos_num
      variacao_num
      abreviacao_posicao
      nome_posicao
      partida {
        clube_casa
        clube_casa_escudo
        clube_visitante
        clube_visitante_escudo
      }
    }
    meias {
      atleta_id
      apelido
      foto
      clube
      jogos_num
      media_num
      preco_num
      pontos_num
      variacao_num
      abreviacao_posicao
      nome_posicao
      partida {
        clube_casa
        clube_casa_escudo
        clube_visitante
        clube_visitante_escudo
      }
    }
    atacantes {
      atleta_id
      apelido
      foto
      clube
      jogos_num
      media_num
      preco_num
      pontos_num
      variacao_num
      abreviacao_posicao
      nome_posicao
      partida {
        clube_casa
        clube_casa_escudo
        clube_visitante
        clube_visitante_escudo
      }
    }
    tecnicos {
      atleta_id
      apelido
      foto
      clube
      jogos_num
      media_num
      preco_num
      pontos_num
      variacao_num
      abreviacao_posicao
      nome_posicao
      partida {
        clube_casa
        clube_casa_escudo
        clube_visitante
        clube_visitante_escudo
      }
    }
  }
}
</page-query>

<script>
import UrlPontuacao from '~/mixins/UrlPontuacao'

export default {
    mixins: [
        new UrlPontuacao()
    ]
}
</script>
