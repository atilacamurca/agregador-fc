SELECT sum(placar_oficial_mandante) filter (WHERE clube_casa_id = 277) AS gols_marcados_casa,
       sum(placar_oficial_visitante) filter (WHERE clube_visitante_id = 277) AS gols_marcados_fora,
       sum(placar_oficial_mandante) filter (WHERE clube_casa_id = 277)
            + sum(placar_oficial_visitante) filter (WHERE clube_visitante_id = 277) AS gols_marcados_total
FROM partidas_rodada
WHERE rodada_id <= 9
  AND ano = 2019
