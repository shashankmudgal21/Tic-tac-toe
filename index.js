let GameOver = new Audio("gameover.mp3");
let turn = new Audio("ting.mp3");
let music = new Audio("music.mp3");
let Turn = "X";
let over = false;
const changeTurn = () => {
  return Turn === "X" ? "0" : "X";
};
const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[2]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxTexts[e[0]].innerText + " Won";
      over = true;
      document.getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = Turn;
      Turn = changeTurn();
      turn.play();
      checkWin();
      if (!over)
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + Turn;
    }
  });
});

reset.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".boxText");
  Array.from(boxText).forEach((element) => {
    element.innerText = "";
  });
  Turn = "X";
  over = false;
  if (!over)
    document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
  document.getElementsByTagName("img")[0].style.width = "0px";
});
