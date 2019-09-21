// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Scout from '~/components/scouts/Scout'
import RoubadaBola from '~/components/scouts/RoubadaBola'
import Gol from '~/components/scouts/Gol'
import GolContra from '~/components/scouts/GolContra'
import PasseErrado from '~/components/scouts/PasseErrado'
import FaltaSofrida from '~/components/scouts/FaltaSofrida'
import FaltaCometida from '~/components/scouts/FaltaCometida'
import CartaoAmarelo from '~/components/scouts/CartaoAmarelo'
import CartaoVermelho from '~/components/scouts/CartaoVermelho'
import SaldoGol from '~/components/scouts/SaldoGol'
import DefesaDificil from '~/components/scouts/DefesaDificil'
import GolSofrido from '~/components/scouts/GolSofrido'
import DefesaPenalti from '~/components/scouts/DefesaPenalti'
import FinalizacaoFora from '~/components/scouts/FinalizacaoFora'
import Assistencia from '~/components/scouts/Assistencia'
import FinalizacaoDefendida from '~/components/scouts/FinalizacaoDefendida'
import Impedimento from '~/components/scouts/Impedimento'
import PenaltiPerdido from '~/components/scouts/PenaltiPerdido'
import ColNome from '~/components/clubes/ColNome'
import HeaderClube from '~/components/clubes/HeaderClube'
import RowAhLadrao from '~/components/melhores/RowAhLadrao'
import RowAcimaMedia from '~/components/melhores/RowAcimaMedia'
import VariacaoNum from '~/components/atleta/VariacaoNum'
import DadosAtleta from '~/components/atleta/DadosAtleta'
import ScoutsAta from '~/components/atleta/ScoutsAta'
import ScoutsGol from '~/components/atleta/ScoutsGol'
import ScoutsLat from '~/components/atleta/ScoutsLat'
import ScoutsMei from '~/components/atleta/ScoutsMei'
import ScoutsTec from '~/components/atleta/ScoutsTec'
import ScoutsZag from '~/components/atleta/ScoutsZag'
import ContainerDestaques from '~/components/partida/ContainerDestaques'
import RowDestaques from '~/components/partida/RowDestaques'
import FcCollapsible from '~/components/common/FcCollapsible'
import ColGoleiros from '~/components/partida/ColGoleiros'
import ColDefesa from '~/components/partida/ColDefesa'
import ColZagueiros from '~/components/partida/ColZagueiros'
import ColLaterais from '~/components/partida/ColLaterais'
import ColMeias from '~/components/partida/ColMeias'
import ColAtacantes from '~/components/partida/ColAtacantes'
import SumarioEstatisticas from '~/components/SumarioEstatisticas'
import SumarioClubes from '~/components/SumarioClubes'
import SumarioPartida from '~/components/SumarioPartida'
import RowSumarioGols from '~/components/RowSumarioGols'

import Plugins from './plugins'
import TwitterButton from "@/components/social-media/TwitterButton";
import FacebookButton from "@/components/social-media/FacebookButton";
import distanceInWords from 'date-fns/distance_in_words'
import format from 'date-fns/format'
const locale = require('date-fns/locale/pt')

import '~/assets/styles.scss'

const dateOptions = { addSuffix: true, locale }

