SELECT partida_id,
       stat_goleiros(pr.rodada_id, pr.ano, pr.clube_casa_id) AS goleiros_casa,
       stat_goleiros(pr.rodada_id, pr.ano, pr.clube_visitante_id) AS goleiros_visitante,
       stat_zagueiros(pr.rodada_id, pr.ano, pr.clube_casa_id) AS zagueiros_casa,
       stat_zagueiros(pr.rodada_id, pr.ano, pr.clube_visitante_id) AS zagueiros_visitante,
       stat_atacantes(pr.rodada_id, pr.ano, pr.clube_casa_id) AS atacantes_casa,
       stat_atacantes(pr.rodada_id, pr.ano, pr.clube_visitante_id) AS atacantes_visitante,
       clube_casa_id,
       cc.nome_fantasia as clube_casa,
       cc.escudo_60 as escudo_casa,
       clube_casa_posicao,
       aproveitamento_mandante,
       clube_visitante_id,
       cv.nome_fantasia as clube_visitante,
       cv.escudo_60 as escudo_visitante,
       clube_visitante_posicao,
       aproveitamento_visitante,
       partida_data,
       "local",
       valida,
       placar_oficial_mandante,
       placar_oficial_visitante,
       url_confronto,
       url_transmissao
FROM partidas_rodada pr
INNER JOIN clubes cc ON pr.clube_casa_id = cc.id
INNER JOIN clubes cv ON pr.clube_visitante_id = cv.id
WHERE pr.rodada_id = 4
  AND pr.ano = 2019
ORDER BY partida_data ASC