const http = require("http");
const file = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} ${req.method} New Req Received\n`;
  const myurl = url.parse(req.url, true);
  console.log(myurl);
  const method = req.method; 
  file.appendFile("log.txt", log, (err, data) => {
    // switch (req.url) {
    switch (myurl.pathname) {
      case "/":
        if(method == 'GET') res.end()
        // res.end("This is Home Page");
        break;
      case "/about":
        //  res.end("this is about us page");
        const qp = myurl.query;
        res.end(
          "Name: " + qp.username + " ID :" + qp.userid + " cliet :" + qp.client
        );
        break;
      case "/contact-us":
        res.end("this is contact us page");
        break;
      case "/blog":
        res.end("this is blogs page");
      case "/search":
        const secrch = myurl.query.searchQuery;
        res.end(secrch);
      default:
        res.end("This is 404");
    }
  });

  //   console.log(req.headers);
});
myserver.listen(8000, () => console.log("Hello server"));
