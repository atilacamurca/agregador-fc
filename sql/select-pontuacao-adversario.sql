-- TODO: fazer média de todos
SELECT a.id as atleta_id, a.apelido, a.clube_id, pr.rodada_id, pontos_num,
preco_num, variacao_num, media_num, c.nome_fantasia, c.escudo_60, a.foto
FROM partidas_rodada pr
INNER JOIN clubes cc ON pr.clube_casa_id = cc.id
INNER JOIN clubes cv ON pr.clube_visitante_id = cv.id
INNER JOIN atletas a ON (clube_casa_id = a.clube_id OR clube_visitante_id = a.clube_id) AND a.clube_id <> 265
INNER JOIN clubes c ON a.clube_id = c.id
INNER JOIN atletas_mercado am ON pr.rodada_id = am.rodada_id AND am.ano = 2019 and am.atleta_id = a.id
WHERE (clube_casa_id = 265 OR clube_visitante_id = 265)
AND a.posicao_id = 1 AND status_id IN (2, 7)
ORDER BY pr.rodada_id