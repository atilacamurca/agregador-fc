DROP FUNCTION public.stat_zagueiros(integer, integer, integer);

CREATE OR REPLACE FUNCTION stat_zagueiros(_rodada_id integer, _ano integer, _clube_id integer) 
RETURNS json AS
$$
    SELECT row_to_json(t) AS json FROM (
        select coalesce(sum(rb), 0) as sum_rb, coalesce(sum(g), 0) as sum_g,
        coalesce(sum(gc), 0) as sum_gc
        from atletas_mercado am
        inner join atletas a on am.atleta_id = a.id
        inner join clubes c on a.clube_id = c.id
        where am.rodada_id = _rodada_id - 1 -- rodada anterior
        and am.ano = _ano
        and _clube_id = a.clube_id and posicao_id = 3 -- zagueiro
    ) t
$$ LANGUAGE sql;
