<template functional>
    <div>
        <h4>Scouts em {{ props.jogos_num }} jogos</h4>
        <div class="p-3">
            <b-row>
                <b-col cols="5">
                    <div class="lead">Positivos</div>
                    <saldo-gol :sg="props.sg"></saldo-gol>
                    <defesa-dificil :dd="props.dd"></defesa-dificil>
                    <defesa-penalti :dp="props.dp"></defesa-penalti>
                    <falta-sofrida :fs="props.fs"></falta-sofrida>
                </b-col>
                <b-col cols="5" offset="1">
                    <div class="lead">Negativos</div>
                    <gol-sofrido :gs="props.gs"></gol-sofrido>
                    <passe-errado :pe="props.pe"></passe-errado>
                    <falta-cometida :fc="props.fc"></falta-cometida>
                    <cartao-amarelo :ca="props.ca"></cartao-amarelo>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dd: {
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
        pe: {
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
