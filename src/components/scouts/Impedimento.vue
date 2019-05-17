<template functional>
    <scout :scout="props.i"
        tooltip="Impedimento"
        label="I"
        variant="danger"
    ></scout>
</template>

<script>
export default {
    props: {
        i: {
            type: Number,
            required: true
        }
    }
}
</script>
