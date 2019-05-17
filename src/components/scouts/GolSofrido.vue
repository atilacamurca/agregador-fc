<template functional>
    <scout :scout="props.gs"
        tooltip="Gol sofrido"
        label="GS"
        variant="danger"
    ></scout>
</template>

<script>
export default {
    props: {
        gs: {
            type: Number,
            required: true
        }
    }
}
</script>
