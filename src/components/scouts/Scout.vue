<template functional>
    <div class="pl-3 d-flex justify-content-between align-items-center"
        v-b-tooltip.hover.left="props.tooltip">
        <span>{{ props.label }}</span>
        <b-badge :variant="props.variant" class="ml-2">{{ props.scout }}</b-badge>
    </div>
</template>

<script>
export default {
    props: {
        scout: {
            type: Number,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        tooltip: {
            type: String,
            required: true
        },
        variant: {
            type: String,
            required: true,
            validator: function (value) {
                return ['success', 'danger'].indexOf(value) !== -1
            }
        }
    }
}
</script>
