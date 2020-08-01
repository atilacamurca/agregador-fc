# Agregador FC

Site para agregar e comparar times em cada rodada do [Cartola FC](https://cartolafc.globo.com).

Acesse <https://agregador-fc-2019.netlify.app/> e confira os dados
dos times da temporada de 2019.

## Deploy

<https://docs.netlify.com/cli/get-started/>

Criar arquivo `.netlify/state.json` com o conteúdo:

```json
{
	"siteId": "<uuid>"
}
```

Trocar `<uuid>` pelo valor encontrado em <https://app.netlify.com/sites/agregador-fc-2019/settings/general>.

```bash
npm i
cp .env .env-original
cp dotenv-2019 .env>
npm run deploy
```
