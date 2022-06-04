/**
 * * 정적자원 전송 (html과 로고 이미지 전송)
 */

const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

function serveStaticFile(res, path, contentType, responseCode = 200) {
  let nav = `${__dirname + path}`;
  console.log(nav);
  fs.readFile(nav, "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("500 - Internal Error");
    }
    res.writeHead(responseCode, console.log("응답코드", responseCode), {
      "Content-Type": contentType,
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  console.log("path는", path);

  switch (path) {
    case "":
      serveStaticFile(res, "/public/home.html", "text/html");
      console.log("연결상태:", res.statusCode);
      break;

    case "/about":
      console.log("연결상태:", res.responseCode);
      serveStaticFile(res, "/public/about.html", "text/html");
      break;

    case "/imgs/logo.png":
      console.log("연결상태:", res.responseCode);
      serveStaticFile(res, "/public/imgs/logo.jpeg", "image/jpeg");
      break;

    default:
      console.log("연결상태:", res.responseCode);
      serveStaticFile(res, "/public/404.html", "text/html", 404);
      break;
  }
});

server.listen(port, () => console.log(`${port}에서 서버가 실행됩니다`));
