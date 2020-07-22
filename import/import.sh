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
echo "Rodada atual: ${RODADA_ATUAL_ID} de ${YEAR}"

curl https://api.cartolafc.globo.com/rodadas -so import/rodadas.json
echo "Atualizando rodadas ..."
node import/rodadas.js

curl https://api.cartolafc.globo.com/atletas/mercado -so import/atletas-mercado.json
echo "Atualizando atletas da rodada ${RODADA_ATUAL_ID} ..."
node import/atletas-mercado.js

curl https://api.cartolafc.globo.com/partidas/"${RODADA_ATUAL_ID}" -so import/partidas-rodada.json
echo "Atualizando partidas da rodada ${RODADA_ATUAL_ID} ..."
node import/partidas-rodada.js

curl https://api.cartolafc.globo.com/atletas/mercado -so import/atletas-mercado.json
echo "Atualizando atletas da rodada ${RODADA_ATUAL_ID} ..."
node import/atletas-mercado.js
