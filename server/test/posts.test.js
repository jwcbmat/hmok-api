const axios = require('axios');
const crypto = require('crypto');
const postService = require('../service/postService')


const gerenate = function () {
    return crypto.randomBytes(20).toString('hex');
};

test('Should get posts', async () => {
    const post1 = postService.savePost({ title: '', content: '' });
    const response = await axios({
        url: 'hhtp://localhost:3001/post',
        method: 'get'
    });
    const post = response.data;
}); 