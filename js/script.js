const columns = 8;
const rows = 8;
const squareSize = 50;
const squareArray = [];
const battleshipLength = 3;

const fieldOne = document.getElementsByClassName('fieldOne');
const fieldTwo = document.getElementsByClassName('fieldTwo');

function range(start, stop) {
  let numArray = [];
  for (i = start; i <= stop; i++) {
    numArray.push(i);
  }
  return numArray;
}

function vRange(start, stop) {
  let numArray = [];
  for (i = start; i <= stop; i+=8) {
    numArray.push(i);
  }
}
/*
const horizontalRanges = [range(0, 7), range(8, 15), range(16, 23),
  range(24, 31), range(32, 39), range(40, 47), range(48, 55), range(56, 63)];

const verticalRanges = [vRange(0, 56), vRange(1, 57), vRange(2, 58),
  vRange(3, 59), vRange(4,60), vRange(5, 61), vRange(6, 62), vRange(7, 63)];
*/

//the below 'for' loops are used to create divs for the grid
//I'll eventually combined the two loops into a single function
for (i = 0; i < 64; i++) {
  let square = $('<div></div>');
  square.addClass('square');
  square.attr('id', 'sq' + i);
  $(squareArray).append(square);
  $('.fieldOne').append(square);
}

//This loop creates the grid for second game board
for (i = 0; i < 64; i++) {
  let square = $('<div></div>');
  square.addClass('square');
  square.attr('id', 'sq' + i);
  $(squareArray).append(square);
  $('.fieldTwo').append(square);
}

//this is a place-holder event handler
//currently turns square red, but will be used for strikes
$('.square').click(function() {
  $(this).css('background-color', 'red');
});

//this picks a random square.
//It'll be used to Initialize the game with ship placement
const randomSquare = Math.floor(Math.random() * 64);

//This function ensures the ships don't overflow into another row
function isShipInRangeH() {
  n = Math.floor(Math.random() * 64);
  //console.log(n);
  let c = n % 8;
  //console.log(c);
  if (c + 2 >= 8) {
    //n = Math.floor(Math.random() * 64);
    isShipInRangeH();
  } else {
    placeHorizontal(n);
  }
}

//This function ensures the ships don't overflow off the grid
function isShipInRangeV() {
  n = Math.floor(Math.random() * 48);
  console.log(n);
  let c = n % 8;
  console.log(c);
  if (c + 16 >= 56) {
    //n = Math.floor(Math.random() * 64);
    isShipInRangeV();
  } else {
    placeVertical(n);
  }

}

//place shiprandomly on the grid horizontally
function placeHorizontal(n) {
  //let n = Math.floor(Math.random() * 64);
  for (let i = 0; i < battleshipLength; i++) {
    let square = $('#sq' + (n + i));
    $(square).addClass('ship');
    //console.log(square);
  }
}

//place shiprandomly on the grid vertically
function placeVertical(n) {
  //let n = Math.floor(Math.random() * 64);
  for (let i = 0; i < battleshipLength * 8; i+=8) {
    let square = $('#sq' + (n + i));
    $(square).addClass('ship');
    //console.log(square);
  }
}

isShipInRangeH();
//placeHorizontal();
//placeVertical();
isShipInRangeV();
