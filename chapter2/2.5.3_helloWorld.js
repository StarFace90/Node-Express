/**
 * * 라우팅 : 클라이언트가 요청한 콘텐츠를 전송하는 메커니즘
 * * 웹 기반 클라이언트/서버 애플리케이션에서 클라이언트는 원하는 콘텐츠를 URL, 즉 경로와 쿼리스트링으로 요청한다
 */

const { read } = require("fs");
const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  //쿼리스트링, 옵션인 마지막 슬래시를 없애고 소문자로 바꿔서 url을 정규화 한다
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  console.log("path는", path);

  switch (path) {
    case "":
      console.log("연결상태:", res.statusCode);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("HomePage");
      break;

    case "/about":
      console.log("연결상태:", res.statusCode);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About");
      break;

    default:
      console.log("연결상태:", res.statusCode);
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      break;
  }
});

server.listen(port, () => console.log(`${port}에서 서버를 실행합니다`));
