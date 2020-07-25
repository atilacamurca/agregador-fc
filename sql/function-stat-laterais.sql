DROP FUNCTION public.stat_laterais(integer, integer, integer);

CREATE OR REPLACE FUNCTION public.stat_laterais(
    _rodada_id integer,
    _ano integer,
    _clube_id integer)
  RETURNS json AS
$BODY$
    SELECT row_to_json(t) AS json FROM (
        select coalesce(sum(rb), 0) as sum_rb, coalesce(sum(ds), 0) as sum_ds,
        coalesce(sum(g), 0) as sum_g, coalesce(sum(a), 0) as sum_a,
        coalesce(sum(fs), 0) as sum_fs, coalesce(sum(pe), 0) as sum_pe,
        coalesce(sum("pi"), 0) as sum_pi, coalesce(sum(ff), 0) as sum_ff,
        coalesce(sum(fd), 0) as sum_fd, coalesce(sum(fc), 0) as sum_fc
        from atletas_mercado am
        inner join atletas a on am.atleta_id = a.id
        inner join clubes c on a.clube_id = c.id
        where am.rodada_id = _rodada_id - 1 -- rodada anterior
        and am.ano = _ano
        and _clube_id = a.clube_id and posicao_id = 3 -- lateral
    ) t
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION public.stat_laterais(integer, integer, integer)
  OWNER TO postgres;
