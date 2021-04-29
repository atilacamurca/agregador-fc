<template functional>
    <div>
        <h4>Scouts em {{ props.jogos_num }} jogos</h4>
        <div class="p-3">
            <b-row>
                <b-col cols="12" md="5">
                    <div class="lead">Positivos</div>
                    <saldo-gol :sg="props.sg" show-multiplier show-total></saldo-gol>
                    <desarme :ds="props.ds" show-multiplier show-total></desarme>
                    <gol :g="props.g" show-multiplier show-total></gol>
                    <assistencia :a="props.a" show-multiplier show-total></assistencia>
                    <falta-sofrida :fs="props.fs" show-multiplier show-total></falta-sofrida>
                    <finalizacao-fora :ff="props.ff" show-multiplier show-total></finalizacao-fora>
                    <finalizacao-defendida :fd="props.fd" show-multiplier show-total></finalizacao-defendida>
                </b-col>
                <b-col cols="12" md="5" offset-md="1" class="mt-3 mt-md-0">
                    <div class="lead">Negativos</div>
                    <passe-incompleto :pi="props.pi" show-multiplier show-total></passe-incompleto>
                    <gol-contra :gc="props.gc" show-multiplier show-total></gol-contra>
                    <falta-cometida :fc="props.fc" show-multiplier show-total></falta-cometida>
                    <cartao-amarelo :ca="props.ca" show-multiplier show-total></cartao-amarelo>
                    <cartao-vermelho :cv="props.cv" show-multiplier show-total></cartao-vermelho>
                    <penalti-cometido :pc="props.pc" show-multiplier show-total></penalti-cometido>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ds: {
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
        pi: {
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
        pc: {
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
