select apelido, rb, fc, case when fc > 0 then rb / fc else 0 end, rb * 1.5, fc * -0.5, (rb * 1.5) + (fc * -0.5)
from atletas_mercado am
inner join atletas a on am.atleta_id = a.id
where ano = 2019
and rodada_id = 4
and rb > 0
-- and apelido ilike '%geromel%'
order by (rb * 1.5) + (fc * -0.5) desc