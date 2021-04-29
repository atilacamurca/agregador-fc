DROP FUNCTION public.stat_destaques_ataque(integer, integer, integer);

CREATE OR REPLACE FUNCTION public.stat_destaques_ataque(
    _rodada_id integer,
    _ano integer,
    _clube_id integer)
  RETURNS json AS
$BODY$
    SELECT array_to_json(array_agg(t)) AS JSON FROM (
        SELECT media_num,
            a.id as atleta_id,
            a.apelido,
            jogos_num,
            preco_num,
            variacao_num,
            pontos_num,
            foto,
            p.nome as nome_posicao,
            p.abreviacao as abreviacao_posicao
        FROM atletas_mercado am
        INNER JOIN atletas a ON am.atleta_id = a.id
        INNER JOIN clubes c ON a.clube_id = c.id
        INNER JOIN posicoes p ON a.posicao_id = p.id
        WHERE CASE WHEN _rodada_id = 1 THEN true ELSE am.rodada_id = _rodada_id - 1 END -- rodada anterior, ignorar na rodada 1
            AND am.ano = _ano
            AND CASE WHEN _rodada_id = 1 THEN true ELSE media_num > 0 END -- ignorar na rodada 1
            AND _clube_id = a.clube_id
            AND posicao_id IN (4,
                     5)-- Meia, Atacante
        ORDER BY media_num * jogos_num DESC,
            CASE WHEN _rodada_id = 1 THEN -preco_num ELSE preco_num END ASC
        LIMIT 4
    ) t
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION public.stat_destaques_ataque(integer, integer, integer)
  OWNER TO postgres;
