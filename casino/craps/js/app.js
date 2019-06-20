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

var broll;

$(".submit").click(function(){
    let broll = $(".initial").val();
    if (broll < 1){
        alert('You need to have at least $1 to play.');
    }
    else {
        $("#money").hide();
        $(".submit").hide();
        $('.blank1').text(broll);
    }
  });

$(".bet-submit").click(function(){
    let bet = $(".bet-size").val();
    if (bet > broll) {
        alert('You cannot bet more money than you have.')
    }
    else if (bet < 1) {
        alert('You have to bet at least $1 to play.')
    }
    else {
        $(".bet-size").hide();
        $(".bet-submit").hide();
        $('.blank2').text(bet);
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