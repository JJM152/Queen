#!/bin/sh

# $1: branch name
# $2: optional tag name

if [ $# -eq 0 ]; then
	echo "Usage: $0 GIT_BRANCH_NAME [GIT_TAG]";
	exit 1;
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
	mega-login "$MEGA_LOGIN" "$MEGA_PWD"
	mega-put -c "${1}" Queen/"${2}"
	mega-logout
}

pack_output "$(archive_name)"
upload "$(archive_name)" "$(target_dir)"
