//shows where walls are (TRouBLe format)
//t = top, r = right, b = bottom, l = left
 const mazeArr = [
  ['tl', 'tr', 'tl', 't', 'tb', 'rb'],
  ['rl', 'bl', 'rb', 'rl', 'tbl', 'tr'],
  ['bl', 't', 'tr', 'bl', 'tr', 'rl'],
  ['tl','rb', 'bl', 'trb', 'bl', 'r' ],
  ['l', 'tb', 'tb', 'tb', 'tb', 'rb']
]

// if user can move: up, right, left, down (TRouBLe format) ex: t[up,right,left,down];
 const wallsObj = { 
   t:[false, true, true, true],
   b:[true,true, false, true],
   l:[true, true, true, false],
   r:[true, false, true, true],
   bl:[true, true, false, false],
   tl:[false, true, true, false],
   rl:[true, false, true, false],
   rb:[true, false, false, true],
   tr:[false, false, true, true],
   tb:[false, true, false, true],
   trb:[false, false, false, true],
   tbl:[false, true, false, false],
   rbl:[true, false, false, false],
   trl:[false, false, true, false]
}

//current position
let row = 4;
let column = 0;
let initPosition = true;
let index = mazeArr[row][column]; // position in mazeArr
let walls = checkMove(index); // walls at position
//final position
const finalPositionRow = 0;
const finalPositionColumn = 5;
let isNotFinished = true; //if game is not finished

//returns an array of of four booleans that determine whether user can move up, right, down, or left
function checkMove(position){
  return wallsObj[position];
}

//moves user position in array (TRouBLe format)
// Every time user moves, all buttons dissapear and buttons reappear based on move
function moveUser(){
  /*down = row + 1, up = row -1, left = column -1, right = row + 1 */
  //make buttons invisible for unmovable positions
  let upButton = document.querySelector("#up");
  upButton.style.display='none';
  let leftButton = document.querySelector("#left");
  leftButton.style.display='none';
  let rightButton = document.querySelector("#right");
  rightButton.style.display='none';
  let downButton = document.querySelector("#down");
  downButton.style.display='none';
  console.log("hide all buttons");
  console.log("walls: " + walls);
  //todo: moves user in array
  if(walls[0]){ // can move up
    //todo: enable up button up/ move 
    upButton.style.display = 'inline-block';
    console.log("show up btn");
  }
  if(walls[1]){ // can move right
    //todo: enable right button / move right
    rightButton.style.display = 'inline-block';
        console.log("show right btn");

  }
  if(walls[2]){ // can move down
    //todo: enable bottom button / move bottom
    downButton.style.display = 'inline-block';
    console.log("show down btn");
  }
  if(walls[3]){ // can move left
    //todo: enable left button / move left
    leftButton.style.display = 'inline-block';
    console.log("show left btn");
  }

}

//current css position of the dot div
let above = document.querySelector('#dot').style.top;
let left = document.querySelector('#dot').style.left;
let bottom = document.querySelector('#dot').style.bottom;
let right = document.querySelector('#dot').style.right;

//moves user position in array
//move up function
function moveUp() {
bottom+= 160;
let dot = document.querySelector('#dot');
dot.style.bottom = bottom + "px";
row--;
index = mazeArr[row][column];
walls = checkMove(index);
}
//move right function
function moveRight() {
left+= 160;
let dot = document.querySelector('#dot');
dot.style.left = left + "px";
column++;
index = mazeArr[row][column];
walls = checkMove(index);
}
//move down function
function moveDown() {
above+= 160;
let dot = document.querySelector('#dot');
dot.style.top = above + "px";
row++;
index = mazeArr[row][column];
walls = checkMove(index);
}
//move left function
function moveLeft() {
right+= 160;
let dot = document.querySelector('#dot');
dot.style.right = right + "px";
column--;
index = mazeArr[row][column];
walls = checkMove(index);
}


//loop to run game and countdown moves
//todo : add the game functions to the loop
   let movesLeft = 20;
   document.querySelector('#moves-remaining').textContent = movesLeft;

  // while (isNotFinished) {
  //   playGame();
  //   console.log(movesLeft);
  //   if (row === 0 && column === 5) {
  //     document.querySelector('#moves-remaining').textContent = 'You made it to the end, Congratulations!';
  //     isNotFinished === false;
  //     break;
  //  } else if (movesLeft <= 0) {
  //     document.querySelector('#moves-remaining').textContent = 'You ran out of moves!';
  //     break;
  //   }
  // }




//function to play the game
//function playGame() {
//create button listeners
document.querySelector("#up").onclick = function(e){
  debugger;
  console.log('pressed up btn');
  moveUp();
  moveUser();
  movesLeft--;
  document.querySelector('#moves-remaining').textContent = movesLeft;
  console.log("row: " + row + " column: " + column + " index: " + index +" walls: " + walls + " moves: " + movesLeft);
}

document.querySelector("#right").onclick = function(e){
  debugger;
  console.log('pressed right btn');
  moveRight();
  moveUser();
  movesLeft--;
  document.querySelector('#moves-remaining').textContent = movesLeft;
  console.log("row: " + row + " column: " + column + " index: " + index +" walls: " + walls + " moves: " + movesLeft);
}

document.querySelector("#down").onclick = function(e){
  debugger;
  console.log('pressed down btn');
  moveDown();
  moveUser();
  movesLeft--;
  document.querySelector('#moves-remaining').textContent = movesLeft;
  console.log("row: " + row + " column: " + column + " index: " + index +" walls: " + walls + " moves: " + movesLeft);  
}

document.querySelector("#left").onclick = function(e){
  debugger;
  console.log('pressed left btn');
  moveLeft();
  moveUser();
  movesLeft--;
  document.querySelector('#moves-remaining').textContent = movesLeft;
  console.log("row: " + row + " column: " + column + " index: " + index +" walls: " + walls + " moves: " + movesLeft);
}
//}

//todo: add reset() function so after user finished game they can start over
//Todo: add congrats() function for when finish line is reached
//todo: add gameOver() function for when game is over ex: you run out of moves and lose or you finish game.