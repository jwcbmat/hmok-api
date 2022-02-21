const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
    res.json({
        title: "my first post",
        content: "im a publication",
        author: "hmok server"
    }
    )
})

module.exports = router;