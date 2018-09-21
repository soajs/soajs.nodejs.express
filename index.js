'use strict';

//require express
var express = require('express');

//create app from express
var app = express();

//require soajs middleware
const soajsMW = require('soajs.nodejs');

var url = require('url');

//instruct app to use the middleware
app.use(soajsMW({}));


//create api
app.get('/tidbit/hello', function(req, res){
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	
	var username = query.username;
	var lastname = query.lastname;
	
	//return text response
	res.send({
		"message": "Hello DEMO, I am an EXPRESS service, you are [" + username + "] and your last name is : [" + lastname + "]"
	});
});

//create another api
app.post('/tidbit/hello', function (req, res) {
	var response = req.soajs;
	
	//use soajs framework from the request ( offered by the middleware )
	req.soajs.awareness.getHost(function(host){
		response.controller = host;
		
		if(req.soajs.reg){ // if SOAJS_REGISTRY_API is set and everything went well, reg will be defined
			response.databases = req.soajs.reg.getDatabases();
		}
		
		//return a response that contains the configuration passed on to this microservice
		res.send(response);
	});
});

app.listen(4381);