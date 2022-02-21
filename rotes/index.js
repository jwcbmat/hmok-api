const express = require('express');
const router = express.Router();

router.use('/', require('./userPost'));

module.exports = router;