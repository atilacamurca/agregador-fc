<template>
    <b-row>
        <b-col v-for="atleta in destaques" :key="atleta.atleta_id"
            md="6" class="mb-2">
            <span class="badge-preco bg-danger">$ {{ atleta.preco_num }}</span>
            <div class="d-flex flex-column align-items-center">
                <div>
                    <b-img-lazy :src="atleta.foto" width="64"
                        thumbnail rounded="circle" :alt="atleta.apelido"></b-img-lazy>
                </div>
                <div>{{ atleta.apelido }}</div>
                <div>{{ atleta.nome_posicao }}</div>
                <div>
                    Méd. <b-badge variant="warning">{{atleta.media_num }}</b-badge>
                    em <b-badge variant="light">{{ atleta.jogos_num }} jogos</b-badge>
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
    top: 10px;
    left: 35px;
    position: absolute;
    display: block;
    z-index: 10;
    padding: 2px 7px;
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
}
</style>
