require('dotenv').config();
const http = require('http');
const characterCounter = require('./character-counter');

const requestHandler = (request, response) => {
  console.log(request.url);
  const charactersInUrl = characterCounter.countNonSlashCharacters(request.url)
  response.end(`There were ${charactersInUrl} non-slash characters in the url you requested`);
}

const server = http.createServer(requestHandler);

const port = process.env.PORT
server.listen(port, (err) => {
  if (err) {
    return console.error('Something bad happened :(', err);
  }

  console.log(`Server is accepting requests... on port: ${port}`);
})
