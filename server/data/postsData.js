const database = require('../infra/database');

exports.getPosts = function () {
    return database.query('select * from hmok-database.post')
}