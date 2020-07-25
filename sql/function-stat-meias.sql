DROP FUNCTION public.stat_meias(integer, integer, integer);

CREATE OR REPLACE FUNCTION public.stat_meias(
    _rodada_id integer,
    _ano integer,
    _clube_id integer)
  RETURNS json AS
$BODY$
    SELECT row_to_json(t) AS json FROM (
        select coalesce(sum(g), 0) as sum_g, coalesce(sum(a), 0) as sum_a,
        coalesce(sum(fs), 0) as sum_fs, coalesce(sum(ff), 0) as sum_ff,
        coalesce(sum(fc), 0) as sum_fc, coalesce(sum(rb), 0) as sum_rb,
        coalesce(sum(fd), 0) as sum_fd, coalesce(sum(ca), 0) as sum_ca,
        coalesce(sum(pe), 0) as sum_pe, coalesce(sum(ds), 0) as sum_ds,
        coalesce(sum("pi"), 0) as sum_pi
        from atletas_mercado am
        inner join atletas a on am.atleta_id = a.id
        inner join clubes c on a.clube_id = c.id
        where am.rodada_id = _rodada_id - 1 -- rodada anterior
        and am.ano = _ano
        and _clube_id = a.clube_id and posicao_id = 4 -- Meia
    ) t
$BODY$
  LANGUAGE sql VOLATILE
  COST 100;
ALTER FUNCTION public.stat_meias(integer, integer, integer)
  OWNER TO postgres;
