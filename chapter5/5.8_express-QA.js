// 모듈

const express = require("express");
const exHandlebar = require("express-handlebars");
const handlers = require("./lib/handler");

const app = express();
const port = process.env.PORT || 3000;

// handleBars 템플릿

app.engine("handlebars", exHandlebar.engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

// 라우터

app.get("/", handlers.home);
app.get("/about", handlers.about);

// custom 404 page
app.use(handlers.notFound);

// custom 500 page
app.use(handlers.severError);

// require.main이 전역 module과 일치한다면 노드에서 자바스크립트 파일을 직접 실행한 경우
// 그렇지 않다면 다른 스크립트로 임포트 된 경우
if (require.main === module) {
  app.listen(port, () => {
    console.log(
      `http://localhost${port}에서 서버가 실행됩니다!`,
      "\n",
      `서버 종료시에는 ctrl + c 를 눌러주세요`
    );
  });
} else {
  module.exports = app;
}
