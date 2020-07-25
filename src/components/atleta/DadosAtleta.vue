<template functional>
    <div :class="data.staticClass || ''">
        <span class="badge-preco bg-danger text-center">$ {{ props.preco_num }}</span>
        <div class="d-flex flex-column align-items-center">
            <div>
                <a :href="parent.$url(props.urlPontuacao)">
                    <g-image
                        :src="props.foto"
                        width="64"
                        :alt="props.apelido"
                        class="img-thumbnail rounded-circle"
                        style="width: 64px; height: 64px;"
                    ></g-image>
                </a>
            </div>
            <div>
                <a :href="parent.$url(props.urlPontuacao)" class="text-light">
                    {{ props.apelido }}
                </a>
            </div>
            <div v-if="props.clube">{{ props.clube }}</div>
            <div>
                <span v-show="!props.esconderPosicao">
                    {{ props.nome_posicao }}
                </span>
                <variacao-num :variacao_num="props.variacao_num"></variacao-num>
            </div>
            <div>
                <b-badge variant="warning">M {{ props.media_num }}</b-badge>
                em <b-badge variant="light">{{ props.jogos_num }} J</b-badge>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        preco_num: {
            type: Number,
            required: true
        },
        foto: {
            type: String,
            required: true
        },
        apelido: {
            type: String,
            required: true
        },
        nome_posicao: {
            type: String,
            required: true
        },
        variacao_num: {
            type: Number,
            required: true
        },
        media_num: {
            type: Number,
            required: true
        },
        jogos_num: {
            type: Number,
            required: true
        },
        clube: String,
        esconderPosicao: {
            type: Boolean,
            default: false
        },
        atleta_id: {
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
.badge-preco {
    top: .75rem;
    left: 1.5rem;
    position: absolute;
    display: block;
    z-index: 10;
    padding: 2px 7px;
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    min-width: 48px;
}
@media (min-width: 992px) {
    .badge-preco {
        top: .75rem;
        left: 1.75rem;
    }
}
</style>
