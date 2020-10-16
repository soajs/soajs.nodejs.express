'use strict';

let express = require('express');
let app = express();
const soajsMW = require('soajs.nodejs');
const soajsConf = require('./soa.json');

let url = require('url');

app.use(soajsMW(soajsConf));


app.get('/heartbeat', (req, res) => {

    res.send({"status": 1});
});

app.get('/tidbit/hello', (req, res) => {
    let url_parts = url.parse(req.url, true);
    let query = url_parts.query;

    let username = query.username;
    let lastname = query.lastname;

    //updating something in the code
    res.send({
        "message": "Hello, I am an EXPRESS service, you are [" + username + "] and your last name is : [" + lastname + "]"
    });
});

app.post('/tidbit/hello', (req, res) => {

    let response = req.soajs;

    req.soajs.awareness.getHost((host) => {
        response.controller = host;

        if (req.soajs.reg) { // if SOAJS_REGISTRY_API is set and everything went well, reg will be defined
            response.databases = req.soajs.reg.getDatabases();
        }

        res.send(response);
    });

});

app.listen(soajsConf.port);