<template>
    <b-col md="12">
        <div>ATACANTES</div>
        <b-row>
            <b-col md="6">
                <gol :g="g"></gol>
                <finalizacao-fora :ff="ff"></finalizacao-fora>
                <falta-cometida :fc="fc"></falta-cometida>
            </b-col>
            <b-col md="6">
                <assistencia :a="a"></assistencia>
                <finalizacao-defendida :fd="fd"></finalizacao-defendida>
                <impedimento :i="i"></impedimento>
                <penalti-perdido :pp="pp"></penalti-perdido>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
import Gol from '../scouts/Gol'
import FinalizacaoFora from '../scouts/FinalizacaoFora'
import FaltaCometida from '../scouts/FaltaCometida'
import Assistencia from '../scouts/Assistencia'
import FinalizacaoDefendida from '../scouts/FinalizacaoDefendida'
import Impedimento from '../scouts/Impedimento'
import PenaltiPerdido from '../scouts/PenaltiPerdido'

export default {
    props: {
        g: {
            type: Number,
            required: true
        },
        a: {
            type: Number,
            required: true
        },
        ff: {
            type: Number,
            required: true
        },
        fd: {
            type: Number,
            required: true
        },
        fc: {
            type: Number,
            required: true
        },
        i: {
            type: Number,
            required: true
        },
        pp: {
            type: Number,
            required: true
        }
    },
    components: {
        Gol,
        FinalizacaoFora,
        FaltaCometida,
        Assistencia,
        FinalizacaoDefendida,
        Impedimento,
        PenaltiPerdido
    }
}
</script>
