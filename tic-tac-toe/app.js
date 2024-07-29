let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn-reset");

let turn_first_player = true; //player 1 and player 2

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked!");

        if(turn_first_player === true){
            box.innerText = "O";
            turn_first_player = false;
        }else{
            box.innerText = "X";
            turn_first_player = true;
        }

        box.disabled = true;

    })
})
