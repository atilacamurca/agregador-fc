# Agregador FC

Site para agregar e comparar times em cada rodada do [Cartola FC](https://cartolafc.globo.com).

Acesse <https://atilacamurca.github.io/agregador-fc> e confira os dados
dos times da rodada.

Acesse <https://agregador-fc-2020.netlify.app/> e confira os dados
dos times da temporada de 2020.

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

Trocar `<uuid>` pelo valor encontrado em <https://app.netlify.com/sites/agregador-fc-2020/settings/general>.

## Deploy


```bash
npm i
cp .env .env-original
cp dotenv-2020 .env
npm run deploy
```
