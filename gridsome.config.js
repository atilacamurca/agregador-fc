// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const TEMPORADA = process.env.GRIDSOME_TEMPORADA

module.exports = {
  siteName: 'Agregador FC',
  siteUrl: 'https://atilacamurca.github.io',
  pathPrefix: '/agregador-fc',
  siteDescription: 'Agregador FC é um site para te ajudar a decidir seu time para o Cartola FC.',
  templates: {
    DicasTemplate: '/dicas/:title'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: `rodada/${TEMPORADA}/*.json`,
        typeName: 'RodadaTemplate',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: `melhores/rodada/${TEMPORADA}/**/ah-ladrao.json`,
        typeName: 'AhLadraoTemplate',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: `melhores/rodada/${TEMPORADA}/**/acima-media.json`,
        typeName: 'AcimaMediaTemplate',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: `pontuacoes/atleta/${TEMPORADA}/*.json`,
        typeName: 'PontuacaoesTemplate',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: `clubes/${TEMPORADA}/*.json`,
        typeName: 'ClubesTemplate',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: `pontuacoes/adversario/${TEMPORADA}/**/*.json`,
        typeName: 'PontuacaoesAdversarioTemplate',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: `melhores/rodada/${TEMPORADA}/**/radar-rodada.json`,
        typeName: 'RadarRodadaTemplate',
      }
    },/*,
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    }*/
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        config: {
          '/rodada/*': {
            changefreq: 'weekly',
            priority: 1.0
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.1
          },
          '/clubes/*': {
            changefreq: 'weekly',
            priority: 0.6
          },
          '/melhores/*': {
            changefreq: 'weekly',
            priority: 0.6
          },
          '/pontuacoes/*': {
            changefreq: 'weekly',
            priority: 0.7
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'DicasTemplate',
        path: './content/dicas/*.md',
      }
    }
  ],
  chainWebpack: config => {
    config
      .plugin('BundleAnalyzerPlugin')
      .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static', openAnalyzer: false }])
  },
  configureWebpack: {
    externals: {
      moment: 'moment'
    }
  },

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
    }
  }
}
