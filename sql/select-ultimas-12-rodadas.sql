WITH t AS (
   SELECT DISTINCT rodada_id,
                   ano
   FROM partidas_rodada
   WHERE ano = 2019
   ORDER BY rodada_id DESC
   LIMIT 12
)
SELECT t.rodada_id,
       t.ano,
       am.atleta_id,
       pontos_num,
       media_num
FROM t
INNER JOIN atletas_mercado am ON t.rodada_id = am.rodada_id AND t.ano = am.ano
-- WHERE atleta_id = 50294
-- GROUP BY t.rodada_id,
--        t.ano
ORDER BY t.rodada_id
LIMIT 1000