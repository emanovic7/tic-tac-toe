//Define turns
let totalMoves = 0;
let turn = 0;
let currentGame = 0;

//Define winning combo
const WINNING_COMBOS = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
                        [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

//Row & Column Counts

let rowCount = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

let columnCount = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

let diagonalCount = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

//define rows
const rows = Array.from(document.getElementsByClassName('box'))
const turnsDiv = document.getElementById('turn')



//define clicks
let clicked = [
  [false, false, false],
  [false, false, false],
  [false, false, false]
]


//Player Turn

function playerTurn(){
  turn = turn === 0 ? 1 : 0
  turnsDiv.innerHTML = `Player ${currentPlay()} it's your turn!`
}

// select boxes
const boxes = Array.from(document.getElementsByClassName('box'))

boxes.forEach(box => box.addEventListener('click', selectBox))

function selectBox(e){
  const x = parseInt(this.dataset.x)
  const y = parseInt(this.dataset.y)
  if (clicked[x][y]) return

  editHTML(this)
  updateGame(x,y)
}

function updateGame(x,y){
  clicked[x][y] = true
  gameCheck(x,y)

  let win = checkReset(x,y)
  if(!win){
    playerTurn();
  }
}

function checkReset(){
  const winner = checkWin(x, y)
  if (winner || totalMoves >= 9) {
    const message = winner ? `Congrats ${currentPlay()} you win!` : `No winner!`
    turnDiv.innerHTML = message
    // disableAll()
    return true
  }
}

function checkWin(){
  return (rowCount[x][turn] === 3 ||
        columnCount[y][turn] === 3 ||
        diagonalCount[0][turn] === 3 ||
        diagonalCount[1][turn] === 3)
}


function currentPlay(){
  return turn === 0 ? 'O' : 'X'
}

function editHTML(el){
  el.innerHTML = currentPlay();
}

function gameCheck(x,y){
  totalMoves++;
  rowCount[x][turn]++;
  columnCount[y][turn]++;
  diagonalCheck(x,y)
}

function diagonalCheck(x,y){
  if (y===x) diagonalCount[0][turn]++
  if ((y === 2 && x === 0) ||
     (y === 1 && x === 1) ||
     (y === 0 && x === 2)) diagonalCount[1][turn]++
}





//Reset Game
document.getElementById('Reset').addEventListener('click',
  function resetGame(){
    document.querySelectorAll('td').empty()
    turn = 0;
    currentGame = 0;
});

//Save Game
document.getElementById('Save Game').addEventListener('click', saveGame(){
  console.log('game saved!');
})
