const columns = 8;
const rows = 8;
const squareSize = 50;
const squareArray = [];
const battleshipLength = 3;

const fieldOne = document.getElementsByClassName('fieldOne');
const fieldTwo = document.getElementsByClassName('fieldTwo');

//the below 'for' loops are used to create divs for the grid
//I'll eventually combined the two loops into a single function
for (i = 0; i < 64; i++) {
  let square = $('<div></div>');
  square.addClass('square');
  square.attr('id', 'sq' + i);
  $(squareArray).append(square);
  $('.fieldOne').append(square);
}


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

//place shiprandomly on the grid horizontally
function placeHorizontal() {
  let n = randomSquare
  for (let i = 0; i < battleshipLength; i++) {
    let square = $('#sq' + (n + i));
    $(square).addClass('ship');
    console.log(square);
  }
}

//place shiprandomly on the grid vertically
function placeVertical() {
  let n = Math.floor(Math.random() * 64);
  for (let i = 0; i < battleshipLength * 8; i+=8) {
    let square = $('#sq' + (n + i));
    $(square).addClass('ship');
    console.log(square);
  }
}

placeHorizontal();
placeVertical();
