function rollDice() {
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var d1 =  Math.floor(Math.random()*6) + 1;
    var d2 =  Math.floor(Math.random()*6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    replace(diceTotal);
}

function replace(diceTotal) {
    $("#status p").text(diceTotal);
}

document.getElementById('rules').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'none';
});