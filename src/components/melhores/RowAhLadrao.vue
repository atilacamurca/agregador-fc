<template functional>
    <b-row>
        <b-col cols="6" md="2">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <g-image
                    :src="props.escudo"
                    width="40"
                    height="40"
                    :alt="props.clube"
                    style="width: 40px; height: 40px;"
                ></g-image>
                <g-link :to="props.urlPontuacao">
                    <g-image :src="props.foto" width="64"
                        :alt="props.apelido"
                        class="img-thumbnail rounded-circle"
                        style="width: 64px; height: 64px;"
                    ></g-image>
                </g-link>
            </div>
        </b-col>
        <b-col cols="6" md="3" class="d-flex flex-column justify-content-center">
            <div class="lead">
                <g-link :to="props.urlPontuacao" class="text-primary">
                    {{ props.apelido }}
                </g-link>
            </div>
            <div>{{ props.posicao }} do {{ props.clube }}</div>
        </b-col>
        <b-col>
            <hr class="d-block d-sm-none"/>
            <div class="d-flex flex-row justify-content-md-around">
                <div class="d-flex flex-wrap align-content-around justify-content-end">
                    <div class="d-flex flex-column align-items-end">
                        <roubada-bola :rb="props.rb"></roubada-bola>
                        <div>P <b-badge>{{ props.tot_rb }}</b-badge></div>
                    </div>
                    <div class="d-flex flex-column align-items-end">
                        <falta-cometida :fc="props.fc"></falta-cometida>
                        <div>P <b-badge>{{ props.tot_fc }}</b-badge></div>
                    </div>
                    <div class="d-flex flex-column align-items-end">
                        <cartao-amarelo :ca="props.ca"></cartao-amarelo>
                        <div>P <b-badge>{{ props.tot_ca }}</b-badge></div>
                    </div>
                </div>
                <div class="ml-md-5 d-flex flex-wrap align-content-around justify-content-around">
                    <div class="d-flex flex-column align-items-end">
                        <div>Pontuação total</div>
                        <div>
                            <b-badge variant="primary">{{ props.tot_pontuacao }}</b-badge>
                            em <b-badge>{{ props.jogos_num }} J</b-badge>
                        </div>
                    </div>
                    <div class="d-flex flex-column align-items-end">
                        <div>Média</div>
                        <div>
                            <variacao-num :variacao_num="props.variacao_num"
                                placement="top"
                            ></variacao-num>
                            <b-badge variant="warning" class="ml-2">{{ props.media_num }}</b-badge>
                        </div>
                    </div>
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        escudo: {
            type: String,
            required: true
        },
        foto: {
            type: String,
            required: true
        },
        clube: {
            type: String,
            required: true
        },
        apelido: {
            type: String,
            required: true
        },
        posicao: {
            type: String,
            required: true
        },
        posicao_abrev: {
            type: String,
            required: true
        },
        rb: {
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
        tot_rb: {
            type: Number,
            required: true
        },
        tot_fc: {
            type: Number,
            required: true
        },
        tot_ca: {
            type: Number,
            required: true
        },
        tot_pontuacao: {
            type: Number,
            required: true
        },
        jogos_num: {
            type: Number,
            required: true
        },
        media_num: {
            type: Number,
            required: true
        },
        variacao_num: {
            type: Number,
            required: true
        },
        urlPontuacao: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.img-thumbnail {
    height: 64px;
}
</style>
