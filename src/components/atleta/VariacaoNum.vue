<template functional>
    <b-badge :variant="props.variant" :class="{
        'text-success': props.variacao_num > 0,
        'text-danger': props.variacao_num < 0
    }" v-b-tooltip="{
        title: 'Variação $',
        placement: props.placement,
        trigger: 'hover'
    }">
        <span v-if="props.variacao_num > 0">&nearr;</span>
        <span v-else-if="props.variacao_num < 0">&searr;</span>
        <span v-else>&equals;</span>
        {{ props.variacao_num }}
    </b-badge>
</template>

<script>
export default {
    props: {
        variacao_num: {
            type: Number,
            required: true
        },
        placement: {
            type: String,
            default: 'right'
        },
        variant: {
            type: String,
            default: 'light'
        }
    }
}
</script>
