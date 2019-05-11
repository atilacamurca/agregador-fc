<template>
    <div class="py-2 bg-light mt-3">
        <b-row>
            <b-col md="5" offset-md="1" class="border-right">
                <b-row>
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
            <b-col md="5" offset-md="1" class="border-right">
                <b-row>
                    <col-zagueiros :rb="partida.zagueiros_casa.sum_rb"
                        :gc="partida.zagueiros_casa.sum_gc"
                        :g="partida.zagueiros_casa.sum_g"
                    ></col-zagueiros>
                </b-row>
            </b-col>
            <b-col md="6">
                <b-row>
                    <col-zagueiros :rb="partida.zagueiros_visitante.sum_rb"
                        :gc="partida.zagueiros_visitante.sum_gc"
                        :g="partida.zagueiros_visitante.sum_g"
                    ></col-zagueiros>
                </b-row>
            </b-col>
        </b-row>
        <hr>
        <b-row class="mt-4">
            <b-col md="5" offset-md="1" class="border-right">
                <b-row>
                    <col-atacantes :g="partida.atacantes_casa.sum_g"
                        :a="partida.atacantes_casa.sum_a"
                        :fd="partida.atacantes_casa.sum_fd"
                        :ff="partida.atacantes_casa.sum_ff"
                        :pp="partida.atacantes_casa.sum_pp"
                        :i="partida.atacantes_casa.sum_i"
                        :fc="partida.atacantes_casa.sum_fc"
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
    </div>
</template>

<script>
import ColDefesa from '~/components/partida/ColDefesa'
import ColGoleiros from '~/components/partida/ColGoleiros'
import ColZagueiros from '~/components/partida/ColZagueiros'
import ColAtacantes from '~/components/partida/ColAtacantes'

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
        ColAtacantes
    }
}
</script>
