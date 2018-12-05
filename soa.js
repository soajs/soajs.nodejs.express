"use strict";
module.exports = {
    "type": "service",
    "prerequisites": {
        "cpu": " ",
        "memory": " "
    },
    "serviceName": "express",
    "serviceGroup": "Custom Services",
    "servicePort": 4381,
    "swagger": true,
    "requestTimeout": 30,
    "requestTimeoutRenewal": 5,
    "serviceVersion": 1,
    "extKeyRequired": true,
    "urac": false,
    "urac_Profile": false,
    "urac_ACL": false,
    "provision_ACL": false,
    "oauth": true,
    "maintenance": {
        "port": {
            "type": "inherit"
        },
        "readiness": "/heartbeat",
    }
};
