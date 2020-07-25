<template functional>
    <div class="py-2 bg-light">
        <b-row>
            <b-col cols="6" md="6" class="border-right">
                <b-row class="ml-2">
                    <col-defesa :sg="props.partida.goleiros_casa.sum_sg"></col-defesa>
                    <col-goleiros :dd="props.partida.goleiros_casa.sum_dd"
                        :gs="props.partida.goleiros_casa.sum_gs"
                        :dp="props.partida.goleiros_casa.sum_dp"
                    ></col-goleiros>
                </b-row>
            </b-col>
            <b-col cols="6" md="6">
                <b-row>
                    <col-defesa :sg="props.partida.goleiros_visitante.sum_sg"></col-defesa>
                    <col-goleiros :dd="props.partida.goleiros_visitante.sum_dd"
                        :gs="props.partida.goleiros_visitante.sum_gs"
                        :dp="props.partida.goleiros_visitante.sum_dp"
                    ></col-goleiros>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col cols="6" md="6" class="border-right">
                <b-row>
                    <col-zagueiros
                        :rb="props.partida.zagueiros_casa.sum_rb"
                        :gc="props.partida.zagueiros_casa.sum_gc"
                        :g="props.partida.zagueiros_casa.sum_g"
                        :pe="props.partida.zagueiros_casa.sum_pe"
                        :fs="props.partida.zagueiros_casa.sum_fs"
                        :fc="props.partida.zagueiros_casa.sum_fc"
                        :ca="props.partida.zagueiros_casa.sum_ca"
                        :ds="props.partida.zagueiros_casa.sum_ds"
                        :pi="props.partida.zagueiros_casa.sum_pi"
                        class="ml-4"
                    ></col-zagueiros>
                </b-row>
            </b-col>
            <b-col cols="6" md="6">
                <b-row>
                    <col-zagueiros
                        :rb="props.partida.zagueiros_visitante.sum_rb"
                        :gc="props.partida.zagueiros_visitante.sum_gc"
                        :g="props.partida.zagueiros_visitante.sum_g"
                        :pe="props.partida.zagueiros_visitante.sum_pe"
                        :fs="props.partida.zagueiros_visitante.sum_fs"
                        :fc="props.partida.zagueiros_visitante.sum_fc"
                        :ca="props.partida.zagueiros_visitante.sum_ca"
                        :ds="props.partida.zagueiros_casa.sum_ds"
                        :pi="props.partida.zagueiros_casa.sum_pi"
                    ></col-zagueiros>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col cols="6" md="6" class="border-right">
                <b-row>
                    <col-laterais
                        :g="props.partida.laterais_casa.sum_g"
                        :a="props.partida.laterais_casa.sum_a"
                        :fd="props.partida.laterais_casa.sum_fd"
                        :ff="props.partida.laterais_casa.sum_ff"
                        :pe="props.partida.laterais_casa.sum_pe"
                        :rb="props.partida.laterais_casa.sum_rb"
                        :fc="props.partida.laterais_casa.sum_fc"
                        :fs="props.partida.laterais_casa.sum_fs"
                        :ds="props.partida.zagueiros_casa.sum_ds"
                        :pi="props.partida.zagueiros_casa.sum_pi"
                        class="ml-4"
                    ></col-laterais>
                </b-row>
            </b-col>
            <b-col cols=6 md="6">
                <b-row>
                    <col-laterais
                        :g="props.partida.laterais_visitante.sum_g"
                        :a="props.partida.laterais_visitante.sum_a"
                        :fd="props.partida.laterais_visitante.sum_fd"
                        :ff="props.partida.laterais_visitante.sum_ff"
                        :pe="props.partida.laterais_visitante.sum_pe"
                        :rb="props.partida.laterais_visitante.sum_rb"
                        :fc="props.partida.laterais_visitante.sum_fc"
                        :fs="props.partida.laterais_visitante.sum_fs"
                        :ds="props.partida.zagueiros_casa.sum_ds"
                        :pi="props.partida.zagueiros_casa.sum_pi"
                    ></col-laterais>
                </b-row>
            </b-col>
        </b-row>
        <container-destaques title="DESTAQUES DA DEFESA">
            <row-destaques slot="casa"
                :destaques="props.partida.destaques_defesa_casa"
                :urlPontuacao="props.urlPontuacao"
            ></row-destaques>
            <row-destaques slot="visitante"
                :destaques="props.partida.destaques_defesa_visitante"
                :urlPontuacao="props.urlPontuacao"
            ></row-destaques>
        </container-destaques>
        <hr>
        <b-row class="mt-2">
            <b-col cols="6" md="6" class="border-right">
                <b-row>
                    <col-meias
                        :g="props.partida.meias_casa.sum_g"
                        :a="props.partida.meias_casa.sum_a"
                        :fd="props.partida.meias_casa.sum_fd"
                        :ff="props.partida.meias_casa.sum_ff"
                        :fs="props.partida.meias_casa.sum_fs"
                        :fc="props.partida.meias_casa.sum_fc"
                        :rb="props.partida.meias_casa.sum_rb"
                        :pe="props.partida.meias_casa.sum_pe"
                        :ca="props.partida.meias_casa.sum_ca"
                        :ds="props.partida.zagueiros_casa.sum_ds"
                        :pi="props.partida.zagueiros_casa.sum_pi"
                        class="ml-4"
                    ></col-meias>
                </b-row>
            </b-col>
            <b-col cols="6" md="6">
                <b-row>
                    <col-meias
                        :g="props.partida.meias_visitante.sum_g"
                        :a="props.partida.meias_visitante.sum_a"
                        :fd="props.partida.meias_visitante.sum_fd"
                        :ff="props.partida.meias_visitante.sum_ff"
                        :fs="props.partida.meias_visitante.sum_fs"
                        :fc="props.partida.meias_visitante.sum_fc"
                        :rb="props.partida.meias_visitante.sum_rb"
                        :pe="props.partida.meias_visitante.sum_pe"
                        :ca="props.partida.meias_visitante.sum_ca"
                        :ds="props.partida.zagueiros_casa.sum_ds"
                        :pi="props.partida.zagueiros_casa.sum_pi"
                    ></col-meias>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col cols="6" md="6" class="border-right">
                <b-row>
                    <col-atacantes
                        :g="props.partida.atacantes_casa.sum_g"
                        :a="props.partida.atacantes_casa.sum_a"
                        :fd="props.partida.atacantes_casa.sum_fd"
                        :ff="props.partida.atacantes_casa.sum_ff"
                        :pp="props.partida.atacantes_casa.sum_pp"
                        :i="props.partida.atacantes_casa.sum_i"
                        :fc="props.partida.atacantes_casa.sum_fc"
                        :fs="props.partida.atacantes_casa.sum_fs"
                        class="ml-4"
                    ></col-atacantes>
                </b-row>
            </b-col>
            <b-col cols="6" md="6">
                <b-row>
                    <col-atacantes
                        :g="props.partida.atacantes_visitante.sum_g"
                        :a="props.partida.atacantes_visitante.sum_a"
                        :fd="props.partida.atacantes_visitante.sum_fd"
                        :ff="props.partida.atacantes_visitante.sum_ff"
                        :pp="props.partida.atacantes_visitante.sum_pp"
                        :i="props.partida.atacantes_visitante.sum_i"
                        :fc="props.partida.atacantes_visitante.sum_fc"
                        :fs="props.partida.atacantes_visitante.sum_fs"
                    ></col-atacantes>
                </b-row>
            </b-col>
        </b-row>
        <container-destaques title="DESTAQUES DO ATAQUE">
            <row-destaques slot="casa"
                :destaques="props.partida.destaques_ataque_casa"
                :urlPontuacao="props.urlPontuacao"
            ></row-destaques>
            <row-destaques slot="visitante"
                :destaques="props.partida.destaques_ataque_visitante"
                :urlPontuacao="props.urlPontuacao"
            ></row-destaques>
        </container-destaques>
    </div>
</template>

<script>
export default {
    props: {
        partida: {
            type: Object,
            required: true
        },
        urlPontuacao: {
            type: Function,
            required: true
        }
    }
}
</script>
