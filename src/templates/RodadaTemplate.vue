<template>
    <Layout>
        <b-row>
            <b-col md="10" offset-md="1">
                <h3 class="mb-4">Rodada {{ $page.rodada.rodada }}</h3>
                <b-card no-body border-variant="light" class="shadow-sm">
                    <b-card-body v-for="partida in $page.rodada.partidas"
                        :key="partida.partida_id"
                        class="card-body-sumario border-bottom-light">
                        <div v-b-toggle="`accordion-${partida.partida_id}`"
                            class="cursor-pointer">
                            <sumario-partida :partida-data="partida.partida_data"
                                :local="partida.local"
                            ></sumario-partida>
                            <sumario-clubes :clube-casa="partida.clube_casa"
                                :clube-visitante="partida.clube_visitante"
                                :escudo-casa="partida.escudo_casa"
                                :escudo-visitante="partida.escudo_visitante"
                            ></sumario-clubes>
                        </div>
                        <b-collapse :id="`accordion-${partida.partida_id}`"
                            :accordion="`accordion-${partida.partida_id}`" role="tabpanel">
                            <sumario-estatisticas :partida="partida"></sumario-estatisticas>
                        </b-collapse>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>

<page-query>
query Rodada ($path: String!) {
    rodada: rodadaTemplate (path: $path) {
        rodada,
        partidas {
            partida_id,
            clube_casa,
            clube_visitante,
            escudo_casa,
            escudo_visitante,
            partida_data,
            local,
            goleiros_casa {
                sum_sg,
                sum_dd,
                sum_dp,
                sum_gs
            },
            goleiros_visitante {
                sum_sg,
                sum_dd,
                sum_dp,
                sum_gs
            },
            zagueiros_casa {
                sum_rb,
                sum_gc,
                sum_g
            },
            zagueiros_visitante {
                sum_rb,
                sum_gc,
                sum_g
            },
            atacantes_casa {
                sum_g,
                sum_a,
                sum_ff,
                sum_fd,
                sum_fs,
                sum_pp,
                sum_fc,
                sum_i,
            },
            atacantes_visitante {
                sum_g,
                sum_a,
                sum_ff,
                sum_fd,
                sum_fs,
                sum_pp,
                sum_fc,
                sum_i,
            }
        }
    }
}
</page-query>

<script>
import SumarioPartida from '~/components/SumarioPartida'
import SumarioClubes from '~/components/SumarioClubes'
import SumarioEstatisticas from '~/components/SumarioEstatisticas'

export default {
    components: {
        SumarioClubes,
        SumarioPartida,
        SumarioEstatisticas
    }
}
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}

.border-bottom-light {
    border-bottom: 1px solid var(--light);
}

.card-body.card-body-sumario {
    padding: 1.25rem 0 !important;
}
</style>
