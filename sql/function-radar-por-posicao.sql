CREATE OR REPLACE FUNCTION radar_por_posicao(_rodada_id integer, _ano integer, _clube_id integer)
RETURNS json AS
$BODY$
DECLARE
  rec JSON;
BEGIN
  SELECT array_to_json(array_agg(t)) AS JSON FROM
  (SELECT p.abreviacao as pos,
          coalesce(sum(rb * 1.5 + g * 8 + a * 5 + sg * 5 + fs * 0.5
          + ff * 0.8 + fd * 1.2 + ft * 3 + dd * 3 + dp * 7 + gc * -5
          + cv * -5 + ca * -2 + pp * -4 + gs * -2 + fc * -0.5 + i * -0.5
          + pe * -0.3), 0) AS sum_pos
    FROM atletas_mercado am
    INNER JOIN atletas a ON am.atleta_id = a.id
    INNER JOIN posicoes p ON a.posicao_id = p.id
    WHERE am.rodada_id = _rodada_id - 1 -- rodada anterior
    AND am.ano = _ano
        AND  a.clube_id = _clube_id
        AND posicao_id <> 6 -- diferente de técnico
    GROUP BY posicao_id, p.abreviacao
    ORDER BY posicao_id
  ) t INTO rec;
  if rec is null    -- ERROR:  record "rec" is not assigned yet
  then
    RETURN '[{"pos": "gol", "sum_pos": 0}, {"pos": "lat", "sum_pos": 0}, {"pos": "zag", "sum_pos": 0}, {"pos": "mei", "sum_pos": 0}, {"pos": "ata", "sum_pos": 0}]'::json;
  ELSE
    RETURN rec;
  end if;
END;
$BODY$ LANGUAGE plpgsql;
