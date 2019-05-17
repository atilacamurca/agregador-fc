<template>
    <b-row class="mt-4 py-2 bg-green-field text-light rounded">
        <b-col md="6" class="border-right">
            <div class="ml-4 mb-2">{{ title }}</div>
            <slot name="casa"></slot>
        </b-col>
        <b-col md="6">
            <div class="ml-4 mb-2">{{ title }}</div>
            <slot name="visitante"></slot>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        posicaoEmCampo: {
            type: String,
            required: true,
            validator: function (value) {
                return ['defesa', 'ataque'].indexOf(value) !== -1
            }
        }
    },
    computed: {
        title () {
            switch (this.posicaoEmCampo) {
                case 'defesa':
                    return 'DETAQUES DA DEFESA'
                case 'ataque':
                    return 'DESTAQUES DO ATAQUE'
            }
        }
    }
}
</script>

<style>
/* https://coolors.co/126259-07a0c3-f0c808-084c61-dd1c1a */
.bg-green-field {
    background-color: #0b6e4f;
}
</style>
