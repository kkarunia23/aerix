"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
const express = require("express");
const faeris = require('../modules/fetchaeris');
const url = require('url');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/weather', (req, res) => {
    if (url.parse(req.url, true).query.loc !== '' && typeof url.parse(req.url, true).query.loc !== 'undefined') {
        faeris.proxied(req, res);
    }
    else {
        res.json({ 'error': 'error' });
    }
});
router.get('/', (req, res) => {
    res.json({ '': '' });
});
exports.default = router;
//# sourceMappingURL=index.js.map