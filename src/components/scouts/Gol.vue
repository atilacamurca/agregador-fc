<template functional>
    <scout :scout="props.g"
        tooltip="Gol"
        label="G"
        variant="success"
    ></scout>
</template>

<script>
export default {
    props: {
        g: {
            type: Number,
            required: true
        }
    }
}
</script>
