const http = require("http");
const fs = require("fs");
const path = require("path");
const fsPromise = require("fs").promises;

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  const extension = path.extname(req.url);
  let contentType;
  let filePath = (contentType =
    "text/html" && req.url == "/"
      ? path.join(__dirname, "views", "index.html")
      : path.join(__dirname, "views", "index.html"));

  const serveFile = async (filePath, contentType, response) => {
    try {
        const data=await fsPromise.readFile(filePath, 'utf-8');
        response.writeHead(200, {'content-type': contentType});
        response.end(data);
    } catch (error) {
      console.error(error);
      response.statusCode = 500;
      response.end();
    }
    
  };

  const fileExists = fs.existsSync(filePath);
  if (fileExists) {
    serveFile(filePath, contentType, res);
  } else {
  }
});

server.listen(PORT, () => console.log(`Server Runing on PORT: ${PORT}`));
