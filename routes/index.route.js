'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ name: 'Test', version: '1.0.0' });
});

module.exports = router;
