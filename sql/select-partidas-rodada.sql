SELECT partida_id,
stat_goleiros(pr.rodada_id, pr.ano, pr.clube_casa_id) as goleiros_casa,
stat_goleiros(pr.rodada_id, pr.ano, pr.clube_visitante_id) as goleiros_visitante,
stat_zagueiros(pr.rodada_id, pr.ano, pr.clube_casa_id) as zagueiros_casa,
stat_zagueiros(pr.rodada_id, pr.ano, pr.clube_visitante_id) as zagueiros_visitante,
clube_casa_id, clube_casa_posicao, 
aproveitamento_mandante, clube_visitante_id, clube_visitante_posicao, 
aproveitamento_visitante, partida_data, local, valida, placar_oficial_mandante, 
placar_oficial_visitante, url_confronto, url_transmissao
from public.partidas_rodada pr
where pr.rodada_id = 4 and pr.ano = 2019
