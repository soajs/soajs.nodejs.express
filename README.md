# soajs.nodejs.express

This repository contains a nodeJs RESTFUL service built using express.

This service contains 2 APIs written in swagger.yml file. 
In addition, the repository contains a soa.js file which provides the configuration to integrate this service with SOAJS.<br><br>

<b><u>APIs</u> :</b><br><br>
<b>API 1</b>: /tidbit/hello method <b>GET</b>: This API returns a message containing your username and last name.<br>
<b>API 2</b>: /tidbit/hello method <b>POST</b>: This API returns a json response. This json response represents the services configuration that was provided by the SOAJS controller to this service at runtime when requests are made to the API.<br><br>

<b><u>Objective</u></b><br><br>
The Objective is to show that you can integrate, activate and deploy any nodeJs express service in SOAJS.<br>
In addition, you can get all the features of SOAJS such as multi-tenancy, multi-security, URAC, custom tenant configuration, Swagger Simulation, ... etc by simply requiring the SOAJS mw and providing it to your express service.

To learn more on how to use it, visit this page: https://soajsorg.atlassian.net/wiki/spaces/EX/pages/62982572/TIDBIT




