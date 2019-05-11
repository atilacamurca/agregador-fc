## Installation

```bash
npm install
```

## Developement

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Database

```sql
create table status (id integer primary key, nome text not null);
create table posicoes (id integer primary key, nome text not null, abreviacao text not null);
create table clubes (
    id integer primary key,
    nome text not null,
    nome_fantasia text not null,
    abreviacao text not null,
    posicao integer not null,
    escudo_60 text not null
);

create table atletas (
    id integer primary key,
    nome text not null,
    slug text not null,
    apelido text not null,
    foto text not null,
    clube_id integer not null references clubes(id),
    posicao_id integer not null references posicoes(id)
);

create table rodadas (
    rodada_id integer not null,
    ano integer not null,
    inicio timestamp not null,
    fim timestamp not null,
    primary key (rodada_id, ano)
);

create table atletas_mercado (
    atleta_id integer not null references atletas(id),
    rodada_id integer not null,
    ano integer not null,
    pontos_num numeric not null,
    preco_num numeric not null,
    variacao_num numeric not null,
    media_num numeric not null,
    jogos_num integer not null,
    rb numeric,
    g numeric,
    a numeric,
    sg numeric,
    fs numeric,
    ff numeric,
    fd numeric,
    ft numeric,
    dd numeric,
    dp numeric,
    gc numeric,
    cv numeric,
    ca numeric,
    pp numeric,
    gs numeric,
    fc numeric,
    i numeric,
    pe numeric,
    foreign key (rodada_id, ano) references rodadas(rodada_id, ano),
    primary key (atleta_id, rodada_id, ano)
);

create table partidas_rodada (
    partida_id integer not null,
    rodada_id integer not null,
    ano integer not null,
    clube_casa_id integer not null references clubes(id),
    clube_casa_posicao integer,
    aproveitamento_mandante json,
    clube_visitante_id integer not null references clubes(id),
    clube_visitante_posicao integer,
    aproveitamento_visitante json,
    partida_data timestamp not null,
    "local" text,
    valida boolean,
    placar_oficial_mandante integer,
    placar_oficial_visitante integer,
    url_confronto text,
    url_transmissao text,
    foreign key (rodada_id, ano) references rodadas(rodada_id, ano),
    primary key (partida_id, rodada_id, ano)
);
```

### Links

- <https://www.npmjs.com/package/convert-csv-to-json>
- <https://github.com/henriquepgomide/caRtola/blob/master/data/2019/rodada-3.csv>
- <https://github.com/gridsome/gridsome-starter-blog>
- <https://api.cartolafc.globo.com/partidas/3>
- <https://github.com/menegazzo/cartola-opexe/blob/master/cartola.py>
- <https://github.com/wgenial/cartrolandofc/blob/master/nova-api.md>
- <https://www.timescale.com/>
