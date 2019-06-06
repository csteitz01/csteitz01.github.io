function rollDice() {
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status")
    var d1 =  Math.floor(Math.random()*6) + 1;
    var d2 =  Math.floor(Math.random()*6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML - "You rolled " +diceTotal+ "."
}
//is that incorrect?

function showTotal() {
let diceTotal = rollDice.diceTotal;

    let message = "" + diceTotal + " was rolled.";

    $('.total').hide();

    $('.rules #button').click(function() {
        $('.total').text("message");
        $('.total').show;
    });
}

document.getElementById('button').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'none';
});