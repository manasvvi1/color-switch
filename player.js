var Player = document.getElementById("ball");
var hurdle = document.getElementById("circle");
var coin = document.getElementById("coin");
var colorChanger = document.getElementById("colorChange");
var displayScore = document.getElementById("scoreDisplay");
var displayGame = document.getElementById("gamePage");
var displayHome = document.getElementById("home");

var colors = ["redC", "yellowC", "blueC", "greenC"];
var hurdlescolor = ["redcon", "yellowcon", "greencon", "bluecon"];

var startColor = colors[Math.floor(Math.random() * colors.length)];
var w = window.innerWidth;
var h = window.innerHeight;
var score = 0;
var updatedScore = 0;
var isColorChanged = 0;

var positionY = 500;
var hurdlepositionY = 20;
var hurdleColorIndex = Math.floor(Math.random() * colors.length);

function Loading() {
    document.getElementById("gameOver").style.visibility = "hidden";
    displayHome.style.visibility = "hidden";
    displayGame.style.visibility = "visible";
    coin.style.visibility = "visible";
    colorChanger.style.visibility = "visible";
    document.getElementById("HowToPlay").style.visibility = "hidden";

    document.getElementById("gameOver").style.visibility = "hidden";
    displayScore.style.visibility="visible";
    displayScore.innerHTML="Score : 0";


    colorChanger.style.top = "100px";
    score = 0;
    positionY = 500;
    hurdlepositionY = 20;
    isColorChanged = 0;
    updatedScore = 0;

    Player.classList.add(startColor);
    hurdle.classList.add(hurdlescolor[hurdleColorIndex]);
    //console.log("loaded" + window.positionY);

    Player.style.top = String(window.positionY).concat("px");
    // console.log(Player.style.top);
    hurdle.style.top = String(window.hurdlepositionY).concat("px");
    coin.style.top = String(window.hurdlepositionY + 125 - 15).concat("px");
    console.log(window.score);

    displayScore.innerHTML = "Score : 0";
}

function changecolor() {
    if (displayGame.style.visibility == "visible") {
        Player.classList.remove(startColor);
        var newColor = Math.floor(Math.random() * colors.length);
        if (colors[newColor] == startColor) {
            if (newColor == 0) {
                startColor = colors[newColor + 1]
            }
            else {
                startColor = colors[newColor - 1];
            }
        }
        else {
            startColor = colors[newColor];
        }
        Player.classList.add(startColor);
        console.log("color changed");
    }
}

function update() {
    if (displayGame.style.visibility == "visible") {
        window.positionY += 0.4;
        if (window.positionY > window.innerHeight) {
            //window.positionY = 500;
            document.getElementById("gameOver").style.visibility = "visible";
            setTimeout(() => {displayGame.style.visibility = "hidden"; displayHome.style.visibility = "visible"; displayScore.style.visibility = "visible"; coin.style.visibility = "hidden"; colorChanger.style.visibility = "hidden";}, 1000);
            setTimeout(() => {document.getElementById("gameOver").style.visibility = "hidden"; displayScore.style.visibility="hidden"}, 2000);
        }
         if (window.positionY < 2) {
            window.positionY = 2;
        }

        Player.style.top = String(window.positionY).concat("px");
        window.hurdlepositionY += 0.2;
        hurdle.style.top = String(window.hurdlepositionY).concat("px");
        coin.style.top = String(window.hurdlepositionY + 125 - 15).concat("px");

        if (window.hurdlepositionY >= 750) {
            coin.style.visibility = "visible";
            colorChanger.style.visibility = "visible";
            colorChanger.style.top = "100px";
            window.hurdlepositionY = -250;
            window.updatedScore = 0;
            colorChanger.style.visibility = "visible";
            window.isColorChanged = 0;
        }

        // if((coin.style.top==Player.style.top) && (coin.style.visibility == "hidden")){
        //     coin.style.visibility = "hidden";
        //     window.score += 1;
        //     console.log("Score Updated to "+window.score);
        // }

        if ((window.positionY <= 100) && (window.isColorChanged == 0)) {
            colorChanger.style.visibility = "hidden";
            window.isColorChanged = 1;
            // colorChanger.style.top = "88119px";
            changecolor();
        }
    }
}

