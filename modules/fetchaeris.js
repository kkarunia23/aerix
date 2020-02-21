const request = require("request");
const url = require('url');
const querystring = require('querystring');
const unirest = require("unirest");
const headerAndQuery = function (a) {

    a.query({
        "format": "json",
        "filter": "day",
        "limit": "7",
        "client_id": "EjjYfDIiIVx45IZzhFYyQ",
        "client_secret": "GVyLWYHnYfeocNaOf0SfIWi2DVnXsTXbb5jELU2x",
        "": ""
    });

    a.headers({
        "cache-control": "no-cache",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate",
        "Host": "api.aerisapi.com",
        "Postman-Token": "0d5e9ff7-06e3-479b-a503-0424fb7fc35f,6b3ceeef-a091-4ffe-8cec-0299ac6e0a0c",
        "Cache-Control": "no-cache",
        "Accept": "*/*",
        "User-Agent": "PostmanRuntime/7.19.0"
    });

};
module.exports = {
    
    proxied: function (rt, re) {
        let location = url.parse(rt.url, true).query.loc;
        if (location !== '{ customTagVariable[location] }') {
            let req = unirest("GET", "https://api.aerisapi.com/forecasts/" + location);
            headerAndQuery(req);

            req.end(function (res) {
                if (res.error) {
                    re.json({ 'temperature': 'unavailable' });
                }
//              console.log(res.body.response[0]);
                if (typeof res.body.response[0] !== 'undefined') {
                    re.json({ 'temperature': res.body.response[0].periods[0].maxTempC });
                } else {
                    re.json({ 'temperature': 'unavailable' });
                }
            });
        } else {
            re.json({ 'temperature': 'unavailable' });
        }
    }
};