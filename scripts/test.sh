npm install
npx playwright install --with-deps

# $1: preview|production, $2: dev.race-dui.pages.dev|race-dui.pages.dev
export APP_HTTP_URL=$2
npm run test:$1
