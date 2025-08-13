var outputDiv_dice = document.getElementById('dice');
let diceRollNum = 1;

var outputDiv_math = document.getElementById('math');
let mathNum = 1;

function hunting() {
    if (document.getElementById('season').innerHTML != "RABBIT SEASON!") {
        document.getElementById('season').innerHTML = "RABBIT SEASON!";
        document.getElementById('season').classList = "rabbit"
    } else {
        document.getElementById('season').innerHTML = "DUCK SEASON!";
        document.getElementById('season').classList.remove("rabbit")
        document.getElementById('season').classList.add("duck")
    }
}

function rollTheDice() {
    diceRollNum = Math.floor(Math.random() * 20) + 1;
    outputDiv_dice.innerHTML = diceRollNum;
}

function addOne() {
    mathNum += 1
    outputDiv_math.innerHTML = mathNum
}
function subOne() {
    mathNum -= 1
    outputDiv_math.innerHTML = mathNum
}