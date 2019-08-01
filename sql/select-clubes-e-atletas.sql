SELECT c.id,
       c.nome_fantasia,
       c.abreviacao AS clube_abrev,
       escudo_60,
       posicao,
       atletas_por_clube(11, 2019, c.id) AS atletas
FROM clubes c
WHERE id <> 1
ORDER BY c.posicao