#!/usr/bin/env node
/**
 * Parses command line args and runs the desired database commands
 */
const dropDatabase = require('./db-utils').dropDatabase;
const argv = require('yargs')
    .usage('Usage: $0 [cmd] --port [default=3001] --name [default=meteor]')
    .default('port', 3001)
    .default('name', 'meteor')
    .command('drop', 'drops all tables in the database', (yargs) => {
        let url = `mongodb://localhost:${yargs.argv.port}`;
        console.log(url);
        console.log(yargs.argv.name);
        dropDatabase(url, yargs.argv.name);
    })
    .argv;

