<template functional>
    <b-col md="12" :class="data.staticClass || ''">
        <h5><b-badge pill variant="primary">ZAGUEIROS</b-badge></h5>
        <b-row>
            <b-col md="4">
                <desarme :ds="props.ds"></desarme>
                <gol :g="props.g"></gol>
                <falta-sofrida :fs="props.fs"></falta-sofrida>
            </b-col>
            <b-col md="4" offset-md="1">
                <passe-incompleto :pi="props.pi"></passe-incompleto>
                <gol-contra :gc="props.gc"></gol-contra>
                <falta-cometida :fc="props.fc"></falta-cometida>
                <cartao-amarelo :ca="props.ca"></cartao-amarelo>
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
        gc: {
            type: Number,
            required: true
        },
        pe: {
            type: Number,
            required: false,
            default: 0
        },
        fs: {
            type: Number,
            required: true
        },
        fc: {
            type: Number,
            required: true
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