export default function (Vue, { router, head, isClient }) {
    Vue.prototype.$year = new Date().getFullYear()

    head.meta.push({
        name: 'robots',
        content: 'index,follow'
    })
    head.meta.push({
        name: 'keywords',
        content: [
            'cartola',
            'cartola-fc',
            'agregador',
            'estatísticas',
            'campeonato-brasileiro',
            'brasileirão',
            'serie-a'
        ].join(',')
    })

    // Twitter
    head.meta.push({
        name: 'twitter:card',
        content: 'summary'
    })
    head.meta.push({
        name: 'twitter:creator',
        content: '@atilacamurca'
    })

    // Open Graph
    head.meta.push({
        key: 'og:image',
        name: 'og:image',
        content: process.env.GRIDSOME_SITE_URL + '/img/og-img.png'
    })

    // Google Site Verification
    head.meta.push({
        key: 'google-site-verification',
        name: 'google-site-verification',
        content: process.env.GRIDSOME_GOOGLE_SITE_VERIFICATION
    })

    head.meta.push({
        key: 'og:locale',
        name: 'og:locale',
        content: 'pt_BR'
    })

    Vue.use(Plugins)
    // Set default layout as a global component
    Vue.component('twitter-button', TwitterButton)
    Vue.component('facebook-button', FacebookButton)

    /*Vue.component('scout', () => import('~/components/scouts/Scout'))
    Vue.component('roubada-bola', () => import('~/components/scouts/RoubadaBola'))
    Vue.component('gol', () => import('~/components/scouts/Gol'))
    Vue.component('gol-contra', () => import('~/components/scouts/GolContra'))
    Vue.component('passe-errado', () => import('~/components/scouts/PasseErrado'))
    Vue.component('falta-sofrida', () => import('~/components/scouts/FaltaSofrida'))
    Vue.component('falta-cometida', () => import('~/components/scouts/FaltaCometida'))
    Vue.component('cartao-amarelo', () => import('~/components/scouts/CartaoAmarelo'))
    Vue.component('saldo-gol', () => import('~/components/scouts/SaldoGol'))
    Vue.component('defesa-dificil', () => import('~/components/scouts/DefesaDificil'))
    Vue.component('gol-sofrido', () => import('~/components/scouts/GolSofrido'))
    Vue.component('defesa-penalti', () => import('~/components/scouts/DefesaPenalti'))
    Vue.component('finalizacao-fora', () => import('~/components/scouts/FinalizacaoFora'))
    Vue.component('assistencia', () => import('~/components/scouts/Assistencia'))
    Vue.component('finalizacao-defendida', () => import('~/components/scouts/FinalizacaoDefendida'))
    Vue.component('impedimento', () => import('~/components/scouts/Impedimento'))
    Vue.component('penalti-perdido', () => import('~/components/scouts/PenaltiPerdido'))*/

    Vue.component('scout', Scout)
    Vue.component('roubada-bola', RoubadaBola)
    Vue.component('gol', Gol)
    Vue.component('gol-contra', GolContra)
    Vue.component('passe-errado', PasseErrado)
    Vue.component('falta-sofrida', FaltaSofrida)
    Vue.component('falta-cometida', FaltaCometida)
    Vue.component('cartao-amarelo', CartaoAmarelo)
    Vue.component('cartao-vermelho', CartaoVermelho)
    Vue.component('saldo-gol', SaldoGol)
    Vue.component('defesa-dificil', DefesaDificil)
    Vue.component('gol-sofrido', GolSofrido)
    Vue.component('defesa-penalti', DefesaPenalti)
    Vue.component('finalizacao-fora', FinalizacaoFora)
    Vue.component('assistencia', Assistencia)
    Vue.component('finalizacao-defendida', FinalizacaoDefendida)
    Vue.component('impedimento', Impedimento)
    Vue.component('penalti-perdido', PenaltiPerdido)
    Vue.component('col-nome', ColNome)
    Vue.component('header-clube', HeaderClube)
    Vue.component('row-ah-ladrao', RowAhLadrao)
    Vue.component('row-acima-media', RowAcimaMedia)
    Vue.component('variacao-num', VariacaoNum)
    Vue.component('dados-atleta', DadosAtleta)
    Vue.component('scouts-ata', ScoutsAta)
    Vue.component('scouts-gol', ScoutsGol)
    Vue.component('scouts-lat', ScoutsLat)
    Vue.component('scouts-mei', ScoutsMei)
    Vue.component('scouts-tec', ScoutsTec)
    Vue.component('scouts-zag', ScoutsZag)
    Vue.component('container-destaques', ContainerDestaques)
    Vue.component('row-destaques', RowDestaques)
    Vue.component('fc-collapsible', FcCollapsible)
    Vue.component('col-goleiros', ColGoleiros)
    Vue.component('col-defesa', ColDefesa)
    Vue.component('col-zagueiros', ColZagueiros)
    Vue.component('col-laterais', ColLaterais)
    Vue.component('col-meias', ColMeias)
    Vue.component('col-atacantes', ColAtacantes)
    Vue.component('sumario-estatisticas', SumarioEstatisticas)
    Vue.component('sumario-clubes', SumarioClubes)
    Vue.component('sumario-partida', SumarioPartida)
    Vue.component('row-sumario-gols', RowSumarioGols)

    Vue.filter('fromNow', (value) => {
        if (!value) return ''
        value = value.toString()
        return distanceInWords(new Date(), value, dateOptions)
    })
    Vue.filter('diaMes', value => {
        if (!value) return ''
        value = value.toString()
        return format(value, 'ddd DD MMM', { locale })
    })
    Vue.filter('horario', value => {
        if (!value) return ''
        value = value.toString()
        return format(value, 'HH:mm', { locale })
    })

    router.beforeEach((to, _from, next) => {
        head.meta.push({
            key: 'og:url',
            name: 'og:url',
            content: process.env.GRIDSOME_SITE_URL + to.path,
        })
        next()
    })

    head.link.push({
        key: 'manifest',
        rel: 'manifest',
        href: Vue.prototype.$url('/manifest.json')
    })

    head.meta.push({
        key: 'theme-color',
        name: 'theme-color',
        content: '#f8f9fa'
    })
}
