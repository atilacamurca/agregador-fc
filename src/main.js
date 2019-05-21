// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Scout from '~/components/scouts/Scout'
import RoubadaBola from '~/components/scouts/RoubadaBola'
import Gol from '~/components/scouts/Gol'
import GolContra from '~/components/scouts/GolContra'
import PasseErrado from '~/components/scouts/PasseErrado'
import FaltaSofrida from '~/components/scouts/FaltaSofrida'
import FaltaCometida from '~/components/scouts/FaltaCometida'
import CartaoAmarelo from '~/components/scouts/CartaoAmarelo'
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

import BootstrapVue from 'bootstrap-vue'
import distanceInWords from 'date-fns/distance_in_words'
import format from 'date-fns/format'
var locale = require('date-fns/locale/pt')

import '~/assets/styles.scss'

const dateOptions = { addSuffix: true, locale }

export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
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

    Vue.use(BootstrapVue)
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
}
