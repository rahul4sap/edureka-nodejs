const http = require('http');
const PORT = 3000; // default port

function handleRequest(req, res) {
    res.writeHead(200,{
        'Content-Type': 'text/plain'
     } ); /*used to set up response code and any HTTP headers*/

     res.end('Hello, it\'s a beautiful day!');
}

const server = http.createServer(handleRequest); /*handleRequest will be called back when any HTTP request comes in*/
const chosenPort = process.env.PORT || PORT;
server.listen( chosenPort, function(err){
    if(err) {
        throw err;
    }
    console.log('Server started and listening on port: ' + chosenPort);
}); 
