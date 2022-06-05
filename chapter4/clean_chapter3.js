/**
 *  TODO: chapter3의 내용을 간결하게 정리
 *  todo : 모듈화
 *  todo : git으로 버전관리
 *
 */

const express = require("express");
const { engine } = require("express-handlebars");
const randomSpeech = require("./lib/goldenSpeech.js");

const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));

app.get("/about", (req, res) => {
  res.render("about", { goldenSpeech: randomSpeech.getSpeech() });
});

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.render("404");
});

app.use((err, req, res, next) => {
  console.error(err.message);
  res.type("text/plain");
  res.status(500);
  res.render("500");
});

app.listen(port, () =>
  console.log(
    `http://localhost${port}에서 서버가 실행됩니다`,
    "\n",
    `서버 종료시에는 ctrl + c 를 눌러주세요`
  )
);
