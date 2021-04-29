<template functional>
    <div>
        <h4>Scouts em {{ props.jogos_num }} jogos</h4>
        <div class="p-3">
            <b-row>
                <b-col cols="12" md="5">
                    <div class="lead">Positivos</div>
                    <saldo-gol :sg="props.sg" show-multiplier show-total></saldo-gol>
                    <defesa :de="props.de" show-multiplier show-total></defesa>
                    <defesa-penalti :dp="props.dp" show-multiplier show-total></defesa-penalti>
                    <falta-sofrida :fs="props.fs" show-multiplier show-total></falta-sofrida>
                </b-col>
                <b-col cols="12" md="5" offset-md="1" class="mt-3 mt-md-0">
                    <div class="lead">Negativos</div>
                    <gol-sofrido :gs="props.gs" show-multiplier show-total></gol-sofrido>
                    <falta-cometida :fc="props.fc" show-multiplier show-total></falta-cometida>
                    <cartao-amarelo :ca="props.ca" show-multiplier show-total></cartao-amarelo>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        de: {
            type: Number,
            required: true
        },
        dp: {
            type: Number,
            required: true
        },
        gs: {
            type: Number,
            required: true
        },
        sg: {
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
        fs: {
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
