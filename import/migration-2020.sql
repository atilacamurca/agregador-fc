ALTER TABLE public.atletas_mercado ADD COLUMN pi numeric;
ALTER TABLE public.atletas_mercado ADD COLUMN ds numeric;
COMMENT ON COLUMN public.atletas_mercado.pe
IS '@deprecated foi substituído por PI - PASSE INCOMPLETO';
COMMENT ON COLUMN public.atletas_mercado.rb
IS '@deprecated foi substituído por DS - DESARME';
