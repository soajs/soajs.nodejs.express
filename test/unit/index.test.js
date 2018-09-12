"use strict";

var assert = require("assert");
var shell = require('shelljs');
var sampleData = require("soajs.mongodb.data/modules/nodejs");

var request = require("request");

var express = require('express');

var soajsNodejsExpress;
var controller;

var extKey = "aa39b5490c4a4ed0e56d7ec1232a428f771e8bb83cfcee16de14f735d0f5da587d5968ec4f785e38570902fd24e0b522b46cb171872d1ea038e88328e7d973ff47d9392f72b2d49566209eb88eb60aed8534a965cf30072c39565bd8d72f68ac";

var helper = require("../helper.js");

function requester(apiName, method, params, cb) {
	var options = {
		uri: 'http://127.0.0.1:4000/tidbit/' + apiName,
		headers: {
			key: extKey,
			'Content-Type': 'application/json'
		},
		json: true
	};
	
	if (params.headers) {
		for (var h in params.headers) {
			if (Object.hasOwnProperty.call(params.headers, h)) {
				options.headers[h] = params.headers[h];
			}
			else {
				
			}
		}
	}
	
	if (params.form) {
		options.body = params.form;
	}
	
	if (params.qs) {
		options.qs = params.qs;
	}
	
	request[method](options, function (error, response, body) {
		assert.ifError(error);
		assert.ok(body);
		return cb(null, body);
	});
}

describe("Testing soajs.nodejs.express", function () {
	
	before(function (done) {
		shell.pushd(sampleData.dir);
		shell.exec("chmod +x " + sampleData.shell, function (code) {
			assert.equal(code, 0);
			shell.exec(sampleData.shell, function (code) {
				assert.equal(code, 0);
				shell.popd();
				done();
			});
		});
	});
	
	before(function (done) {
		
		controller = require("soajs.controller");
		
		// fake maintenance port
		var app = express();
		app.get('/heartbeat', function (req, res) {
			res.send('Alive');
		});
		app.listen(5381);
		
		setTimeout(function () {
			process.env.SOAJS_REGISTRY_API = '127.0.0.1:5000';
			soajsNodejsExpress = helper.requireModule('./index');
			
			setTimeout(function () {
					done();
			}, 1000);
		}, 1000);
	});
	
	it("success - get express api", function (done) {
		var params = {
			qs: {
				"username": "hanna",
				"lastname": "daher"
			}
		};
		
		requester('tidbit/hello', 'get', params, function (error, body) {
			assert.ok(body.message);
			done();
		});
	});
	
	it("success - post express api with soajs obj and registry", function (done) {
		var params = {
			qs: {}
		};
		
		requester('tidbit/hello', 'post', params, function (error, body) {
			assert.equal(body.tenant.id, '10d2cb5fc04ce51e06000001');
			assert.equal(body.databases.provision.name, 'core_provision');
			
			done();
		});
	});
});