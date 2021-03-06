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
let playerTurn = 0;

const fieldOne = $('.fieldOne');
const fieldTwo = $('.fieldTwo');

//fnction to turn a grid square grey
function turnGrey() {
  $(this).css('background-color', 'grey');
};

//the below 'for' loops are used to create divs for the grid
//I'll eventually combined the two loops into a single function
function createFieldOne() {
  for (let i = 0; i < 64; i++) {
    let square = $('<div></div>');
    square.addClass('square');
    square.attr('id', 'sq' + i);
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
    square.attr('id', 'sqT' + i);
    square.click(turnGrey);
    $(squareArray).append(square);
    $('.fieldTwo').append(square);
  }
}
createFieldTwo();

//function to turn a gird square red for a positive hit
function hitShip() {
  alert('Direct hit!');
  $(this).css('background-color', 'red');
}
/*
//this is a place-holder event handler
//currently turns square grey to represent misses.
function emptySquare() {
  $('.square').click(turnGrey);
}
*/
//the below function is for successful strikes on a ship.
//this prevents the default behavior from the click event (grey square for misses).
//instead it changes the color to red and increments player's score.
function occupiedSquare() {
  $('.square').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('ship')) {
      hitShip();
      playerTwoScore += 1;
      $('.second').html(playerTwoScore);
    }
    else if ($(this).hasClass('ship-two')) {
      hitShip();
      playerOneScore += 1;
      $('.first').html(playerOneScore);
    }
  })
};
//place shiprandomly on the grid horizontally
//by default, it places the ships in the first field.
//this is because the program finds the first instance of 'sq*'
function placeHorizontal(n, boat) {
  for (let i = 0; i < boat; i++) {
    let square = $('#sq' + (n + i));
    $(square).addClass('ship');
  }
}
//seperate function to place ship in second field
//needed due to field two's unique ID's
function placeHorizontalPlayerTwo(n, boat) {
  for (let i = 0; i < boat; i++) {
    let square = $('#sqT' + (n + i));
    $(square).addClass('ship-two');
  }
}

//place shiprandomly on the grid vertically
//by default, it places the ships in the first field.
//this is because the program finds the first instance of 'sq*'
function placeVertical(n, boat) {
  for (let i = 0; i < boat * 8; i+=8) {
    let square = $('#sq' + (n + i));
    $(square).addClass('ship');
  }
}

//seperate function to place ship in second field
//needed due to field two's unique ID's
function placeVerticalPlayerTwo(n, boat) {
  for (let i = 0; i < boat * 8; i+=8) {
    let square = $('#sqT' + (n + i));
    $(square).addClass('ship-two');
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
/*
//This will be the primary function to start and play the game.
function whoseTurn() {
  //let playerTurn = 0;
  playerTurn += 1;
  if (playerTurn % 2 === 0) {
    console.log('test1');
    console.log(playerTurn);
    //alert('Player 2, Your turn. Choose a target!');
    $('h1').html('Player 2, Your turn. Choose a target!');
    $('.square').on('click', function(e) {
      if($(e.target).is('.square')) {
        //playerTurn += 1;
        whoseTurn();
        //switch players
      }
    })
  }
  else if (playerTurn % 2 !== 0) {
    console.log('test2');
    console.log(playerTurn);
    //alert('Player 1 Your turn. Choose a target!');
    $('h1').html('Player 1, Your turn. Choose a target!');
    console.log('test3');
    console.log(playerTurn);
    $('.square').on('click', function(e) {
      if($(e.target).is('.square')) {
        //playerTurn += 1;
        whoseTurn();
        //switch players
      }
    })
  }
};
*/
/*
function whoseTurn() {
  playerTurn += 1;
  if (playerTurn % 2 === 0) {
    $('h1').html('Player 2, Your turn. Choose a target!');
    $('.square').on('click', function(e) {
      if($(e.target).is('.square')) {
        //square.off('click', '.square', emptySquare);
        //square.off('click', '.square', occupiedSquare);
        console.log('test1');
        whoseTurn();
      }
    })
  }
  else if (playerTurn % 2 !== 0) {
    $('h1').html('Player 1, Your turn. Choose a target!');
    $('.square').on('click', function(e) {
      if($(e.target).is('.square')) {
        //square.off('click', '.square',emptySquare,);
        //square.removeEventListener('click', occupiedSquare);
        console.log('test2');
        whoseTurn();
      }
    })
  }
}
*/









function startGame() {
  //emptySquare();
  //occupiedSquare();
  setBoard();
  whoseTurn();
};


startGame();