setInterval(function () {
     update();
 }, 1);

setInterval(function () {
    hurdle.classList.remove(hurdlescolor[hurdleColorIndex]);
    // hurdleColor = hurdlescolor[Math.floor(Math.random() * colors.length)];

    if (hurdleColorIndex < 3) {
        hurdleColorIndex++;
    }
    else {
        hurdleColorIndex = 0;
    }

    hurdle.classList.add(hurdlescolor[hurdleColorIndex]);
}, 1000
)

function canJump() {
    if (displayGame.style.visibility == "visible") {
        window.positionY -= 60;
        Player.style.top = String(window.positionY).concat("px");
        // window.hurdlepositionY += 23;
        // hurdle.style.top = String(window.hurdlepositionY).concat("px");

        if (coin.style.visibility == "visible") {
            coin.style.top = String(window.hurdlepositionY + 125).concat("px");
        }
    }

}

function scoreUpdate() {
    if (window.updatedScore == 0) {
        window.score += 1;
        coin.style.visibility = "hidden";
        console.log("Score Updated to " + window.score);
        window.updatedScore = 1;
        displayScore.innerHTML = "Score : " + window.score;
    }
}

function Jump() {
    if ((positionY >= (hurdlepositionY + 250) && (positionY - 40) < (hurdlepositionY + 23 + 250))) {
        if (hurdle.classList.contains("redcon") && (Player.classList.contains("redC"))) {
            canJump();
            scoreUpdate();
        }
        else if (hurdle.classList.contains("bluecon") && (Player.classList.contains("blueC"))) {
            canJump();
            scoreUpdate();
        }
        else if (hurdle.classList.contains("greencon") && (Player.classList.contains("greenC"))) {
            canJump();
            scoreUpdate();
        }
        else if (hurdle.classList.contains("yellowcon") && (Player.classList.contains("yellowC"))) {
            canJump();
            scoreUpdate();
        }
        else {
            canJump();
            document.getElementById("gameOver").style.visibility = "visible";
            setTimeout(() => {displayGame.style.visibility = "hidden"; displayHome.style.visibility = "visible"; displayScore.style.visibility = "visible"; coin.style.visibility = "hidden"; colorChanger.style.visibility = "hidden";}, 1000);
            setTimeout(() => {document.getElementById("gameOver").style.visibility = "hidden"; displayScore.style.visibility="hidden"}, 2000);
        }
    }
    else if ((positionY >= (hurdlepositionY) && (positionY - 40) < (hurdlepositionY + 23))) {
        if (hurdle.classList.contains("redcon") && (Player.classList.contains("redC"))) {
            canJump();
        }
        else if (hurdle.classList.contains("bluecon") && (Player.classList.contains("blueC"))) {
            canJump();
        }
        else if (hurdle.classList.contains("greencon") && (Player.classList.contains("greenC"))) {
            canJump();
        }
        else if (hurdle.classList.contains("yellowcon") && (Player.classList.contains("yellowC"))) {
            canJump();
        }
        else {
            canJump();
            // displayGame.style.visibility = "hidden";
            // displayHome.style.visibility = "visible";
            document.getElementById("gameOver").style.visibility = "visible";
            setTimeout(() => {displayGame.style.visibility = "hidden"; displayHome.style.visibility = "visible"; displayScore.style.visibility = "visible"; coin.style.visibility = "hidden"; colorChanger.style.visibility = "hidden";}, 1000);
            setTimeout(() => {document.getElementById("gameOver").style.visibility = "hidden"; displayScore.style.visibility="hidden"}, 2000);
        }
    }
    else {
        canJump();
    }
}
