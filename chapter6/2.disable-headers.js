// ! 응답헤더에는 서버에 관한 정보가 포함될 때가 많아 보안에 문제가 생길 수 있다
// ! 따라서 보안이 생명인 서버는 이러한 정보를 생략하는 경우가 많고, 가짜 정보를 보내기도 한다

const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;

app.disable("x-powered-by");

app.get("*", (req, res) => {
  res.send(
    `Open Your dev tools and examine yout headers;` +
      `you'll notice there is no x-powered-by-header!`
  );
});

app.listen(port, () =>
  console.log(`http://localhost:${port}에서 서버가 실행됩니다`)
);

/**
 * ? 서버노출 취약점 curl -I 'IP 주소 또는 도메인' 을 통해 확인
* HTTP/1.1 
*! X-Powered-By: Express   : 현재 서버의 서버 버전이나 개발된 기술 등이 노출된다
Content-Security-Policy:
X-Content-Type-Options: 
Content-Type: 
Content-Length: 
Date: 
Connection: 
Keep-Alive:
 */

//? app.disable("x-powered-by") 이후; X-Powered-By의 정보가 사라진 것을 알 수 있다
/**
 * HTTP/1.1 200 OK
Content-Type: 
Content-Length: 
*? ETag:  특정 URL 의 리소스가 변경된다면, 새로운 ETag 가 생성된다. ETag 는 지문과 같은 역할을 하면서 다른 서버들이 추적하는 용도에 이용되기도 한다
Date: 
Connection: 
Keep-Alive:
 */
