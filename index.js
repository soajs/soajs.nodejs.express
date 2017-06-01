'use strict';

var express = require('express');
var app = express();
const soajsMW = require('soajs.nodejs');

var url = require('url');

app.use(soajsMW({}));

app.get('/tidbit/hello', function(req, res){
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
    
    var username = query.username;
    var lastname = query.lastname;
    
    res.send({
	    "message": "Hello, I am an EXPRESS service, you are ["+username+"] and your last name is : ["+lastname+"]"
    });
});

app.post('/tidbit/hello', function(req, res){
	res.send(req.soajs);
});

app.listen(4381);
