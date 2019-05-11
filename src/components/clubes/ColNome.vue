<template>
    <b-col md="5"
        class="d-flex align-items-center justify-content-center">
        <div class="lead mr-3 text-right">{{ nome }}</div>
    </b-col>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>
