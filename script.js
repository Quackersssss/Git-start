                                                                                // style
// document.getElementsByClassName("main-Dark")

// function lighMode() {
//   const element = document.getElementById("main");
//   let nodes = element.getElementsByClassName("textBox");
//   for (let i = 0; i < nodes.length; i++) {
//     nodes[i].classList.toggle = "textBox-Light textBox-Dark";
//   }
// }




                                                                                // variable proof
function proof() {
    function canCall() {
        var variable_One = 1
    }
    console.log(variable_One)
}





                                                                                // javascript for the dice roll
// var outputDiv_dice = document.getElementById('dice');
let diceRollNum = 10;

function rollTheDice() {
    diceRollNum = Math.floor(Math.random() * 20) + 1;
    // outputDiv_dice.innerHTML = diceRollNum;
    updateView()
}





                                                                                // javacript for the add/subtract section 
let inputNumber = 0;
let mathNum = 1;


function updateInputValue() {
    var input_math = document.getElementById('numberForMath');
    inputNumber = input_math.value;

}

function addOne() { //inacurate function name due to no longer only adding one
    mathNum -= -inputNumber;

    updateView()
}
function subOne() { //inacurate function name due to no longer only removing one
    mathNum -= inputNumber;

    updateView()
}






                                                                                // Gator Game
function gatorMath() {
    return Math.floor(Math.random() * 55) - 5;
}

let first_number = gatorMath()
let second_number = gatorMath()
let gatorResultText = ""

while (first_number == second_number) {
    second_number = gatorMath()
}


// document.getElementById("gatorOne").innerHTML = first_number
// document.getElementById("gatorTwo").innerHTML = second_number


function isLessOrMore() {
    const gatorSymbol = document.getElementById("lessOrMore")

    if (gatorSymbol.value == "<" || gatorSymbol.value == "<=") {
        if (first_number < second_number) {
            // gatorResult.innerHTML = "win"
            gatorResultText = "correct"
        } else {
            // gatorResult.innerHTML = "fail"
            gatorResultText = "WRONG"
        }
    } else if (gatorSymbol.value == ">" || gatorSymbol.value == ">=") {
        if (first_number > second_number) {
            // gatorResult.innerHTML = "win"
            gatorResultText = "correct"
        } else {
            // gatorResult.innerHTML = "fail"
            gatorResultText = "WRONG"
        }
    } else {
        gatorResultText = "invalid input, '<' or '>' thanks"
        // gatorResult.innerHTML = "invalid Input"
        console.log(gatorSymbol.value, "is not a valid input")
        gatorAgain()
    }
    updateView()
}

function gatorAgain() {
    first_number = gatorMath()
    second_number = gatorMath()
    while (first_number == second_number) {
        second_number = gatorMath()
    }
    // document.getElementById("gatorOne").innerHTML = first_number
    // document.getElementById("gatorTwo").innerHTML = second_number
    updateView()
}








                                                                                // javascript for the looneytoons skit section
function huntingSeason() {
    if (document.getElementById('season').innerHTML != "RABBIT SEASON!") {
        document.getElementById('season').innerHTML = "RABBIT SEASON!";
        document.getElementById('season').classList = "rabbit"
    } else {
        document.getElementById('season').innerHTML = "DUCK SEASON!";
        document.getElementById('season').classList.remove("rabbit")
        document.getElementById('season').classList.add("duck")
    }
}





                                                                                // javascript for the warning button
function warning() {
    alert("i lied about the danger, this is an alert function its activated via javascript")
}



                                                                                // stopwatch
var seconds = 0
let stopwatchSpelling = "seconds"
var activeTimer = false

function timerSeconds() {
    if (activeTimer === true) {
        seconds += 1
        if (seconds === 1) {
            stopwatchSpelling = "second"
            // document.getElementById('timer').innerHTML = seconds + " seccond"
        } else {
            stopwatchSpelling = "seconds"
            // document.getElementById('timer').innerHTML = seconds + " secconds"
        }
        updateView()
    }
}

const stopwatchTimer = setInterval(timerSeconds /*function to repeat*/, 1000/**thime between repeats */)

function startTimer() {
    activeTimer = true


    updateView()
}

