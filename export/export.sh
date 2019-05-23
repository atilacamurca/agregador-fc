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

typeset -i i END
let END=${RODADA_ATUAL_ID}-1 i=4
while ((i<=END)); do
    echo "Verificando rodada ${i} ..."
    if [[ ! -f "rodada/${YEAR}/${i}.json" || ${OVERRIDE} = true ]]; then
        echo "Exportando rodada ${i} ..."
        node export/dados-rodada.js ${i}

        echo "Exportando melhores: Ah, ladrão! ..."
        node export/ah-ladrao.js ${i}
    fi

    let i++
done

echo "Exportando rodada atual ..."
node export/dados-rodada.js
echo "Exportando melhores: Ah, ladrão! ..."
node export/ah-ladrao.js
