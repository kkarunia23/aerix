/*
 * GET home page.
 */
import express = require('express');
const faeris = require('../modules/fetchaeris');
const url = require('url');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const Feed = require('../models/feed.js');

router.get('/', (req: express.Request, res: express.Response) => {
    Feed.find({}, (error, allFeeds) => {
        if (error) {
            console.log("error", error);
        }
        console.log("feeds", allFeeds);
        res.json(allFeeds);
    });
});

router.put('/:id', (req, res) => {
    console.log('this is' + req.body);

    Feed.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFeed) => {
        res.json(updatedFeed);
    });

});

export default router;