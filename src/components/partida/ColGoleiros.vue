<template>
    <b-col md="6">
        <div>GOLEIROS</div>
        <div class="pl-3">
            DD
            <b-badge variant="success" class="ml-2">{{ dd }}</b-badge>
        </div>
        <div class="pl-3">
            GS
            <b-badge variant="danger" class="ml-2">{{ gs }}</b-badge>
        </div>
        <div class="pl-3">
            DP
            <b-badge variant="success" class="ml-2">{{ dp }}</b-badge>
        </div>
    </b-col>
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
        }
    }
}
</script>
