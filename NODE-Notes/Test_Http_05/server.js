const http = require("http");

//web server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1> I am Kallol.  </h1>");
    res.end();
  }

  if (req.url === "/source-code") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<p>Source code is available on <a href='https://github.com/kallol'>Github</a></p>"
    );
    res.end();
  }

  if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Have a Project or want to Collaborate?");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
