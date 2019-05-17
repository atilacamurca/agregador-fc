DROP FUNCTION public.stat_destaques_defesa(integer, integer, integer);

CREATE FUNCTION stat_destaques_defesa(_rodada_id integer, _ano integer, _clube_id integer) 
RETURNS json AS
$$
    SELECT array_to_json(array_agg(t)) AS JSON FROM (
        SELECT media_num,
            a.id as atleta_id,
            a.apelido,
            jogos_num,
            preco_num,
            variacao_num,
            foto,
            p.nome as nome_posicao,
            p.abreviacao as abreviacao_posicao
        FROM atletas_mercado am
        INNER JOIN atletas a ON am.atleta_id = a.id
        INNER JOIN clubes c ON a.clube_id = c.id
        INNER JOIN posicoes p ON a.posicao_id = p.id
        WHERE am.rodada_id = _rodada_id - 1 -- rodada anterior
            AND am.ano = _ano
            AND media_num > 0
            AND _clube_id = a.clube_id
            AND posicao_id IN (1,
                     2,
                     3)-- Goleiro, Lateral, Zagueiro
        ORDER BY media_num DESC,
            preco_num ASC
        LIMIT 4
    ) t
$$ LANGUAGE sql;
