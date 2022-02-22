const express = require('express');
const router = express.Router();

router.use('/', require('./posts'));
router.use('/', require('./commentary'));

module.exports = router;