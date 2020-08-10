-- Cálculo da valorização da Rodada 2
-- Jogador pode até não pontuar mas terá valorização

select preco_num * 0.4 as manter, media_num / 2 as media_rod2, media_num, preco_num, jogos_num, a.apelido, c.nome_fantasia
from public.atletas_mercado am
inner join atletas a on am.atleta_id = a.id
inner join clubes c on a.clube_id = c.id
where am.rodada_id = 1 and am.ano = 2020 AND jogos_num  > 0
order by (preco_num * 0.4) - (media_num / 2)