/**
 * ? 책에서 사용하는 handlebar뷰 템플릿은 @3버전이지만 최신버전은 @6이므로 최신버전을 사용한다
 * * 책에서는 사용하지 않는 함수들도 더러 발생
 */

const express = require("express");
const exHandlebar = require("express-handlebars");

const app = express();
const port = process.env.PORT || 3000;

//? 핸들바 뷰 엔진 설정

//기존 @3버전
// app.engine(
//   "handlebars",
//   exHandlebar({
//     defaultLayout: "main",
//   })
// );
// app.set("view engine", "handlebars");

//6@버전

app.engine("handlebars", exHandlebar.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/about", (req, res) => res.render("about"));

// custom 404 page
app.use((req, res) => {
  res.type("text/plain"); // Content-Type 헤더 설정하는 편의 메서드
  res.status(404);
  res.render("404");
});

// custom 505
app.use((err, req, res, next) => {
  console.error(err.message);
  res.type("text/plain");
  res.status(500);
  res.render("500");
});

app.listen(port, () =>
  console.log(
    `http://localhost:${port} 에서 서버가 실행됩니다`,
    "\n",
    `서버 종료시에는 Ctrl + C로 종료해주세요 `
  )
);
