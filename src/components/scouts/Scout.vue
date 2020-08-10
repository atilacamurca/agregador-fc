<template functional>
    <div class="pl-3 d-flex justify-content-between align-items-center"
        v-b-tooltip.hover.left="props.tooltip">
        <div>
            <span>{{ props.label }}</span>
        </div>
        <div>
            <b-badge :variant="props.variant" class="ml-2">
                {{ props.scout }}
            </b-badge>
            <b-badge v-if="props.showMultiplier" class="ml-2">
                &times;{{ props.multiplier | intlNumberFormat }}
            </b-badge>
            <b-badge v-if="props.showTotal" variant="dark" class="ml-2">
                &equals; {{ (props.scout * props.multiplier) | intlNumberFormat }}
            </b-badge>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        scout: {
            type: Number,
            required: true
        },
        multiplier: {
            type: Number,
            default: 0
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
        },
        showMultiplier: {
            type: Boolean,
            default: false
        },
        showTotal: {
            type: Boolean,
            default: false
        }
    }
}
</script>
