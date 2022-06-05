const goldenSpeech = [
  "나는 행운을 굳게 믿는 사람이며, 내가 더 열심히 일할 수록 더 많은 행운이 따르곤 한다.",
  "인생은 과감한 모험이던가, 아니면 아무 것도 아니다.",
  "믿음이 부족하기 때문에 도전하길 두려워하는 바, 나는 스스로를 믿는다.",
  "자신의 능력을 믿어야 한다. 그리고 끝까지 굳세게 밀고 나가라.",
  "내 미래가 어떻게 전개될지는 모르지만, 누가 그 미래를 결정하는지는 압니다.",
  "기회를 찾아야 기회를 만든다.",
];

exports.getSpeech = () => {
  const idx = Math.floor(Math.random() * goldenSpeech.length);
  return goldenSpeech[idx];
};

// getSpeech는 공개 , goldenSpeech의 배열은 외부에 비공개
