<template>
    <div class="pl-3" v-b-tooltip.hover.left="'Assistência'">
        &nbsp;&nbsp;A
        <b-badge variant="success" class="ml-2">{{ a }}</b-badge>
    </div>
</template>

<script>
export default {
    props: {
        a: {
            type: Number,
            required: true
        }
    }
}
</script>
