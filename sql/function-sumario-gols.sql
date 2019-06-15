DROP FUNCTION public.sumario_gols(integer, integer, integer);
 
CREATE FUNCTION sumario_gols(_rodada_id integer, _ano integer, _clube_id integer) 
RETURNS json AS
$$
    SELECT row_to_json(t) AS json FROM (
        SELECT sum(placar_oficial_mandante) filter (WHERE clube_casa_id = _clube_id) AS gols_marcados_casa,
        sum(placar_oficial_visitante) filter (WHERE clube_visitante_id = _clube_id) AS gols_marcados_fora,
        sum(placar_oficial_mandante) filter (WHERE clube_casa_id = _clube_id)
            + sum(placar_oficial_visitante) filter (WHERE clube_visitante_id = _clube_id) AS gols_marcados_total,
        sum(placar_oficial_mandante) filter (WHERE clube_visitante_id = _clube_id) AS gols_sofridos_fora,
        sum(placar_oficial_visitante) filter (WHERE clube_casa_id = _clube_id) AS gols_sofridos_casa,
        sum(placar_oficial_mandante) filter (WHERE clube_visitante_id = _clube_id)
            + sum(placar_oficial_visitante) filter (WHERE clube_casa_id = _clube_id) AS gols_sofridos_total
FROM partidas_rodada
WHERE rodada_id < _rodada_id
  AND ano = _ano

    ) t
$$ LANGUAGE sql;