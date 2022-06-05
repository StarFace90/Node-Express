const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// custom 404 page
app.use((req, res) => {
  res.type("text/plain"); // Content-Type 헤더 설정하는 편의 메서드
  res.status(404);
  res.send("404 - Not Found");
});

app.use((err, req, res, next) => {
  console.error(err.message);
  err.cause;
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server Error");
});

app.listen(port, () => console.log(`포트 ${port}에서 서버가 실행됩니다`));
