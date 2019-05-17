<template functional>
    <b-col md="12" :class="data.staticClass || ''">
        <div>MEIAS</div>
        <b-row>
            <b-col md="3">
                <falta-sofrida :fs="props.fs"></falta-sofrida>
                <gol :g="props.g"></gol>
                <finalizacao-fora :ff="props.ff"></finalizacao-fora>
                <roubada-bola :rb="props.rb"></roubada-bola>
                <cartao-amarelo :ca="props.ca"></cartao-amarelo>
            </b-col>
            <b-col md="3" offset-md="2">
                <falta-cometida :fc="props.fc"></falta-cometida>
                <assistencia :a="props.a"></assistencia>
                <finalizacao-defendida :fd="props.fd"></finalizacao-defendida>
                <passe-errado :pe="props.pe"></passe-errado>
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
        rb: {
            type: Number,
            required: true
        },
        pe: {
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
