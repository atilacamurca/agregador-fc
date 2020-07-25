DROP FUNCTION public.partida_por_clube(integer, integer, integer);

CREATE OR REPLACE FUNCTION public.partida_por_clube(
    _rodada_id integer,
    _ano integer,
    _clube_id integer)
  RETURNS json AS
$BODY$
    SELECT row_to_json(t) AS json FROM (
        SELECT clube_casa_id,
	       cc.nome_fantasia AS clube_casa,
	       cc.escudo_60 AS clube_casa_escudo,
	       cc.abreviacao AS clube_casa_abrev,
	       clube_visitante_id,
	       cv.nome_fantasia AS clube_visitante,
	       cv.escudo_60 AS clube_visitante_escudo,
	       cv.abreviacao AS clube_visitante_abrev,
	       coalesce(placar_oficial_mandante, 0) as placar_oficial_mandante,
	       coalesce(placar_oficial_visitante, 0) as placar_oficial_visitante,
	       pr.rodada_id
	FROM partidas_rodada pr
	INNER JOIN clubes cc ON pr.clube_casa_id = cc.id
	INNER JOIN clubes cv ON pr.clube_visitante_id = cv.id
	WHERE pr.rodada_id = _rodada_id
	  AND pr.ano = _ano
	  AND (clube_casa_id = _clube_id
	       OR clube_visitante_id = _clube_id)
    ) t
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION public.partida_por_clube(integer, integer, integer)
  OWNER TO postgres;
