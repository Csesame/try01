const odaiArray = [
  "宇宙人が地球を訪れた時に最初に言った一言は？",
  "進化の結果、猫が新しく手に入れた能力とは？",
  "インターネットが突如消えた後、新しく流行った人間のコミュニケーション方法は？",
  "ペンギンが南極を出て最初に旅行した先はどこ？",
  "未来のオリンピックで追加される新種目とは？",
  "ロボットが人間の仕事を全て奪った後、彼らが楽しむ新しい趣味とは？",
  "世界中のチョコレートが突然変わってしまった！何に変わった？",
  "突如、全ての動物がしゃべれるようになった。犬が最初に飼い主に頼んだことは？",
  "未来のスマホの意外な新機能とは？",
  "タイムマシンで過去に行ったら、恐竜が人々と一緒に何をしていた？",
];

const odaiContainer = document.getElementById("odai-container");
const odaiText = document.getElementById("odai-text");

// ランダムな大喜利を取得
function getRandomOdai() {
  const randomIndex = Math.floor(Math.random() * odaiArray.length);
  return odaiArray[randomIndex];
}

// ランダムな大喜利を表示
function displayRandomOdai() {
  const randomOdai = getRandomOdai();
  odaiText.textContent = randomOdai;
}

// ページが読み込まれたときにランダムな大喜利を表示
displayRandomOdai();
