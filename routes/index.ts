/*
 * GET home page.
 */
import express = require('express');
const faeris = require('../modules/fetchaeris');
const url = require('url');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/weather', (req: express.Request, res: express.Response) => {
    if (url.parse(req.url, true).query.loc !== '' && typeof url.parse(req.url, true).query.loc !== 'undefined') { 
        faeris.proxied(req, res);
   }else{
        res.json({ 'error': 'error' });
   }
});
router.get('/', (req: express.Request, res: express.Response) => {
    res.json({ '':'' });
});

export default router;