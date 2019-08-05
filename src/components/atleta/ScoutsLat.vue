<template functional>
    <div>
        <h4>Scouts em {{ props.jogos_num }} jogos</h4>
        <div class="p-3">
            <b-row>
                <b-col cols="5">
                    <div class="lead">Positivos</div>
                    <saldo-gol :sg="props.sg"></saldo-gol>
                    <roubada-bola :rb="props.rb"></roubada-bola>
                    <gol :g="props.g"></gol>
                    <assistencia :a="props.a"></assistencia>
                    <falta-sofrida :fs="props.fs"></falta-sofrida>
                    <finalizacao-fora :ff="props.ff"></finalizacao-fora>
                    <finalizacao-defendida :fd="props.fd"></finalizacao-defendida>
                </b-col>
                <b-col cols="5" offset="1">
                    <div class="lead">Negativos</div>
                    <passe-errado :pe="props.pe"></passe-errado>
                    <gol-contra :gc="props.gc"></gol-contra>
                    <falta-cometida :fc="props.fc"></falta-cometida>
                    <cartao-amarelo :ca="props.ca"></cartao-amarelo>
                    <cartao-vermelho :cv="props.cv"></cartao-vermelho>
                </b-col>
            </b-row>
        </div>
    </div>
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
        },
        sg: {
            type: Number,
            required: true
        },
        cv: {
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
        jogos_num: {
            type: Number,
            required: true
        }
    }
}
</script>
