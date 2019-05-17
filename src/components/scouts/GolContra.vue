<template functional>
    <scout :scout="props.gc"
        tooltip="Gol contra"
        label="GC"
        variant="danger"
    ></scout>
</template>

<script>
export default {
    functional: true,
    props: {
        gc: {
            type: Number,
            required: true
        }
    }
}
</script>
