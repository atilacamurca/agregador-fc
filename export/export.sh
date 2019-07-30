#!/usr/bin/env bash

set -o nounset
set -o errexit
set -o pipefail

# Option strings
SHORT=oh
LONG=override,help

# read the options
OPTS=$(getopt --options $SHORT --long $LONG --name "$0" -- "$@")

if [ $? != 0 ] ; then
    echo "Failed to parse options...exiting." >&2
    exit 1
fi

eval set -- "$OPTS"

# set initial values
OVERRIDE=false

# extract options and their arguments into variables.
while true ; do
    case "$1" in
        -o | --override )
            OVERRIDE=true
            shift
        ;;
        # -p | --profile )
        #     PROFILE="$2"
        #     shift 2
        # ;;
        -- )
            shift
            break
        ;;
        -h | --help | *)
            echo "DESCRIÇÃO"
            echo -e "\tArgumentos"
            echo -e "\t-o, --override"
            echo -e "\t\tSobrescrever arquivos existentes"
            echo
            echo -e "\t-h--help"
            echo -e "\t\tMostra esta mensagem"
            echo
            exit 1
        ;;
    esac
done

echo "Sobrescrever arquivos? ${OVERRIDE}"
echo

if [ ! -f ".env" ]; then
    echo "Arquivo .env não existe".
    exit 1
fi

source .env

YEAR=$(date +"%Y")
echo "Rodada atual: ${RODADA_ATUAL_ID} / ${YEAR}"

dados_rodada() {
    local rodada_id=${1:-$RODADA_ATUAL_ID}
    echo "Exportando rodada ${rodada_id} ..."
    node export/dados-rodada.js ${rodada_id}
}

ah_ladrao() {
    local rodada_id=${1:-$RODADA_ATUAL_ID}
    echo "Exportando melhores rodada ${rodada_id}: Ah, ladrão! ..."
    node export/ah-ladrao.js ${rodada_id}
}

acima_media() {
    local rodada_id=${1:-$RODADA_ATUAL_ID}
    echo "Exportando melhores rodada ${rodada_id}: Acima da média ..."
    node export/acima-media.js ${rodada_id}
}

atletas_pontuacao() {
    echo "Exportando pontuação dos atletas ..."
    node export/atletas-pontuacao.js
}

typeset -i i END
let END=${RODADA_ATUAL_ID}-1 i=4
while ((i<=END)); do
    echo "Verificando rodada ${i} ..."
    if [[ ! -f "rodada/${YEAR}/${i}.json" || ${OVERRIDE} = true ]]; then
        dados_rodada $i
        ah_ladrao $i
        acima_media $i
    fi

    let i++
done

dados_rodada
ah_ladrao
acima_media
atletas_pontuacao
