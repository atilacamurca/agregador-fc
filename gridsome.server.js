// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const _pick = require('lodash.pick')
const _find = require('lodash.find')
const CURRENT_YEAR = process.env.GRIDSOME_TEMPORADA
const RODADA_ATUAL_ID = process.env.RODADA_ATUAL_ID

const rodadaAtual = require(`./rodada/${CURRENT_YEAR}/${RODADA_ATUAL_ID}.json`)

module.exports = function (api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
    const contentType = store.addCollection({
      typeName: 'RodadaAtualTemplate'
    })

    const { rodada, inicio_rodada, partidas } = rodadaAtual
    const partida_inicial = _find(partidas, (item) => {
        return item.valida
    })
    contentType.addNode({
      id: "latest",
      path: `/rodada/${CURRENT_YEAR}/${RODADA_ATUAL_ID}`,
      rodada,
      inicio_rodada,
      partida_inicial: _pick(partida_inicial, [
          'partida_id',
          'clube_casa_id',
          'clube_casa',
          'clube_casa_posicao',
          'clube_casa_abreviacao',
          'escudo_casa',
          'clube_visitante_id',
          'clube_visitante',
          'clube_visitante_posicao',
          'escudo_visitante',
          'clube_visitante_abreviacao',
          'partida_data',
          'local'
        ])
    })
  })
}
