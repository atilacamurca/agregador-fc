SELECT partida_id,
    radar_por_posicao(pr.rodada_id, pr.ano, pr.clube_casa_id) AS radar_casa,
    radar_por_posicao(pr.rodada_id, pr.ano, pr.clube_visitante_id) AS radar_visitante,
    clube_casa_id,
    cc.nome_fantasia as clube_casa,
    cc.escudo_60 as escudo_casa,
    cc.abreviacao as clube_casa_abreviacao,
    clube_casa_posicao,
    clube_visitante_id,
    cv.nome_fantasia as clube_visitante,
    cv.escudo_60 as escudo_visitante,
    cv.abreviacao as clube_visitante_abreviacao,
    clube_visitante_posicao
FROM partidas_rodada pr
INNER JOIN clubes cc ON pr.clube_casa_id = cc.id
INNER JOIN clubes cv ON pr.clube_visitante_id = cv.id
WHERE pr.rodada_id = 5
    AND pr.ano = 2019
ORDER BY partida_data ASC
