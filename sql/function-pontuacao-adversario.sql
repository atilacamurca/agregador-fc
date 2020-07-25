DROP FUNCTION public.pontuacao_adversario_por_posicao(integer, integer, integer);

CREATE OR REPLACE FUNCTION public.pontuacao_adversario_por_posicao(
    _ano integer,
    _clube_id integer,
    _posicao_id integer)
  RETURNS json AS
$BODY$
  SELECT array_to_json(array_agg(t)) AS JSON
FROM
  (SELECT a.clube_id,
          pr.rodada_id,
          coalesce(avg(pontos_num) FILTER (WHERE pontos_num <> 0), 0)::numeric(10, 2) AS pontos_num_avg,
          coalesce(max(pontos_num) FILTER (WHERE pontos_num <> 0), 0)::numeric(10, 2) AS pontos_num_max,
          coalesce(min(pontos_num) FILTER (WHERE pontos_num <> 0), 0)::numeric(10, 2) AS pontos_num_min,
          cc.id as clube_casa_id,
          cc.abreviacao AS clube_casa_abreviacao,
          cc.escudo_60 AS escudo_casa,
          cv.id as clube_visitante_id,
          cv.abreviacao AS clube_visitante_abreviacao,
          cv.escudo_60 AS escudo_visitante,
          coalesce(placar_oficial_mandante, 0) as placar_oficial_mandante,
          coalesce(placar_oficial_visitante, 0) as placar_oficial_visitante
   FROM partidas_rodada pr
   INNER JOIN clubes cc ON pr.clube_casa_id = cc.id
   INNER JOIN clubes cv ON pr.clube_visitante_id = cv.id
   INNER JOIN atletas a ON (clube_casa_id = a.clube_id
                            OR clube_visitante_id = a.clube_id)
   AND a.clube_id <> _clube_id
   INNER JOIN clubes c ON a.clube_id = c.id
   INNER JOIN atletas_mercado am ON pr.rodada_id = am.rodada_id
   AND am.ano = _ano
   AND am.atleta_id = a.id
   WHERE (clube_casa_id = _clube_id
          OR clube_visitante_id = _clube_id)
     AND a.posicao_id = _posicao_id
     AND pr.ano = _ano
   GROUP BY a.clube_id,
            pr.rodada_id,
            cc.abreviacao,
            cc.escudo_60,
            cv.abreviacao,
            cv.escudo_60,
            cc.id,
            cv.id,
            placar_oficial_mandante,
            placar_oficial_visitante
   ORDER BY pr.rodada_id DESC) t
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION public.pontuacao_adversario_por_posicao(integer, integer, integer)
  OWNER TO postgres;
