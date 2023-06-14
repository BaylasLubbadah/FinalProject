function start(){
    var rollButton = document.getElementById('rollButton');
    rollButton.addEventListener("click",rollDice,false);
    d1img = document.getElementById("dice1");
    d2img = document.getElementById("dice2");
}
function rollDice() {
    var num1 = Math.floor(Math.random() * 6) + 1;
    d1img.setAttribute("src","die/die"+ num1+".PNG");
    var num2 = Math.floor(Math.random() * 6) + 1;
    d2img.setAttribute("src","die/die"+num2+".PNG");
    var sum = num1 + num2;
    var resultContainer = document.getElementById('resultContainer');
    var gameOverContainer = document.getElementById('gameOverContainer');

    resultContainer.innerText = 'You rolled ' + num1 + ' and ' + num2 + '.';

    if (sum > 7) {
        resultContainer.innerText += ' You win!';
        gameOverContainer.innerText = '';
    } else {
        resultContainer.innerText += ' You lose!';
        gameOverContainer.innerText = 'Game over. You cannot roll the dice again.';
        rollButton.disabled = true;
    }
}
window.addEventListener("load",start)
