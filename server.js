
const jsonServer = require('json-server'); // get the package that you've installed 

const server = jsonServer.create();

const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
//
server.listen(port);