function stopTimer() {
    stopwatchSpelling = "seconds <br> frozen"
    // document.getElementById('timer').innerHTML += "<br> frozen"
    activeTimer = false

    updateView()
}

function resetTimer() {
    seconds = 0 
    clearInterval(timer);
    // document.getElementById('timer').innerHTML = seconds + " seconds"

    updateView()
}














                                                                                // background ColorChanger
var selectedColor = "" // this variable holds the color information
function colorPicker(colorPick) {
    selectedColor = colorPick   // used in the onclick for divs to 
    updateView()
    // document.getElementById('colorSelectButton').style.backgroundColor = colorPick // this changes the select button text color so its easier to see wich you have selected
}

function backgoundChange() {
    document.getElementById('main').style.backgroundColor = selectedColor //when called this changes the background color to the color stored in selectedColor
    colorPicker("")
}














                                                                                // Javascript for the duck fight /*simple
// var fightArea = document.getElementById('fightGame');
let gameScreen = "menu"

// player var
const playerMaxHealth = 150;
var playerHealth = 150;
const maxPlayerEnergy = 100;
var playerEnergy = 100;
let playerGold = 10;

// duck var
var myName = "";
var money  = 0;
var energy = 100;
var dummyHealth = 200;


function fightGameScreen() {
    let html;
    if (gameScreen == "menu") {
        html = /*HTML*/`
        <div id="fightGame">
            <p>Welcome User</p>
            <div style="display: flex;">
                
            </div>
            <img src="duck.png">
        </div>
        <br>
        <input id="inputName">
        <button onclick="startGame()">Fight</button>
        `

    } else if (gameScreen == "arena") {
        html = /*HTML*/`
            <p>Welcome ${myName}</p>
            <div>
                <p id="moneyDiv">Gold: ${money}</p>
                <p id="energyDiv">Energy: ${energy}</p>
                <p id="dummyDiv">Dummy HP: ${dummyHealth}</p>
            </div>
            <img height="200" src="duck.png">
            <button onClick="PickUpMoney()">Scavange for gold</button>
            <button onClick="attack()">Strike dummy</button>
        `

    }



    return html;
}



function startGame() {
    myName = document.getElementById('inputName').value;

    gameScreen = "arena"
    updateView()
}

function PickUpMoney(){
    money += Math.floor(Math.random() * 10) + 10;

    // document.getElementById('moneyDiv').innerHTML = `Gold: ${money}`
    updateView()
}

function attack(){
    dummyHealth -= 20;
    energy -= Math.floor(Math.random() * 5) + 5;

    // document.getElementById('energyDiv').innerHTML = `Energy: ${energy}`
    // document.getElementById('dummyDiv').innerHTML = `Dummy HP: ${dummyHealth}`
    updateView()
}










                                                                                // javascript for the duck fight /*hardmode

// moved for easier creation












                                                                                //Inventory
const bagItems =[];
var deletedItems = 0;
var bagIsOpen = false;

function addItem(itemId) {
    let originalItem = document.getElementById(itemId);

    bagItems.push([`${originalItem.style.border}`, `${originalItem.style.backgroundColor}`, `${originalItem.innerHTML}`, (bagItems.length + deletedItems)])
        
    // console.log(bagItems);
    updateView()
}

function openBag() {
    bagIsOpen = true
    updateView()
}
function closeBag() {
    bagIsOpen = false
    updateView()
}
function showBagContents() {
    let html = /*HTML*/`
    <div id="bag" style="width: auto; height: auto; border: solid brown 2px; display: flex; width: 90%;">
        <div id="bagOptions" style="width: 15%;">
    `
    if (bagIsOpen == true) {
        html += /*HTML*/`
            <p onclick="closeBag()">Close<br>bag</p>
        </div>
        <div id="bagInventory" style="display: grid; width: 85%; grid-template-columns: repeat(14, 40px);">
        `

        for (let i = 0; i < bagItems.length; i++) {
            html += /*HTML*/`
            <div class="bagItem" id="item${i}" style="border: ${bagItems[i][0]}; background-color: ${bagItems[i][1]};" onclick="removeItem(bagItems[${i}][3])">${bagItems[i][2]}</div>

            `
        }
    } else {
        html += /*HTML*/`
            <p onclick="openBag()">Open<br>bag</p>
        </div>
        <div id="bagInventory" style="display: grid; width: 85%; grid-template-columns: repeat(14, 40px);">
        `

    }

    html += /*HTML*/`
        </div>
    </div>
    `
    return html
}




