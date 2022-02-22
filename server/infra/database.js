const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'johnathanclinicorp',
    host: 'localhost',
    port: 5432,
    database: 'hmok-database'
});

module.exports = db;