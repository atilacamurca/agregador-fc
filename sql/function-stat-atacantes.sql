DROP FUNCTION public.stat_atacantes(integer, integer, integer);

CREATE FUNCTION stat_atacantes(_rodada_id integer, _ano integer, _clube_id integer)
RETURNS json AS
$$
    SELECT row_to_json(t) AS json FROM (
        select coalesce(sum(g), 0) as sum_g, coalesce(sum(a), 0) as sum_a,
        coalesce(sum(fs), 0) as sum_fs, coalesce(sum(ff), 0) as sum_ff,
        coalesce(sum(pp), 0) as sum_pp, coalesce(sum(fc), 0) as sum_fc,
        coalesce(sum(i), 0) as sum_i, coalesce(sum(fd), 0) as sum_fd
        from atletas_mercado am
        inner join atletas a on am.atleta_id = a.id
        inner join clubes c on a.clube_id = c.id
        where am.rodada_id = _rodada_id - 1 -- rodada anterior
        and am.ano = _ano
        and _clube_id = a.clube_id and posicao_id = 5 -- atacante
    ) t
$$ LANGUAGE sql;
