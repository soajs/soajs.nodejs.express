"use strict";
module.exports = {

	//required fields

		//required by the infra container deployment
		"type": "service",
		"prerequisites": {
			"cpu": " ",
			"memory": " "
		},

		//required to support swagger simulator and model injection at runtime
		"swagger": true,
		"swaggerFilename": "swagger.yml",
		//basic service information
		"serviceName": "express",
		"serviceGroup": "Custom Services",
		"serviceVersion": 1,
		"servicePort": 4381,
		"requestTimeout": 30,
		"requestTimeoutRenewal": 5,

		//service configuration
		"extKeyRequired": true,
		"oauth": true,
		"session": false,

	//optional fields

		"urac" : false,

		"urac_Profile" : false,
		//req.soajs.uracDriver.getProfile() output

		"urac_ACL" : false,
		//req.soajs.uracDriver.getAcl() output
		//req.soajs.uracDriver.getAclAllEnv() output

		"provision_ACL" : false,
		//req.soajs.tenant.application.acl
		//req.soajs.tenant.application.acl_ell_env
		//req.soajs.tenant.package.acl
		//req.soajs.tenant.package.acl_ell_env


	//computed fields
	"errors": {},
	"schema": {}
};
