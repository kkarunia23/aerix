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
        } else {
            res.json({ 'error': 'error 3' });
        }
    });
});

router.put('/:id', (req, res) => {
    Feed.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, Player) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/'); //redirect to the index page
    });

})

router.get('/', (req: express.Request, res: express.Response) => {
    res.json({ '': '' });
});

export default router;