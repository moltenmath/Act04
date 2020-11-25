const http = require('http');
const url = require('url');
const queryString = require('query-string');
module.exports = http.createServer((req, res) => {
	var coursOps = require('./controller.js');
  const reqUrl =  url.parse(req.url, true);
	const parsed = queryString.parse(reqUrl.search);
	
  // GET endpoint
  if(reqUrl.pathname == '/api/ModifString/' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.help(req, res);
	

  } else if(reqUrl.pathname == '/api/ModifString/carConsec' && req.method === 'GET'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.caractereConsecutif(req, res, parsed);
	
  
  }
  else if(reqUrl.pathname == '/api/ModifString/caractereConsecutifDebFin' && req.method === 'GET'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.caractereConsecutifDebFin(req, res ,parsed);
	
  
  }
  else {
    // POST endpoint
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.invalidUrl(req, res);
  }
})