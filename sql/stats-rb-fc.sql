SELECT am.atleta_id,
       apelido,
       p.nome as posicao,
       p.abreviacao as posicao_abrev,
       rb,
       fc,
       ca,
       ca * -2 AS tot_ca,
       rb * 1.5 AS tot_rb,
       fc * -0.5 AS tot_fc,
       (rb * 1.5) + (fc * -0.5) + (ca * -2) AS tot_pontuacao,
       c.nome_fantasia AS clube,
       a.foto,
       c.escudo_60,
       preco_num,
       variacao_num,
       media_num,
       jogos_num
FROM atletas_mercado am
INNER JOIN atletas a ON am.atleta_id = a.id
INNER JOIN clubes c ON a.clube_id = c.id
INNER JOIN posicoes p ON a.posicao_id = p.id
WHERE ano = 2019
  AND rodada_id = 4
ORDER BY (rb * 1.5) + (fc * -0.5) + (ca * -2) DESC
LIMIT 25