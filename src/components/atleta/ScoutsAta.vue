<template functional>
    <div>
        <h4>Scouts em {{ props.jogos_num }} jogos</h4>
        <div class="p-3">
            <b-row>
                <b-col cols="12" md="5">
                    <div class="lead">Positivos</div>
                    <gol :g="props.g" show-multiplier show-total></gol>
                    <assistencia :a="props.a" show-multiplier show-total></assistencia>
                    <finalizacao-fora :ff="props.ff" show-multiplier show-total></finalizacao-fora>
                    <finalizacao-defendida :fd="props.fd" show-multiplier show-total></finalizacao-defendida>
                    <falta-sofrida :fs="props.fs" show-multiplier show-total></falta-sofrida>
                    <desarme :ds="props.ds" show-multiplier show-total></desarme>
                </b-col>
                <b-col cols="12" md="5" offset-md="1" class="mt-3 mt-md-0">
                    <div class="lead">Negativos</div>
                    <passe-incompleto :pi="props.pi" show-multiplier show-total></passe-incompleto>
                    <falta-cometida :fc="props.fc" show-multiplier show-total></falta-cometida>
                    <cartao-amarelo :ca="props.ca" show-multiplier show-total></cartao-amarelo>
                    <cartao-vermelho :cv="props.cv" show-multiplier show-total></cartao-vermelho>
                    <impedimento :i="props.i" show-multiplier show-total></impedimento>
                    <penalti-perdido :pp="props.pp" show-multiplier show-total></penalti-perdido>
                    <gol-contra :gc="props.gc" show-multiplier show-total></gol-contra>
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
        pi: {
            type: Number,
            required: true
        },
        ds: {
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
