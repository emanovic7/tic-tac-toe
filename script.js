//Define turns
let turn = 0;
let currentGame = 0;

//Define winning combo
const WINNING_COMBOS = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
                        [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

//define rows
const rows = Array.from(document.getElementsByClassName('box'));

//define clicks

let clicked = [
  [false, false, false],
  [false, false, false],
  [false, false, false]
]

// select boxes

function selectBox(e){
  const x = parseInt(this.dataset.x)
  const y = parseInt(this.dataset.y)
  if (clicked[x][y]) return
}




//Reset Game
document.getElementById('Reset').addEventListener('click', resetGame)

function resetGame(){
  document.querySelectorAll('td').empty()
  turn = 0;
  currentGame = 0;
}
