const columns = 8;
const rows = 8;
const squareSize = 50;
const squareArray = [];

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
