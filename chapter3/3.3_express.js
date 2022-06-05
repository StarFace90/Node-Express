const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get(`/`, (req, res) => {
  res.type("text/plain");
  res.send("Welcome HOME");
});

app.get("/about", (req, res) => {
  res.type("text/plain");
  res.send("About My Site");
});

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send(`404 - Not Found`);
});

app.listen(port, () =>
  console.log(
    `http://localhost:${port} 에서 서버가 실행됩니다`,
    "\n",
    `서버 종료시에는 Ctrl + C로 종료해주세요 `
  )
);
