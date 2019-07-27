<template functional>
    <b-row class="mt-4 py-2 bg-green-field text-light rounded">
        <b-col cols="6" md="6" class="border-right">
            <div class="ml-4 mb-2">{{ props.title }}</div>
            <slot name="casa"></slot>
        </b-col>
        <b-col cols="6" md="6">
            <div class="ml-4 mb-2">{{ props.title }}</div>
            <slot name="visitante"></slot>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>
