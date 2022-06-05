/**
 * ? QA 단위&통합 테스트 : JEST
 *
 * ? JEST 코드 커버리지 : npm test -- --coverage
 */

const express = require("express");
const exHandlebar = require("express-handlebars");
const handlers = require("./lib/handler");

const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", exHandlebar.engine());
app.set("views", "./views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

app.get("/", handlers.home);
app.get("/about", handlers.about);

// custom 404 page
app.use(handlers.notFound);

// custom 500 page
app.use(handlers.severError);

app.listen(port, () =>
  console.log(
    `http://localhost${port}에서 서버가 실행됩니다`,
    "\n",
    `서버 종료시에는 ctrl + c 를 눌러주세요`
  )
);
