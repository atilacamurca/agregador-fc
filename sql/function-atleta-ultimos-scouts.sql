﻿-- DROP FUNCTION public.atleta_ultimos_scouts(integer, integer);

CREATE OR REPLACE FUNCTION atleta_ultimos_scouts(_ano integer, _atleta_id integer)
RETURNS json AS
$$
    SELECT row_to_json(t) AS json FROM (
        SELECT rodada_id, rb, g, a, sg, fs, ff, fd,
			ft, dd, dp, gc, cv, ca,
			pp, gs, fc, i, pe,
			pontos_num, preco_num,
			variacao_num, media_num, jogos_num,
			abreviacao AS posicao_abrev,
			p.nome AS posicao
		FROM atletas_mercado am
		INNER JOIN atletas a ON am.atleta_id = a.id
		INNER JOIN posicoes p ON a.posicao_id = p.id
		WHERE ano = _ano
		AND atleta_id = _atleta_id
		ORDER BY rodada_id DESC
		LIMIT 1
    ) t
$$ LANGUAGE sql;