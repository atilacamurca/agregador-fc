<template>
    <b-row>
        <b-col v-for="atleta in destaques" :key="atleta.atleta_id"
            md="6" class="mb-2">
            <dados-atleta
                v-bind="atleta"
            ></dados-atleta>
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
