select a.id, apelido, p.nome as posicao, p.abreviacao as posicao_abrev, foto,
pontos_num, preco_num, variacao_num, media_num, jogos_num
from atletas a
inner join atletas_mercado am on a.id = am.atleta_id
inner join posicoes p on a.posicao_id = p.id
where a.clube_id = 283
and am.rodada_id = 11 and am.ano = 2019
order by apelido