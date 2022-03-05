const database = require('../../infra/database');

exports.getPosts = function () {
    return database.query('select * from hmok.post');
}

exports.getStartPosts = function () {
    return database.query('select * from hmok.startposts')
}
