SELECT p.abreviacao as pos,
       coalesce(sum(rb * 1.5 + g * 8 + a * 5 + sg * 5 + fs * 0.5
       + ff * 0.8 + fd * 1.2 + ft * 3 + dd * 3 + dp * 7 + gc * -5
       + cv * -5 + ca * -2 + pp * -4 + gs * -2 + fc * -0.5 + i * -0.5
       + pe * -0.3), 0) AS sum_pos
FROM atletas_mercado am
INNER JOIN atletas a ON am.atleta_id = a.id
INNER JOIN posicoes p ON a.posicao_id = p.id
WHERE am.rodada_id = 31 -- rodada anterior
AND am.ano = 2019
  AND 262 = a.clube_id
  AND posicao_id <> 6
-- and posicao_id = 1 -- goleiro
GROUP BY p.abreviacao -- , clube_id
ORDER BY p.abreviacao -- clube_id, posicao_id
