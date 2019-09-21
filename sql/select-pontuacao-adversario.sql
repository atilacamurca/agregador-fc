-- TODO: fazer média de todos
SELECT a.clube_id, pr.rodada_id, avg(pontos_num)::numeric(10,2) as pontos_num,
avg(media_num)::numeric(10,2) as media_num, cc.abreviacao as clube_casa_abreviacao, cc.escudo_60 as escudo_casa,
cv.abreviacao as clube_visitante_abreviacao, cv.escudo_60 as escudo_visitante
FROM partidas_rodada pr
INNER JOIN clubes cc ON pr.clube_casa_id = cc.id
INNER JOIN clubes cv ON pr.clube_visitante_id = cv.id
INNER JOIN atletas a ON (clube_casa_id = a.clube_id OR clube_visitante_id = a.clube_id) AND a.clube_id <> 265
INNER JOIN clubes c ON a.clube_id = c.id
INNER JOIN atletas_mercado am ON pr.rodada_id = am.rodada_id AND am.ano = 2019 and am.atleta_id = a.id
WHERE (clube_casa_id = 265 OR clube_visitante_id = 265)
AND a.posicao_id = 1 AND status_id IN (2, 7) AND pr.ano = 2019
GROUP BY a.clube_id, pr.rodada_id, cc.abreviacao, cc.escudo_60,
cv.abreviacao, cv.escudo_60
ORDER BY pr.rodada_id DESC
