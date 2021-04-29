DROP FUNCTION public.stat_goleiros(integer, integer, integer);

CREATE FUNCTION stat_goleiros(_rodada_id integer, _ano integer, _clube_id integer)
RETURNS json AS
$$
    SELECT row_to_json(t) AS json FROM (
        select coalesce(sum(sg), 0) as sum_sg, coalesce(sum(de), 0) as sum_de,
        coalesce(sum(dp), 0) as sum_dp, coalesce(sum(gs), 0) as sum_gs
        from atletas_mercado am
        inner join atletas a on am.atleta_id = a.id
        inner join clubes c on a.clube_id = c.id
        where am.rodada_id = _rodada_id - 1 -- rodada anterior
        and am.ano = _ano
        and _clube_id = a.clube_id and posicao_id = 1 -- goleiro
    ) t
$$ LANGUAGE sql;
