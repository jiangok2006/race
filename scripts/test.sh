npm install
npx playwright install --with-deps

# $1: monitoring|e2e|integration|unit
# $2: preview|production
# $3: dev.race-dui.pages.dev|race-dui.pages.dev
export APP_HTTP_URL="http://$3"
npm run test --dir "./tests/$1"