function removeItem(itemId) {
    var indexOfId = bagItems.findIndex(item => {
        return item[3] == itemId //finds the index of item using itemId
    })
    
    bagItems.splice(indexOfId, 1/**amount to remove*/) //removes the item with the right index
    
    updateView()

    deletedItems += 1;
}







                                                                                // Trafic lights
function turnLightOn(lightSlot) {
    if (lightSequence[lightSlot] == lightSequenceFull[lightSlot]) {
        lightSequence[lightSlot] = "lightOff"
    } else {
        lightSequence[lightSlot] = lightSequenceFull[lightSlot]
    }



    updateView()
}

let roadLightTimer = false;


const lightSequenceFull = ["greenLighOn", "yellowLightOn", "redLightOn"]
let lightSequence = ["greenLighOn", "lightOff", "lightOff"]


    // probably not the best way to do this and definetly not the only way but it works
var lightSequenceTimer = 1;




function lightChange() {
    if (roadLightTimer == true) {
        if (lightSequenceTimer <= 2) {
            lightSequence = ["lightOff", "lightOff", "lightOff"]
            turnLightOn(0)

            lightSequenceTimer += 1;
        } else if (lightSequenceTimer == 3) {
            lightSequence = ["lightOff", "lightOff", "lightOff"]
            turnLightOn(1)

            lightSequenceTimer += 1;
        } else if (lightSequenceTimer <= 5) {
            lightSequence = ["lightOff", "lightOff", "lightOff"]
            turnLightOn(2)

            lightSequenceTimer += 1;
        } else if (lightSequenceTimer == 6) {
            lightSequence = ["lightOff", "lightOff", "lightOff"]
            turnLightOn(1)

            lightSequenceTimer += 1;
        }

        if (lightSequenceTimer > 6) {
            lightSequenceTimer = 1;
        }
    }


    setTimeout(lightChange, 1000)
}












                                                                                // Magic 8 ball

const ballQuotes = ["it would seem so", "not quite", "Perhaps its better to ask later", "I do belive so", "no", "only time may tell", "affermative", "negative", "Yes", "Not realy", "The future is fogy", "the dunes plead you not"]
let eightBallText = "8"
let previousAnswer;




function shakeEightBall() {
    let quoteSlot = Math.floor(Math.random() * ballQuotes.length)
    // console.log(ballQuotes[quoteSlot])
    while (ballQuotes[quoteSlot] === previousAnswer) {
        // console.log("rerolled to:", ballQuotes[quoteSlot])
        quoteSlot = Math.floor(Math.random() * ballQuotes.length)
    }
    eightBallText = getEightBallQuote(quoteSlot)
    updateView()
}

function getEightBallQuote(slot) {
    // console.log(slot)
    // console.log(previousAnswer)
    // console.log(ballQuotes[slot])
    previousAnswer = ballQuotes[slot]
    return ballQuotes[slot]
}










                                                                                //colapse and open sections
// Text Lines
function colapseSectionTextLines() {
    textLinesOpen = false;
    updateView()
}

function openSectionTextLines() {
    textLinesOpen = true;
    updateView()

}




// Lists & Tables
function colapseSectionListsTables() {
    listsAndTablesOpen = false;
    updateView()

}

function openSectionListsTables() {
    listsAndTablesOpen = true;
    updateView()
}




// Visual
function colapseSectionVisual() {
    visualOpen = false;
    updateView()
}

function openSectionVisual() {
    visualOpen = true;
    updateView()
}




// Key Binds
function colapseSectionKeyBinds() {
    keyBindsOpen = false;
    updateView()
}

function openSectionKeyBinds() {
    keyBindsOpen = true;
    updateView()
}




// Functional
function colapseSectionFunctional() {
    functionalOpen = false;
    updateView()
}

function openSectionFunctional() {
    functionalOpen = true;
    updateView()
}




// Scripts
function colapseSectionScript() {
    scriptsOpen = false;
    updateView()
}

function openSectionScript() {
    scriptsOpen = true;
    updateView()
}