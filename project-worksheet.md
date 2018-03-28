# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable |
|---|---|
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

This will be based on the popular classic game Battleship. However, there will be a spin on it. For the theme, it will be Star Wars based. Instead of sea based ships, it will be starships. Instead of water, it will be space and asteroids. Besides the asthetic, the game mechanics will be the same.

## Wireframes

Include images of your wireframes.

https://imgur.com/a/mISXJ

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

[+] Ship placement function (described in detail below in 'Game Initialization')
[+] How to identify the current user turn
[+] The turn based grid square selections
[+] How to identify a winner
[+] A form to store the user's name
[+] Sprites for ship representation and strike animation
[+] Implement a time based game feature along with recoded scores for each user



## Game Components
[+] functions
  <> shipPlacement()
  <> whoseTurn()
  <> winner()
[+] Sprites

### Landing Page
What will a player see when they start your game?

—Form Completion—

[+] The user is greeted with the splash screen at the beginning of the program.
[+] There are set of buttons that the user can chose from
New Game
Continue
Quit
Settings
[+] Selecting one of the buttons will perform one of the filling actions:

—New Game—

[+] Once selected, it will populate a form for the user to complete, which will require boxes to be filled out with the following information:
Name
Pick a side (Empire or The Rebellion)

—Continue—

[+] Will continue from the last saved state of the previous game played

—Quit—

[+] Will exit the program

—Settings—

[+] To adjust features such as
amount of ships-
volume


### Game Initialization
What will a player see when the game is started?

—Initializing Game Play—

[+] There will be a <h1> heading informing Player 1 to make the first move
[+] Player 1 will be situated on the left side of the screen
[+]There will be a vertical list of images for each user of their remaining ships.
[+] Once a ship is destroyed, its image will be removed from the list
[+] There will also be to vertical rectangle gridded section for each player (There will be a 3D affect to make it seem you are looking onto the field from a ship.)
[+] The object of the game is to select grid squares on your opponents grid until you destroy their entire fleet.

—Ship Placement—
[+] There will be a randomized function the picks a random square within the range of the grid, then extends the specified amount of squares within the grid to accommodate the rest of the ship (The program will first detect that if it extends the remaining squares for the ship, it won’t overflow over the grid. If it does, the it will instead extend in the opposite direction.)
[+] The function will alternate between place a ship horizontally and vertically.
[+] The same mechanic that ensures the ships do not overflow over the grid will ensure that the ships do not overlap each other (If it does initially find a random position that would overlap an existing ship, then it will just find another random space on the board and begin the process again.)


### Playing The Game
What will be the flow of the game, what will the user be expected to do and what will the user expect from the Game

—Decision—

IF HIT
———
[+]The selected grid square is highlighted to show selection
[+] The user in turn is notified of a successful selection	through an Alert.
[+] A Explosion Sprite is paced on the targeted grid square to illustrate a successful strike
[+] The selected square is then greyed out to show it has been used
[+] The players score is increased
[+] The opponent is notified of a strike on their fleet.
[+] ***Optionally points are deducted from the opponents score.***
[+] The ‘Turn' variable is incremented and and it’s the next players turn.

IF MISS
[+]The selected grid square is highlighted to show selection
[+] The user in turn is notified of a unsuccessful selection	through an Alert.
[+] A Splash Sprite is paced on the targeted grid square to illustrate a miss.
[+] The selected square is then greyed out to show it has been used
[+] The players score is unaffected
[+] The ‘Turn' variable is incremented and and it’s the next players turn.


—BONUS MODE—

[+] If time permits, there can be a time based game implemented.
[+] The users score will be kept throughout the game.
[+] There will be a timer displayed at the top of the gameplay screen, below the <h1> header.
[+] So the users can play for time.
[+] This enables the possibility of a draw or tie.
[+] The users score will be the primary factor in determining a winner.
[+] However, if the scores are equal to one another, then it’ll be a draw.

### Winning The Game
What does it look like when the game ends, what determines winning or losing?

—End Of Game—

IF WIN
[+] If you successfully sing your opponents entire fleet, then an alert will populate to inform you of your win.
[+] Game play will cease.
[+] The entire board will be revealed, to show the position of the remaining ships.

IF LOSS
[+] The user will be alerted with a message that they have been defeated.
[+] An extremely sad face image will populate to rub it in a little more.


### Game Reset
How will the user restart the game once it has been completed.

## MVP

Include the full list of features that will be part of your MVP

[+] shipPlacement function
[+] turn function to identify whose turn it is (playerOne or playerTwo)
[+] function to identify a winner

## POST MVP

Include the full list of features that you are considering for POST MVP

[+] Sprites for animation
[+] A time based game MODE
[+] a scoreboard to recode the top player scores
## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Component 1 | H | 10hrs| 12hrs | 12hrs |
| Total |  | 10hrs| 12hrs | 12hrs |

| shipPlacement()| H | 10 | :---: | :---: |
| whoseTurn()| H | 3 | :---: | :---: |
| winner()| H | 2 | :---: | :---: |
| Sprites)| L | 3 | :---: | :---: |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
