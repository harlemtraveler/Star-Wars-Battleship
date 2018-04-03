const playerOne = '';
const playerTwo = '';
const columns = 8;
const rows = 8;
const squareSize = 50;
const square = $('.square');
const squareArray = [];
const battleship = 2;
const cruiser = 1;
const aircraftCarrier = 3;
const vessels = [cruiser, cruiser, cruiser, battleship, battleship, aircraftCarrier];
let playerOneScore = 0;
let playerTwoScore = 0;
let playerTurn = 1;
const fieldOne = $('.fieldOne');
const fieldTwo = $('.fieldTwo');
const winner = '';

//a simple function to add two values
function add(a, b) {
  return a + b;
};

//total points a plaayer must score to win the game
const winningScore = vessels.reduce(add, 0);

//fnction to turn a grid square grey
function turnGrey() {
  $(this).css('background-color', 'grey');
};

//function to turn a gird square red for a positive hit
function hitShip() {
  alert('Direct hit!');
  $(this).css('background-color', 'red');
}

//the below 'for' loops are used to create divs for the grid
//I'll eventually combined the two loops into a single function
function createFieldOne() {
  for (let i = 0; i < 64; i++) {
    let square = $('<div></div>');
    square.addClass('square');
    square.addClass('f1');
    square.attr('id', 'sqOne' + i);
    square.click(turnGrey);
    $(squareArray).append(square);
    $('.fieldOne').append(square);
  }
}
createFieldOne();

//This loop creates the grid for second game board
//for the second field I included a 'T' into the ID (to differ from field One)
function createFieldTwo() {
  for (let i = 0; i < 64; i++) {
    const square = $('<div></div>');
    square.addClass('square');
    square.addClass('f2');
    square.attr('id', 'sqTwo' + i);
    square.click(turnGrey);
    $(squareArray).append(square);
    $('.fieldTwo').append(square);
  }
}
createFieldTwo();

//place shiprandomly on the grid horizontally
//by default, it places the ships in the first field.
//this is because the program finds the first instance of 'sq*'
function placeHorizontal(n, boat) {
  for (let i = 0; i < boat; i++) {
    let square = $('#sqOne' + (n + i));
    $(square).addClass('ship');
    square.click(function(e) {
      e.preventDefault();
      hitShip();
      playerTwoScore += 1;
      $('.second').html(playerTwoScore);
    })
  }
}

//seperate function to place ship in second field
//needed due to field two's unique ID's
function placeHorizontalPlayerTwo(n, boat) {
  for (let i = 0; i < boat; i++) {
    let square = $('#sqTwo' + (n + i));
    $(square).addClass('ship-two');
    square.click(function(e) {
      e.preventDefault();
      hitShip();
      playerOneScore += 1;
      $('.second').html(playerOneScore);
    })
  }
}

//place shiprandomly on the grid vertically
//by default, it places the ships in the first field.
//this is because the program finds the first instance of 'sq*'
function placeVertical(n, boat) {
  for (let i = 0; i < boat * 8; i+=8) {
    let square = $('#sqOne' + (n + i));
    $(square).addClass('ship');
    square.click(function(e) {
      e.preventDefault();
      hitShip();
      playerTwoScore += 1;
      $('.second').html(playerTwoScore);
    })
  }
}

//seperate function to place ship in second field
//needed due to field two's unique ID's
function placeVerticalPlayerTwo(n, boat) {
  for (let i = 0; i < boat * 8; i+=8) {
    let square = $('#sqTwo' + (n + i));
    $(square).addClass('ship-two');
    square.click(function(e) {
      e.preventDefault();
      hitShip();
      playerOneScore += 1;
      $('.second').html(playerOneScore);
    })
  }
}

//This function ensures the ships don't overflow into another row
function isShipInRangeH(boat) {
  n = Math.floor(Math.random() * 64);
  let c = n % 8;
  if (c + 2 >= 8) {
    isShipInRangeH(boat);
  } else {
    placeHorizontal(n, boat);
  }
}
//seperate function for Player two so boyh players-
//do not share same randomized number
function isShipInRangeHPlayerTwo(boat) {
  n = Math.floor(Math.random() * 64);
  let c = n % 8;
  if (c + 2 >= 8) {
    isShipInRangeHPlayerTwo(boat);
  } else {
    placeHorizontalPlayerTwo(n, boat);
  }
}


//This function ensures the ships don't overflow off the grid
function isShipInRangeV(boat) {
  n = Math.floor(Math.random() * 48);
  let c = n % 8;
  if (c + 16 >= 56) {
    isShipInRangeV(boat);
  } else {
    placeVertical(n, boat);
  }
}

//seperate function for Player two so boyh players-
//do not share same randomized number
function isShipInRangeVPlayerTwo(boat) {
  n = Math.floor(Math.random() * 48);
  let c = n % 8;
  if (c + 16 >= 56) {
    isShipInRangeVPlayerTwo(boat);
  } else {
    placeVerticalPlayerTwo(n, boat);
  }
}

//The setBoard function randomly places the-
//ships on the board for both players.
function setBoard() {
  for (i = 0; i <= vessels.length; i++) {
    if (i % 2 === 0) {
      isShipInRangeH(vessels[i]);
      isShipInRangeHPlayerTwo(vessels[i]);
    }
    else if (i % 2 !== 0) {
      isShipInRangeV(vessels[i]);
      isShipInRangeVPlayerTwo(vessels[i]);
    }
  }
};

function checkWinner() {
  if (playerOneScore === winningScore) {
    winner = PlayerOne;
  }
  else if (playerTwoScore === winningScore) {
    winner = PlayerTwo;
  }
  else {
    return;
  }
};

//function to switch players, check for scored point and for winner
function whoseTurn() {
  if (playerTurn % 2 !== 0) {
    $('h1').html('Player 1, Your turn. Choose a target!');
    if ($(this).hasClass('f1')) {
      if ($(this).hasClass('ship')) {
        //hitShip();
        //playerOneScore += 1;
        //$('.first').html(playerOneScore);
        checkWinner();
        whoseTurn();
      }
      else {
        whoseTurn();
      }
    }
    else {
      whoseTurn();
    }
  }
  else {
    //(playerTurn % 2 === 0)
    $('h1').html('Player 2, Your turn. Choose a target!');
    if ($(this).hasClass('f2')) {
      if ($(this).hasClass('ship')) {
        //hitShip();
        //playerTwoScore += 1;
        //$('.second').html(playerTwoScore);
        checkWinner();
        whoseTurn();
      }
      else {
        whoseTurn();
      }
    }
    else {
      whoseTurn();
    }
    }
  //}
};

function startGame() {
  setBoard();
  whoseTurn();
};

startGame();
