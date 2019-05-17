<template>
    <div class="py-2 bg-light mt-3">
        <b-row>
            <b-col md="6" class="border-right">
                <b-row class="ml-2">
                    <col-defesa :sg="partida.goleiros_casa.sum_sg"></col-defesa>
                    <col-goleiros :dd="partida.goleiros_casa.sum_dd"
                        :gs="partida.goleiros_casa.sum_gs"
                        :dp="partida.goleiros_casa.sum_dp"
                    ></col-goleiros>
                </b-row>
            </b-col>
            <b-col md="6">
                <b-row>
                    <col-defesa :sg="partida.goleiros_visitante.sum_sg"></col-defesa>
                    <col-goleiros :dd="partida.goleiros_visitante.sum_dd"
                        :gs="partida.goleiros_visitante.sum_gs"
                        :dp="partida.goleiros_visitante.sum_dp"
                    ></col-goleiros>

                </b-row>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col md="6" class="border-right">
                <b-row>
                    <col-zagueiros :rb="partida.zagueiros_casa.sum_rb"
                        :gc="partida.zagueiros_casa.sum_gc"
                        :g="partida.zagueiros_casa.sum_g"
                        :pe="partida.zagueiros_casa.sum_pe"
                        :fs="partida.zagueiros_casa.sum_fs"
                        :fc="partida.zagueiros_casa.sum_fc"
                        :ca="partida.zagueiros_casa.sum_ca"
                        class="ml-4"
                    ></col-zagueiros>
                </b-row>
            </b-col>
            <b-col md="6">
                <b-row>
                    <col-zagueiros :rb="partida.zagueiros_visitante.sum_rb"
                        :gc="partida.zagueiros_visitante.sum_gc"
                        :g="partida.zagueiros_visitante.sum_g"
                        :pe="partida.zagueiros_visitante.sum_pe"
                        :fs="partida.zagueiros_visitante.sum_fs"
                        :fc="partida.zagueiros_visitante.sum_fc"
                        :ca="partida.zagueiros_visitante.sum_ca"
                    ></col-zagueiros>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col md="6" class="border-right">
                <b-row>
                    <col-laterais :g="partida.laterais_casa.sum_g"
                        :a="partida.laterais_casa.sum_a"
                        :fd="partida.laterais_casa.sum_fd"
                        :ff="partida.laterais_casa.sum_ff"
                        :pe="partida.laterais_casa.sum_pe"
                        :rb="partida.laterais_casa.sum_rb"
                        :fc="partida.laterais_casa.sum_fc"
                        :fs="partida.laterais_casa.sum_fs"
                        class="ml-4"
                    ></col-laterais>
                </b-row>
            </b-col>
            <b-col md="6">
                <b-row>
                    <col-laterais :g="partida.laterais_visitante.sum_g"
                        :a="partida.laterais_visitante.sum_a"
                        :fd="partida.laterais_visitante.sum_fd"
                        :ff="partida.laterais_visitante.sum_ff"
                        :pe="partida.laterais_visitante.sum_pe"
                        :rb="partida.laterais_visitante.sum_rb"
                        :fc="partida.laterais_visitante.sum_fc"
                        :fs="partida.laterais_visitante.sum_fs"
                    ></col-laterais>
                </b-row>
            </b-col>
        </b-row>
        <container-destaques posicao-em-campo="defesa">
            <row-destaques slot="casa"
                :destaques="partida.destaques_defesa_casa"
            ></row-destaques>
            <row-destaques slot="visitante"
                :destaques="partida.destaques_defesa_visitante"
            ></row-destaques>
        </container-destaques>
        <hr>
        <b-row class="mt-2">
            <b-col md="6" class="border-right">
                <b-row>
                    <col-meias :g="partida.meias_casa.sum_g"
                        :a="partida.meias_casa.sum_a"
                        :fd="partida.meias_casa.sum_fd"
                        :ff="partida.meias_casa.sum_ff"
                        :fs="partida.meias_casa.sum_fs"
                        :fc="partida.meias_casa.sum_fc"
                        :rb="partida.meias_casa.sum_rb"
                        :pe="partida.meias_casa.sum_pe"
                        :ca="partida.meias_casa.sum_ca"
                        class="ml-4"
                    ></col-meias>
                </b-row>
            </b-col>
            <b-col>
                <b-row>
                    <col-meias :g="partida.meias_visitante.sum_g"
                        :a="partida.meias_visitante.sum_a"
                        :fd="partida.meias_visitante.sum_fd"
                        :ff="partida.meias_visitante.sum_ff"
                        :fs="partida.meias_visitante.sum_fs"
                        :fc="partida.meias_visitante.sum_fc"
                        :rb="partida.meias_visitante.sum_rb"
                        :pe="partida.meias_visitante.sum_pe"
                        :ca="partida.meias_visitante.sum_ca"
                    ></col-meias>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col md="6" class="border-right">
                <b-row>
                    <col-atacantes :g="partida.atacantes_casa.sum_g"
                        :a="partida.atacantes_casa.sum_a"
                        :fd="partida.atacantes_casa.sum_fd"
                        :ff="partida.atacantes_casa.sum_ff"
                        :pp="partida.atacantes_casa.sum_pp"
                        :i="partida.atacantes_casa.sum_i"
                        :fc="partida.atacantes_casa.sum_fc"
                        class="ml-4"
                    ></col-atacantes>
                </b-row>
            </b-col>
            <b-col md="6">
                <b-row>
                    <col-atacantes :g="partida.atacantes_visitante.sum_g"
                        :a="partida.atacantes_visitante.sum_a"
                        :fd="partida.atacantes_visitante.sum_fd"
                        :ff="partida.atacantes_visitante.sum_ff"
                        :pp="partida.atacantes_visitante.sum_pp"
                        :i="partida.atacantes_visitante.sum_i"
                        :fc="partida.atacantes_visitante.sum_fc"
                    ></col-atacantes>
                </b-row>
            </b-col>
        </b-row>
        <container-destaques posicao-em-campo="ataque">
            <row-destaques slot="casa"
                :destaques="partida.destaques_ataque_casa"
            ></row-destaques>
            <row-destaques slot="visitante"
                :destaques="partida.destaques_ataque_visitante"
            ></row-destaques>
        </container-destaques>
    </div>
</template>

<script>
import ColDefesa from '~/components/partida/ColDefesa'
import ColGoleiros from '~/components/partida/ColGoleiros'
import ColZagueiros from '~/components/partida/ColZagueiros'
import ColLaterais from '~/components/partida/ColLaterais'
import ColAtacantes from '~/components/partida/ColAtacantes'
import ColMeias from '~/components/partida/ColMeias'
import ContainerDestaques from '~/components/partida/ContainerDestaques'
import RowDestaques from '~/components/partida/RowDestaques'

export default {
    props: {
        partida: {
            type: Object,
            required: true
        }
    },
    components: {
        ColDefesa,
        ColGoleiros,
        ColZagueiros,
        ColLaterais,
        ColAtacantes,
        ColMeias,
        ContainerDestaques,
        RowDestaques
    }
}
</script>
