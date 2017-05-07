'use strict';

var express = require('express');
var app = express();
const soajsMW = require('soajs.nodejs');

app.use(soajsMW({}));

app.get('/hello', function(req, res){
    console.log(req.soajs)
    res.send('hello world express');
});

app.listen(4381);
