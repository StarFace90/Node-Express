const handlers = require("../handler"); // 테스트할 코드를 임포트

// 홈페이지가 렌더링되는게 확실한지 테스트
test("home page renders", () => {
  const req = {}; // 요청 객체를 테스트 할 필요 없으므로 빈 객체
  const res = { render: jest.fn() }; // 렌더링 메서드 필요 jest.fn(): 어떻게 호출됐는지 추적
  handlers.home(req, res);
  expect(res.render.mock.calls.length).toBe(1); // 함수가 한번만 호출되었는지 추적
  expect(res.render.mock.calls[0][0]).toBe("home"); // 전달받은 매개변수 중 첫번째  = home
});

// 다른 라우트에 대한 테스트 추가

test("about page renders with golden Speech", () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.about(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("about");
  // 최소한 한글자 이상의 문자열로 이루어진 두 번째 매개변수가 있다
  expect(res.render.mock.calls[0][1]).toEqual(
    // 예상 속성과 재귀 적으로 일치하는 수신 된 개체와 일치
    expect.objectContaining({
      // 예상 문자열 또는 정규식과 일치하는 문자열 인 경우 수신 된 값과 일치
      speech: expect.stringMatching(/\W/),
    })
  );
});

test("404 handler renders", () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.notFound(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("404");
});

test("500 handler render", () => {
  const err = new Error("some error");
  const req = {};
  const res = { render: jest.fn() };
  const next = jest.fn();

  handlers.severError(err, req, res, next);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("500");
});
