<template functional>
    <b-col md="12" :class="data.staticClass || ''">
        <div>LATERAIS</div>
        <b-row>
            <b-col md="4">
                <gol :g="props.g"></gol>
                <finalizacao-fora :ff="props.ff"></finalizacao-fora>
                <roubada-bola :rb="props.rb"></roubada-bola>
                <falta-sofrida :fs="props.fs"></falta-sofrida>
            </b-col>
            <b-col md="4" offset-md="1">
                <assistencia :a="props.a"></assistencia>
                <finalizacao-defendida :fd="props.fd"></finalizacao-defendida>
                <passe-errado :pe="props.pe"></passe-errado>
                <falta-cometida :fc="props.fc"></falta-cometida>
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
            required: true
        }
    }
}
</script>
