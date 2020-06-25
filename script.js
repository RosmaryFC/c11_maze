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

//pass in a string repesenting top, bottom, right, and left style for dot div
function move(direction) {
  let dot = document.querySelector('#dot');  
  console.log("direction: " + direction);
  const addPixels = 160;
  const directionStr = dot.style[direction];
  let directionValue = Number((directionStr.slice(0, directionStr.length - 2 )));
  directionValue += addPixels;
  dot.style[direction] = directionValue + "px";
  console.log("direction updated: " + dot.style[direction]);
  row--;
  index = mazeArr[row][column];
  walls = checkMove(index);
  moveUser();
}

//create button listeners
document.querySelector("#up").onclick = function(e){
  debugger;
  console.log('pressed up btn');
  //moving up so pixels must be added to bottom style
  move('bottom');
  console.log("row: " + row + " column: " + column + " index: " + index +" walls: " + walls );
}

document.querySelector("#right").onclick = function(e){
  debugger;
  console.log('pressed right btn');
  //moving right so pixels must be added to left style
  move('left');
  console.log("row: " + row + " column: " + column + " index: " + index +" walls: " + walls );
}

document.querySelector("#down").onclick = function(e){
  debugger;
  console.log('pressed down btn');
  //moving down so pixels must be added to up style
  move('top');
  console.log("row: " + row + " column: " + column + " index: " + index +" walls: " + walls );  
}

document.querySelector("#left").onclick = function(e){
  debugger;
  console.log('pressed left btn');
  //moving left so pixels must be added to right style
  move('right');
  console.log("row: " + row + " column: " + column + " index: " + index +" walls: " + walls );
}

//todo: add reset() function so after user finished game they can start over
//Todo: add congrats() function for when finish line is reached
//todo: add gameOver() function for when game is over ex: you run out of moves and lose or you finish game.