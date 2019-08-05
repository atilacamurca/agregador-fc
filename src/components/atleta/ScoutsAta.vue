<template functional>
    <div>
        <h4>Scouts em {{ props.jogos_num }} jogos</h4>
        <div class="p-3">
            <b-row>
                <b-col cols="5">
                    <div class="lead">Positivos</div>
                    <gol :g="props.g"></gol>
                    <assistencia :a="props.a"></assistencia>
                    <finalizacao-fora :ff="props.ff"></finalizacao-fora>
                    <finalizacao-defendida :fd="props.fd"></finalizacao-defendida>
                    <falta-sofrida :fs="props.fs"></falta-sofrida>
                    <roubada-bola :rb="props.rb"></roubada-bola>
                </b-col>
                <b-col cols="5" offset="1">
                    <div class="lead">Negativos</div>
                    <passe-errado :pe="props.pe"></passe-errado>
                    <falta-cometida :fc="props.fc"></falta-cometida>
                    <cartao-amarelo :ca="props.ca"></cartao-amarelo>
                    <cartao-vermelho :cv="props.cv"></cartao-vermelho>
                    <impedimento :i="props.i"></impedimento>
                    <penalti-perdido :pp="props.pp"></penalti-perdido>
                    <gol-contra :gc="props.gc"></gol-contra>
                </b-col>
            </b-row>
        </div>
    </div>
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
        i: {
            type: Number,
            required: true
        },
        pp: {
            type: Number,
            required: true
        },
        fs: {
            type: Number,
            required: true
        },
        gc: {
            type: Number,
            required: true
        },
        ca: {
            type: Number,
            required: true
        },
        cv: {
            type: Number,
            required: true
        },
        pe: {
            type: Number,
            required: true
        },
        rb: {
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
