const next = require('next');
const express = require('express');
const routes = require('next-routes')();
const fs = require('fs');
const https = require('https');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 80;
const app = next({ dev });
const handler = routes.getRequestHandler(app);

routes.add('/talks/:talkKey', 'talks');

var sslOption ={
	key: fs.readFileSync('../key/elianaai.key'),
	cert: fs.readFileSync('../key/4fa581949f17aaa.crt')
}

app.prepare().then(() =>{
const server = express();
var http = require('http');
server.use(handler);
http.createServer(server).listen(80);
https.createServer(sslOption, server).listen(443);
});
/*
server.get('/', function(req, res){
	res.status(200).send("This is aaa https");
});
*/

/*
app.prepare().then(() => {
  const server = express();
  server.use(handler);
  server.listen(3000);
});

*/

