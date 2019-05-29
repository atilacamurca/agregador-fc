DROP FUNCTION public.melhores_posicao(integer, integer, integer);

-- Retorna os 10 jogadores com maior média por posição
CREATE FUNCTION melhores_posicao(_rodada_id integer, _ano integer, _posicao_id integer)
RETURNS json AS
$$
    SELECT array_to_json(array_agg(t)) AS json FROM (
        SELECT am.atleta_id,
	       apelido,
	       p.nome as nome_posicao,
	       p.abreviacao as abreviacao_posicao,
	       c.nome_fantasia AS clube,
	       a.foto,
	       preco_num,
	       variacao_num,
	       media_num,
	       jogos_num,
	       pontos_num,
	       partida_por_clube(_rodada_id + 1, _ano, a.clube_id) as partida
	FROM atletas_mercado am
	INNER JOIN atletas a ON am.atleta_id = a.id
	INNER JOIN clubes c ON a.clube_id = c.id
	INNER JOIN posicoes p ON a.posicao_id = p.id
	WHERE am.rodada_id = _rodada_id
	  AND am.ano = _ano
	  AND posicao_id = _posicao_id
	ORDER BY media_num * jogos_num DESC, media_num DESC
	LIMIT 10
    ) t
$$ LANGUAGE sql;
