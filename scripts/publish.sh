#!/bin/sh

# $1: branch name
# $2: optional tag name

if [ $# -eq 0 ]; then
	echo "Usage: $0 GIT_BRANCH_NAME [GIT_TAG]"
fi

BRANCH_NAME="${1}"
TAG="${2}"

archive_name() {
	local _res="Queen"
	[ -z "$TAG" ] || _res="${_res}-${TAG}"
	echo "${_res}.zip"
}

target_dir() {
	[ "$BRANCH_NAME" = "master" ] && echo "" || echo "${BRANCH_NAME}/"
}

# $1: archive name
pack_output() {
	7za a "${1}" Queen.html
}

# $1: file to upload
# $2: dir to upload into
upload() {
	megamkdir -u $MEGA_LOGIN -p $MEGA_PWD /Root/Queen/"${2}" || true
	megarm -u $MEGA_LOGIN -p $MEGA_PWD "/Root/Queen/${2}/${1}" || true
	megaput -u $MEGA_LOGIN -p $MEGA_PWD --path="/Root/Queen/${2}" "${1}"
}


pack_output "$(archive_name)"
upload "$(archive_name)" "$(target_dir)"
