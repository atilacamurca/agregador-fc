ALTER TABLE public.atletas_mercado ADD COLUMN pi numeric;
ALTER TABLE public.atletas_mercado ADD COLUMN ds numeric;
COMMENT ON COLUMN public.atletas_mercado.pe
IS '@deprecated foi substituído por PI - PASSE INCOMPLETO';
COMMENT ON COLUMN public.atletas_mercado.rb
IS '@deprecated foi substituído por DS - DESARME';
ALTER TABLE public.atletas_mercado
ALTER COLUMN rb SET DEFAULT 0;
ALTER TABLE public.atletas_mercado
ALTER COLUMN pe SET DEFAULT 0;
CREATE TABLE public.clubes_temporada (
    clube_id integer NOT NULL REFERENCES public.clubes (id),
    temporada integer NOT NULL,
    PRIMARY KEY(clube_id, temporada)
);
