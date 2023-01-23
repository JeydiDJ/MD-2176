var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {
  //create web server
  if (req.url == '/') {
    //check the URL of the current request

    //set response header
    res.write(
      <html>
        <body>
          <p>This is Home Page.</p>
        </body>
      </html>
    );
    res.end();
  } else if (req.url == '/student') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      <html>
        <body>
          <p>This is Student Page.</p>
        </body>
      </html>
    );
    res.end();
  } else if (req.url == '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      <html>
        <body>
          <p>This is Admin Page.</p>
        </body>
      </html>
    );
    res.end();
  } else res.end('Invalid Request!');
});

server.listen(5000); //6 - -lsiten for any incoming requests

console.log('Node.js webs server at port 5000 is running..');