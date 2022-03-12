# Agregador FC

Site para agregar e comparar times em cada rodada do [Cartola FC](https://cartolafc.globo.com).

Acesse <https://agregador-fc-2021.netlify.app/> e confira os dados
dos times da temporada de 2021.

## Configuração Inicial

<https://docs.netlify.com/cli/get-started/>

```bash
netlify init --manual
```

## Configuração Manual

Criar arquivo `.netlify/state.json` com o conteúdo:

```json
{
	"siteId": "<uuid>"
}
```

Trocar `<uuid>` pelo valor encontrado em <https://app.netlify.com/sites/agregador-fc-2021/settings/general>.

## Deploy


```bash
npm i
mv .env .env-original
cp dotenv-2021 .env
npm run deploy-netlify
```
