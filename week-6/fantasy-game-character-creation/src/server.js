const http = require('http');
const url = require('url');

let character = null;
let confirmed = false;

// TODO: Implement your server here

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse the URL and the query parameters
  const path = parsedUrl.pathname  // Get the path
  const query = parsedUrl.query // Get the query parameters as an object 
  // TODO: Implement your routes here
  // Post route for character creation
  if(req.method === "POST" && path === "/create-character") {
    character = {
      class: query.class,
      gender: query.gender,
      fact: query.fact
    };

    confirmed = false;

    res.writeHead(200, {"Content-Type": "text/plain"});
    return res.end("Character have been created.");
  }

  // Post route confirming Character creation 

  if (req.method === "POST" && path === "/confirm-character") {
    if(!character){
      res.writeHead(400, {"Content-Type": "text/plain"});
      return res.end("The user has not created a character yet to confirm.")
    }
    confirmed = true;

    res.writeHead(200, {"Content-Type": "text/plain"});
    return res.end("Character confirmed")
  }

  // GET route for viewing the character

  if (req.method === "GET" && path === "/character") {
    if(!character) {
      res.writeHead(404);
      return res.end("No character has been found.");
    }

    res.writeHead(200, {"Content-Type": "application/json"});
    return res.end(
      JSON.stringify({
        ...character,
      confirmed
    })
    );
  }
res.writeHead(404);
res.end();

});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;