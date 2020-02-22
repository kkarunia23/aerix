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
    Feed.find({}, (error, allFeeds) => {
        if (error) {
            console.log("error", error);
        }
        console.log("feeds", allFeeds);
        res.json(allFeeds);
    });
});
router.get('/createfeeds', (req, res) => {
    // Feed.create({ name: "weather", isActive: true }, (error, createdFeed) => {
    //     console.log("created feed", createdFeed);
    // });
});
exports.default = router;
//# sourceMappingURL=feed.js.map