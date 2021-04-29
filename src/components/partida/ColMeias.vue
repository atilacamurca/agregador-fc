<template functional>
    <b-col md="12" :class="data.staticClass || ''">
        <h5><b-badge pill variant="primary">MEIAS</b-badge></h5>
        <b-row>
            <b-col md="4">
                <falta-sofrida :fs="props.fs"></falta-sofrida>
                <gol :g="props.g"></gol>
                <finalizacao-fora :ff="props.ff"></finalizacao-fora>
                <desarme :ds="props.ds"></desarme>
                <cartao-amarelo :ca="props.ca"></cartao-amarelo>
            </b-col>
            <b-col md="4" offset-md="1">
                <falta-cometida :fc="props.fc"></falta-cometida>
                <assistencia :a="props.a"></assistencia>
                <finalizacao-defendida :fd="props.fd"></finalizacao-defendida>
                <passe-incompleto :pi="props.pi"></passe-incompleto>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
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
        fs: {
            type: Number,
            required: true
        },
        pe: {
            type: Number,
            required: false,
            default: 0
        },
        ca: {
            type: Number,
            required: true
        },
        ds: {
            type: Number,
            required: true
        },
        pi: {
            type: Number,
            required: true
        }
    }
}
</script>
