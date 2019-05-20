<template functional>
    <b-col md="12" :class="data.staticClass || ''">
        <div>ZAGUEIROS</div>
        <b-row>
            <b-col md="4">
                <roubada-bola :rb="props.rb"></roubada-bola>
                <gol :g="props.g"></gol>
                <falta-sofrida :fs="props.fs"></falta-sofrida>
            </b-col>
            <b-col md="4" offset-md="1">
                <passe-errado :pe="props.pe"></passe-errado>
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
        rb: {
            type: Number,
            required: true
        },
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
            required: true
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
        }
    }
}
</script>
