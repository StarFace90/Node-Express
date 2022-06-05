const goldenSpeech = require("./goldenSpeech");

// 라우트 핸들러 분류

exports.home = (req, res) => res.render("home");

exports.about = (req, res) =>
  res.render("about", { speech: goldenSpeech.getSpeech() });

exports.notFound = (req, res) => res.render("404");

/**
 *  ? express는 매개변수가 4개 있어야 오류 핸들러를 인식하므로
 *  ? next 매개 변수는 사용하지 않더라도 그냥 둬야한다
 * ? 따라서 다음 행에 한해 ES Lint의 no-unused-vars 규칙을 비활성화한다.
 */

/* eslint-disable no-unused-vars */

exports.severError = (err, req, res, next) => res.render("500");

/* eslint-enable no-unused-vars */
