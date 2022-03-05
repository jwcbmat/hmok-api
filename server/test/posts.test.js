const axios = require('axios');
const crypto = require('crypto');
const postService = require('../service/postService');


const generate = function () {
    return crypto.randomBytes(20).toString('hex');
};

test('Should get posts', async () => {
    // given - dado que
    const post1 = postService.savePost({ title: generate(), content: generate() });
    const post2 = postService.savePost({ title: generate(), content: generate() });
    const post3 = postService.savePost({ title: generate(), content: generate() });
    // when - quando acontecer
    const response = await axios({
        url: 'hhtp://localhost:3001/post',
        method: 'get'
    });
    const post = response.data;
    //then - então
}); 