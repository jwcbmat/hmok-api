const express = require('express');
const router = express.Router();

router.use('/', require('./posts'));

module.exports = router;