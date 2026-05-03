#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ $# -eq 0 ]]; then
  npm test
else
  IFS=',' read -r -a FILES <<< "$1"
  npx mocha --ignore "test/assets/scripts/*.js" --recursive --require test/fixtures.mjs --timeout 5000 "${FILES[@]}"
fi
