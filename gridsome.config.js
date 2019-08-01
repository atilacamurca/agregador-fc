// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Agregador FC',
  siteUrl: 'https://atilacamurca.github.io',
  pathPrefix: '/agregador-fc',
  siteDescription: 'Agregador FC é um site para te ajudar a decidir seu time para o Cartola FC.',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'rodada/**/*.json',
        typeName: 'RodadaTemplate',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'melhores/**/ah-ladrao.json',
        typeName: 'AhLadraoTemplate',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'melhores/**/acima-media.json',
        typeName: 'AcimaMediaTemplate',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'pontuacoes/**/*.json',
        typeName: 'PontuacaoesTemplate',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'clubes/**/*.json',
        typeName: 'ClubesTemplate',
      }
    }
  ]
}
