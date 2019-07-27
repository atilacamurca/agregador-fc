WITH u AS
  (SELECT DISTINCT rodada_id,
                   ano
   FROM partidas_rodada
   WHERE ano = 2019
   ORDER BY rodada_id DESC
   LIMIT 12),
     t AS
  (SELECT tam.atleta_id,
          tam.ano,
          tam.pontos_num,
          tam.preco_num,
          tam.variacao_num,
          tam.media_num,
          tam.rodada_id,
          partida_por_clube(tam.rodada_id, tam.ano, a.clube_id)
   FROM atletas_mercado tam
   INNER JOIN u ON tam.rodada_id = u.rodada_id
   AND tam.ano = u.ano
   INNER JOIN atletas a ON tam.atleta_id = a.id
   WHERE tam.ano = 2019
   ORDER BY tam.atleta_id,
            tam.rodada_id)
SELECT ano,
       atleta_id,
       apelido,
       c.nome_fantasia AS clube,
       c.id as clube_id,
       p.nome as posicao,
       jsonb_agg(rodada_id ORDER BY rodada_id) as rodadas,
       jsonb_agg(pontos_num ORDER BY rodada_id) as pontos,
       jsonb_agg(preco_num ORDER BY rodada_id) as precos,
       jsonb_agg(variacao_num ORDER BY rodada_id) as variacoes,
       jsonb_agg(media_num ORDER BY rodada_id) as medias,
       jsonb_agg(partida_por_clube ORDER BY rodada_id) as partidas,
       foto,
       escudo_60
FROM t
INNER JOIN atletas a ON t.atleta_id = a.id
INNER JOIN clubes c ON a.clube_id = c.id
INNER JOIN posicoes p ON a.posicao_id = p.id
WHERE clube_id <> 1
GROUP BY atleta_id,
         ano,
         apelido,
         c.nome_fantasia,
         c.id,
         p.nome,
         foto,
         escudo_60
ORDER BY atleta_id
LIMIT 1000