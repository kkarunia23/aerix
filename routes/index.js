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
const Feed = require('../models/feed.js');
router.get('/', (req, res) => {
    Feed.findOne({ name: "weather" }, (error, feed) => {
        if (error) {
            console.log("error", error);
            res.json({ 'error': 'error 1' });
        }
        console.log("feeds", feed);
        if (url.parse(req.url, true).query.loc !== '' && typeof url.parse(req.url, true).query.loc !== 'undefined') {
            if (feed.isActive) {
                faeris.proxied(req, res);
            }
            else {
                res.json({ 'error': 'error 2' });
            }
        }
        else {
            res.json({ 'error': 'error 3' });
        }
    });
});
router.put('/:id', (req, res) => {
    Feed.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, Player) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/weather'); //redirect to the index page
    });
});
router.get('/', (req, res) => {
    res.json({ '': '' });
});
exports.default = router;
//# sourceMappingURL=index.js.map