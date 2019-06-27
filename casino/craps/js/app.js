// variable that holds the bankroll
var broll;

// variable that holds the bet amount being made
var bet;

// variables to help determine if a person wins a bet, or if the dice need to be rolled again
var dicePass = [7, 11];
var diceDontPass = [2, 3, 12];
var diceFlop = [4, 5, 6, 8, 9, 10];

function rollDice() {
    /* checks to make sure that the bankroll and bet amount submit buttons are not visible and a bet type has been chosen before
       roll dice button can be clicked */
    if ($(".submit").is(":visible") || $(".bet-submit").is(":visible") || $('input[name=bet]:checked').length == 0) {
        alert ("Please fill out the previous forms before trying to roll the dice.")
    }
    else {
        var d1 =  Math.floor(Math.random()*6) + 1;
        var d2 =  Math.floor(Math.random()*6) + 1;
        var diceTotal = d1 + d2;
        var dieOneImage = "img/dice"+d1+".png"
        var dieTwoImage = "img/dice"+d2+".png"
        replace(diceTotal);
        document.querySelector('.d1').setAttribute('src', dieOneImage);
        document.querySelector('.d6').setAttribute('src', dieTwoImage);
        $("input[type=radio]").attr('disabled', true);
        // first if covers outcomes of betting pass
        if ($("input[value='pass']:checked")) {
            if (dicePass.includes(diceTotal)) {
                $("#status h3").append(" You won $" + (bet * 2) + "!");
                enableBet();
                broll = broll + (2 * bet);
                $('.blank1').text(broll);
            } else if (diceDontPass.includes(diceTotal)) {
                $("#status h3").append(" You lost this bet, but there's always the next bet.");
                enableBet();
            } else if (diceFlop.includes(diceTotal)) {
                $("#status h3").append(" Neither bet won. Please roll again.");
            }
        // else if covers outcomes of betting pass
        } else if ($("input[value='dontPass']:checked")) {
            if (diceDontPass.includes(diceTotal)) {
                $("#status h3").append(" You won $" + (bet * 2) + "!");
                enableBet();
                broll = broll + (2 * bet);
                $('.blank1').text(broll);
            } else if (dicePass.includes(diceTotal)) {
                $("#status h3").append(" You lost this bet, but there's always the next bet.");
                enableBet();
            } else if (diceFlop.includes(diceTotal)) {
                $("#status h3").append(" Neither bet won. Please roll again.");
            }
        }
    }
}

// function that clears bet amount and shows the bet submit input and button, and enables bet type radio button
function enableBet() {
    $(".blank2").empty();
    $(".bet-size").show();
    $(".bet-submit").show();
    $("input[type=radio]").attr('disabled', false);
}

function replace(diceTotal) {
    $("#status h3").text(diceTotal);
}

$(".submit").click(function(){
    broll = $(".initial").val();
    // checks to make sure that you are at least bringing one dollar to play with
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
    bet = $(".bet-size").val();
    // makes sure your bet is not bigger than your bankroll
    if (bet > broll) {
        alert('You cannot bet more money than you have.')
    }
    // makes sure your bet is bigger than 1
    else if (bet < 1) {
        alert('You have to bet at least $1 to play.')
    }
    else {
        $(".bet-size").hide();
        $(".bet-submit").hide();
        $('.blank2').text(bet);
        broll = broll - bet;
        $('.blank1').text(broll);
    }
  });

$(".quit").click(function(){
    document.querySelector('.modal-content-quit').style.display = 'flex';
})

document.getElementById('rules').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'none';
});