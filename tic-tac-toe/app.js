let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn-reset");
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let newGameBtn = document.querySelector('#btn-new');

let turn_O = true; //player 1 and player 2

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

// MAIN
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(turn_O === true){
            box.innerText = "O";
            box.style.color = "#EE6352";
            turn_O = false;
        }else{
            box.innerText = "X";
            box.style.color = "#F19953";
            turn_O = true;
        }

        box.disabled = true; /**btn can be only clicked once. it will be disabled ance it has been clicked. */
        checkWinner(); /** fn to check winner from the winPattern */
    })
})

// FUNCTIONS
const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner} `;
    msgContainer.classList.remove('hide');
    disableBoxes();

}

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}

const resetGame = () => {
    turn_O = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

