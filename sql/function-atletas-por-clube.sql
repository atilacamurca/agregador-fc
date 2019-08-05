-- DROP FUNCTION public.atletas_por_clube(integer, integer, integer);

CREATE OR REPLACE FUNCTION atletas_por_clube(_rodada_id integer, _ano integer, _clube_id integer)
RETURNS json AS
$BODY$
  SELECT array_to_json(array_agg(t)) AS json FROM (
  SELECT a.id,
          apelido,
          p.nome AS posicao,
          p.abreviacao AS posicao_abrev,
          foto,
          pontos_num,
          preco_num,
          variacao_num,
          media_num,
          jogos_num
   FROM atletas a
   INNER JOIN atletas_mercado am ON a.id = am.atleta_id
   INNER JOIN posicoes p ON a.posicao_id = p.id
   WHERE a.clube_id = _clube_id
     AND am.rodada_id = _rodada_id - 1
     AND am.ano = _ano
   ORDER BY apelido) t
$BODY$ LANGUAGE sql;
