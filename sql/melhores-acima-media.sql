SELECT DISTINCT rodada_id + 1 as rodada,
    to_jsonb(melhores_posicao(rodada_id, ano, 1)) AS goleiros,
    to_jsonb(melhores_posicao(rodada_id, ano, 2)) AS laterais,
    to_jsonb(melhores_posicao(rodada_id, ano, 3)) AS zagueiros,
    to_jsonb(melhores_posicao(rodada_id, ano, 4)) AS meias,
    to_jsonb(melhores_posicao(rodada_id, ano, 5)) AS atacantes,
    to_jsonb(melhores_posicao(rodada_id, ano, 6)) AS tecnicos
FROM partidas_rodada p
WHERE rodada_id = 5
  AND ano = 2019

-- SELECT am.atleta_id,
--        apelido,
--        p.nome as posicao,
--        p.abreviacao as posicao_abrev,
--        c.nome_fantasia AS clube,
--        a.foto,
--        c.escudo_60,
--        preco_num,
--        variacao_num,
--        media_num,
--        jogos_num,
--        pontos_num
-- FROM atletas_mercado am
-- INNER JOIN atletas a ON am.atleta_id = a.id
-- INNER JOIN clubes c ON a.clube_id = c.id
-- INNER JOIN posicoes p ON a.posicao_id = p.id
-- WHERE ano = 2019
--   AND rodada_id = 5
-- ORDER BY jogos_num DESC, media_num DESC
-- LIMIT 25