/**
 *  ? puppeteer
 *  ? portfinder : 사용할 수 있는 포트를 찾아주는 유틸
 *
 *
 *   TODO:
 *  todo : 자유로운 포트에서 애플리케이션 서버 시작
 *  todo : 헤드리스 크롬 브라우저에서 페이지를 연다
 *  todo : 애플리케이션 홈페이지로 이동
 *  todo : data-test-id가 "about"인 링크를 찾아 클릭
 *  todo : 링크로 이동할 때 까지 기다린다
 *  todo : /about 페이지에 도착했는지 확인한다
 *
 *
 * */

const portfinder = require("portfinder");
const puppeteer = require("puppeteer");

const app = require("../5.8_express-QA");

let server = null;
let port = null;

beforeEach(async () => {
  port = await portfinder.getPortPromise();
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

test("home page links to about page", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}`);
  //race condition 방지
  await Promise.all([
    page.waitForNavigation(),
    page.click('[data-test-id="about"]'),
  ]);
  expect(page.url()).toBe(`http://localhost:${port}/about`);
  await browser.close();
});
