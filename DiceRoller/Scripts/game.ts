// CreateJS Boilerplate for COMP397


// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas; // Reference to the HTML 5 Canvas element
var stage: createjs.Stage; // Reference to the Stage
var game: createjs.Container;
var dices = ""; //array of dices
var tiles: createjs.Bitmap[] = [];
var diceContainers: createjs.Container[] = []; //containers for 2 dices
var button: objects.Button; // button to roll the dices
var rollResult;

var msg = new createjs.Text("", "35px Arial", "#000000"); //message for user.

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
        dices = rollResult[0] + " - " + rollResult[1];
        console.log(dices);

        for (var tile = 0; tile < 2; tile++) {
            //if (turn > 0) {
            game.removeChild(tiles[tile]);
            //} 
            tiles[tile] = new createjs.Bitmap("/assets/images/" + rollResult[tile] + ".png");
            tiles[tile].x = 110 + (190 * tile);
            tiles[tile].y = 220;

            game.addChild(tiles[tile]);
            console.log(game.getNumChildren());
        }
}

/* When this function is called it determines the betLine results.
e.g. Bar - Orange - Banana */
function Reels() {
    var betLine = [" ", " "];

    betLine[0] = "" + (Math.random() * 6) + 1;
    betLine[1] = "" + (Math.random() * 6) + 1; 
}

function buttonClicked() {
    diceRoll();
    msg.text = "Goodbye!";
}


function main() {

    // instantiate my game container
    game = new createjs.Container();
    game.x = 0;
    game.y = 0;

    stage.addChild(game);

    // This is where all the work happens
    msg = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    game.addChild(msg); // First Child Object that we add to the stage

    //click Button
    button = new objects.Button("/assets/images/click.png", 300, 300);
    button.setScale(120 / 400, 100 / 368);
    game.addChild(button.getImage());

    button.getImage().addEventListener("click", diceRoll);

}



