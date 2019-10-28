<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,
    props: {
        data: {
            type: Object,
            required: true
        },
        options: {
            type: Object,
            required: false,
            default: () => ({})
        }
    },
    mounted () {
        this.renderChart(this.data, {plugins: {
                            labels: {
                                render: function (args) {
                                    return args.label + ' ' + args.value
                                },
                                position: 'outside'
                            }
                        },
                        legend: {
                            display: false
                        }})
    }
}
</script>
