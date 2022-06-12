const express = require("express");
const app = express();

app.get("/headers", (req, res) => {
  res.type("text/plain");
  const headers = Object.entries(req.headers).map(
    ([key, value]) => `${key}: ${value}`
  );
  res.send(headers.join("\n"));
});

const port = 3000 || process.env.PORT;
app.listen(port, () =>
  console.log(`http://localhost:${port}/headers 에서 서버가 실행됩니다`)
);

/**
* ? 요청 헤더로 전달되는 정보들 
host: localhost:3000
connection:
sec-ch-ua: 
sec-ch-ua-mobile: 
sec-ch-ua-platform: 
dnt: 
upgrade-insecure-requests: 
user-agent: 
accept: 
sec-fetch-site: 
sec-fetch-mode: 
sec-fetch-user: 
sec-fetch-dest: 
accept-encoding: 
accept-language: 
 */

/**
 * ? 서버노출 취약점 curl -I 'IP 주소 또는 도메인' 을 통해 확인
 * HTTP/1.1 404 Not Found
*! X-Powered-By: Express   : 현재 서버의 서버 버전이나 개발된 기술 등이 노출된다
Content-Security-Policy:
X-Content-Type-Options: 
Content-Type: 
Content-Length: 
Date: 
Connection: 
Keep-Alive:
 */
