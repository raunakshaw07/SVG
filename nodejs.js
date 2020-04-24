const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Build File Path

  let filepath = path.join(
    __dirname,
    "dist",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension of file
  const extname = path.extname(filepath);

  // Initial content Type
  let contentType = "text/html";

  // check ext and set content
  switch (extname) {
    case ".js":
      contentType = "text/javscript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "iamge/jpg";
      break;
  }

  // Read File
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "dist", "error.html"),
          (err, content) => {
            res.writeHead(200, { "content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // Some Server Error
        res.writeHead(500);
        res.end(`Server error : ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server running on port ${port}`));
