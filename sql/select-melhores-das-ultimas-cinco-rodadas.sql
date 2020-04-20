--SELECT array_to_json(array_agg(t)) AS JSON FROM (
SELECT 
    stddev(pontos_num)::numeric(10,2) as stddev_pontos,
    avg(pontos_num)::numeric(10,2) as media_pontos,
    variance(pontos_num)::numeric(10,2) as variance_pontos,
    max(jogos_num) as jogos_num,
    max(pontos_num) as max_pontos,
    min(pontos_num) as min_pontos,
    stddev_pop(pontos_num)::numeric(10,2) as pop_pontos,
    a.id as atleta_id,
    a.apelido,
    p.nome as nome_posicao,
    p.abreviacao as abreviacao_posicao,
    c.nome_fantasia as clube,
    foto
FROM atletas_mercado am
INNER JOIN atletas a ON am.atleta_id = a.id
INNER JOIN clubes c ON a.clube_id = c.id
INNER JOIN posicoes p ON a.posicao_id = p.id
WHERE (am.rodada_id < 38 and am.rodada_id >= 38 - 3)
    AND am.ano = 2019
    AND pontos_num <> 0
    AND posicao_id  = 5 -- Ata
GROUP BY a.id, a.apelido, foto, p.nome, p.abreviacao, c.nome_fantasia
HAVING avg(pontos_num) > 4
ORDER BY 1 ASC
LIMIT 10
--) t