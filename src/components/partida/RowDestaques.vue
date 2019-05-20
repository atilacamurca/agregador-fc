<template>
    <b-row>
        <b-col v-for="atleta in destaques" :key="atleta.atleta_id"
            md="6" class="mb-2">
            <span class="badge-preco bg-danger">$ {{ atleta.preco_num }}</span>
            <div class="d-flex flex-column align-items-center">
                <div>
                    <b-img-lazy :src="atleta.foto" width="64"
                        blank-width="64"
                        thumbnail rounded="circle" :alt="atleta.apelido"></b-img-lazy>
                </div>
                <div>{{ atleta.apelido }}</div>
                <div>
                    {{ atleta.nome_posicao }}
                    <b-badge variant="light" :class="{
                        'text-success': atleta.variacao_num > 0,
                        'text-danger': atleta.variacao_num < 0
                    }" v-b-tooltip.hover.right="'Variação $'">
                        <span v-if="atleta.variacao_num > 0">&nearr;</span>
                        <span v-else-if="atleta.variacao_num < 0">&searr;</span>
                        {{ atleta.variacao_num }}
                    </b-badge>
                </div>
                <div>
                    <b-badge variant="warning">M {{atleta.media_num }}</b-badge>
                    em <b-badge variant="light">{{ atleta.jogos_num }} J</b-badge>
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        destaques: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.badge-preco {
    top: 0px;
    left: 15px;
    position: absolute;
    display: block;
    z-index: 10;
    padding: 2px 7px;
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
}
@media (min-width: 576px) {
    .badge-preco {
        top: 5px;
        left: 15px;
    }
}
@media (min-width: 768px) {
    .badge-preco {
        top: 5px;
        left: 15px;
    }
}
@media (min-width: 992px) {
    .badge-preco {
        top: 10px;
        left: 35px;
    }
}
</style>
