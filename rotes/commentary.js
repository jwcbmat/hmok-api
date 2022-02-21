const express = require('express');
const router = express.Router();

router.get('/commentary/:postid', (req, res) => {
    res.json({
        content: "im a commentary",
        author: "hmok server"
    }
    )
});

module.exports = router;