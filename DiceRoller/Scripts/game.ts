// CreateJS Boilerplate for COMP397


// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas; // Reference to the HTML 5 Canvas element
var stage: createjs.Stage; // Reference to the Stage
var game: createjs.Container;

var tiles: createjs.Bitmap[] = [];
var tileContainers: createjs.Container[] = [];

var diceContainers: createjs.Container[] = []; //containers for 2 dices
var button: objects.Button; // button to roll the dices
var rollResult;

var msg = new createjs.Text("", "35px Arial", "#000000"); //message for user.
var dice = new createjs.Text("", "15px Arial", "#000000"); //message for user.


// FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function init() {

    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas); // Parent Object
    stage.enableMouseOver(20); // Turn on Mouse Over events

    createjs.Ticker.setFPS(60); // Set the frame rate to 60 fps
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}


// GAMELOOP
function gameLoop() {
    stage.update();
}

function diceRoll() {


        // Add Spin Reels code here
        rollResult = Reels();
        

        for (var tile = 0; tile < 2; tile++) {
            //if (turn > 0) {
            game.removeChild(tiles[tile]);
            //} 
            tiles[tile] = new createjs.Bitmap("/assets/images/" + rollResult[tile] + ".png");
            tiles[tile].x = 300 + (110 * tile);
            tiles[tile].y = 100;

            game.addChild(tiles[tile]);

            dice = new createjs.Text(rollResult[tile], "15px Consolas", "#000000");
            game.addChild(dice); // First Child Object that we add to the stage

        }
}

/* When this function is called it determines the betLine results.
e.g. Bar - Orange - Banana */
function Reels() {
    var betLine = [" ", " "];

    betLine[0] = "" + (Math.floor(Math.random() * 6) + 1);
    betLine[1] = "" + (Math.floor(Math.random() * 6) + 1); 

    console.log("betline" + betLine[0] + "-" + betLine[1]);
    return betLine;
}

function buttonClicked() {
    diceRoll();
}


function main() {

    // instantiate my game container
    game = new createjs.Container();
    game.x = 0;
    game.y = 0;

    stage.addChild(game);

    // This is where all the work happens
    msg = new createjs.Text("Welcome to the game rolling the dices", "40px Consolas", "#000000");
    game.addChild(msg); // First Child Object that we add to the stage

    //click Button
    button = new objects.Button("/assets/images/click.png", 300, 300);
    button.setScale(120 / 400, 100 / 368);
    game.addChild(button.getImage());

    button.getImage().addEventListener("click", buttonClicked);

}



