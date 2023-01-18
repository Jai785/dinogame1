var character = document.getElementById("character");
var result = document.getElementById("result");
var game = document.getElementById("game");
var score = document.getElementById("score");
var sound = document.getElementById("sound");
var btn1 = document.getElementById("btn1");
var count = 0;
var block = document.getElementById("block");


function jump() {
    sound.play();
    character.style.top = "20px";
    setTimeout(function () {
        character.style.top = "77px";
    }, 400);
    count++
};

window.addEventListener("keydown", jump);
btn1.addEventListener("click", jump);

setInterval(function gameOver() {
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    if ((blockleft < 70) && (characterTop > 30)) {
        result.style.display = "block";
        game.style.display = "none";
        btn1.style.display = "none";
        score.innerHTML = `score : ${count}`;
    }
}, 10);