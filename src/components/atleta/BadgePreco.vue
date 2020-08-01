<template functional>
    <span class="badge-preco bg-danger text-center"
        :class="[`badge-left-${props.leftPos}`]">$ {{ props.preco_num }}</span>
</template>

<script>
export default {
    props: {
        preco_num: {
            type: Number,
            required: true
        },
        leftPos: {
            type: String,
            default: 'normal'
        }
    }
}
</script>

<style scoped>
.badge-preco {
    top: .75rem;
    position: absolute;
    display: block;
    z-index: 10;
    padding: 2px 7px;
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    min-width: 48px;
}
@media (min-width: 992px) {
    .badge-preco {
        top: .75rem;
    }
}
.badge-left-normal {
    left: 1.5rem;
}
.badge-left-wide {
    left: .75rem;
}
</style>
