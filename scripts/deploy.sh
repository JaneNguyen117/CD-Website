#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-$HOME/commsdock-site}"
WEB_ROOT="${WEB_ROOT:-/var/www/commsdock}"
BRANCH="${BRANCH:-main}"

cd "$APP_DIR"

echo "==> Pulling latest $BRANCH"
git pull --ff-only origin "$BRANCH"

echo "==> Installing dependencies"
npm install

echo "==> Building static site"
npm run build

echo "==> Publishing dist to $WEB_ROOT"
sudo rsync -a --delete dist/ "$WEB_ROOT"/
sudo chown -R ubuntu:www-data "$WEB_ROOT"
sudo find "$WEB_ROOT" -type d -exec chmod 755 {} \;
sudo find "$WEB_ROOT" -type f -exec chmod 644 {} \;

echo "==> Validating and reloading Nginx"
sudo nginx -t
sudo systemctl reload nginx

echo "==> Deployed CommsDock"
