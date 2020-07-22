DROP FUNCTION public.sumario_gols(integer, integer, integer);

CREATE OR REPLACE FUNCTION public.sumario_gols(
    _rodada_id integer,
    _ano integer,
    _clube_id integer)
  RETURNS json AS
$BODY$
    SELECT row_to_json(t) AS json FROM (
        SELECT coalesce(sum(placar_oficial_mandante) filter (WHERE clube_casa_id = _clube_id), 0) AS gols_marcados_casa,
        coalesce(sum(placar_oficial_visitante) filter (WHERE clube_visitante_id = _clube_id), 0) AS gols_marcados_fora,
        coalesce(sum(placar_oficial_mandante) filter (WHERE clube_casa_id = _clube_id), 0)
            + coalesce(sum(placar_oficial_visitante) filter (WHERE clube_visitante_id = _clube_id), 0) AS gols_marcados_total,
        coalesce(sum(placar_oficial_mandante) filter (WHERE clube_visitante_id = _clube_id), 0) AS gols_sofridos_fora,
        coalesce(sum(placar_oficial_visitante) filter (WHERE clube_casa_id = _clube_id), 0) AS gols_sofridos_casa,
        coalesce(sum(placar_oficial_mandante) filter (WHERE clube_visitante_id = _clube_id), 0)
            + coalesce(sum(placar_oficial_visitante) filter (WHERE clube_casa_id = _clube_id), 0) AS gols_sofridos_total
FROM partidas_rodada
WHERE rodada_id < _rodada_id
  AND ano = _ano
    ) t
$BODY$ LANGUAGE sql;
