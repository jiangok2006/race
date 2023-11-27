#!/bin/bash

SEEDS_SQL="./scripts/seeds.sql"

function recreate_local_db {
    rm -rf .wrangler/state/d1
    npx wrangler d1 migrations apply DB  --local
    npx wrangler d1 execute DB --file=$SEEDS_SQL --local
}

function update_db {
    database=$1 # race-preview | race-production
    npx wrangler d1 migrations apply $database
}

function populate_seeds {
    ENV=$1 # preview | production
    npx wrangler d1 execute "race-$ENV"  --file=$SEEDS_SQL
}