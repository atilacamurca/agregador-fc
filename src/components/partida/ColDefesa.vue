<template>
    <b-col md="6">
        <div>DEFESA</div>
        <div class="pl-3">
            SG
            <b-badge variant="success" class="ml-2">{{ sg }}</b-badge>
        </div>
    </b-col>
</template>

<script>
export default {
    props: {
        sg: {
            type: Number,
            required: true
        }
    }
}
</script>
