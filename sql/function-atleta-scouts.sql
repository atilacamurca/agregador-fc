-- DROP FUNCTION public.atleta_scouts(integer, integer, integer);
 
CREATE OR REPLACE FUNCTION atleta_scouts(_rodada_id integer, _ano integer, _atleta_id integer) 
RETURNS json AS
$$
    SELECT row_to_json(t) AS json FROM (
        SELECT rb, g, a, sg, fs, ff, fd,
	       ft, dd, dp, gc, cv, ca,
	       pp, gs, fc, i, pe,
	       abreviacao AS posicao_abrev,
	       p.nome AS posicao
	FROM atletas_mercado am
	INNER JOIN atletas a ON am.atleta_id = a.id
	INNER JOIN posicoes p ON a.posicao_id = p.id
	WHERE rodada_id = _rodada_id
	  AND ano = _ano
	  AND atleta_id = _atleta_id
    ) t
$$ LANGUAGE sql;