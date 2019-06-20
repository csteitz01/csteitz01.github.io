function rollDice() {
    var d1 =  Math.floor(Math.random()*6) + 1;
    var d2 =  Math.floor(Math.random()*6) + 1;
    var diceTotal = d1 + d2;
    var dieOneImage = "img/dice"+d1+".png"
    var dieTwoImage = "img/dice"+d2+".png"
    replace(diceTotal);
    document.querySelector('.d1').setAttribute('src', dieOneImage);
    document.querySelector('.d6').setAttribute('src', dieTwoImage);
}

function replace(diceTotal) {
    $("#status h3").text(diceTotal);
}

document.addEventListener('#bank submit', (e) => {
    let num = input.value;
    if (num < 1) {
        alert('You need to have more than $1 if you want to play');
    }
    else {
        document.querySelector('#bank input').style.display = 'none';
        document.querySelector('#bank button').style.display = 'none';
        $("h2 span").text(num);
    }
});

document.getElementById('rules').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'none';
});