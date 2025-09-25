
updateView()
function updateView() {
    let html = `
    <!-- <button onclick="lighMode()">Light</button> -->
    <!-- <button onclick="darkMode()">Dark</button> -->


    
    <h1 class="tittle-Dark tittle">Objects and Properties</h1>
    `


    if (textLinesOpen === true) {                                                                // Text holders
        html += `
        <section class="textBox-Dark textBox" id="TextLines">
            <div style="display: flex;">
                <div style="width: 160px;">
                    <h2 class="textBoxTittle-Dark textBoxTittle">Text lines</h2>
                </div>
                <div class="closeButton-Dark" onclick="colapseSectionTextLines()">
                    ↑
                </div>
            </div>

            <h3 class="textBoxText-Dark textBoxText">headings</h3>
            <div class="sampleBox-Dark sampleBox">
                <h1>Heading object H1</h1>
                <h2>Heading object H2</h2>
                <h3>Heading object H3</h3>
                <h4>Heading object H4</h4>
                <h5>Heading object H5</h5>
                <h6>Heading object H6</h6>
                <h>Heading object H</h>
            </div>
            <p class="textBoxText-Dark textBoxText">(h#) objects hold style info by default on most browsers</p>
            <br>

            <h3 class="textBoxText-Dark textBoxText">paragraphs</h3>
            <div class="sampleBox-Dark sampleBox">
                <p>
                    (p) is a simple text holder
                </p>
            </div>
        </section>
        <br>
        `
    } else {
        html += `
        <section class="textBox-Dark textBox" id="TextLines">
            <div style="display: flex;">
                <div style="width: 160px;">
                    <h2 class="textBoxTittle-Dark textBoxTittle">Text lines</h2>
                </div>
                <div class="closeButton-Dark" onclick="openSectionTextLines()">
                    ↓
                </div>
            </div>
        </section>
        <br>
        `
    }





    
    if (listsAndTablesOpen === true) {                                                                // list
        html += `
        <section class="textBox-Dark textBox" id="listsTables">
            <div style="display: flex;">
                <div style="width: 160px;">
                    <h2 class="textBoxTittle-Dark textBoxTittle">Lists & tables</h2>
                </div>
                <div class="closeButton-Dark" onclick="colapseSectionListsTables()">
                    ↑
                </div>
            </div>

            <h3 class="textBoxText-Dark textBoxText">lists</h3>
            <div class="sampleBox-Dark sampleBox">
                <h2>ordered list (ol > li)</h3>
                <ol>
                    <li>entry one</li>
                    <li>entry two</li>
                </ol>

                <h2>unorderd list (ul > li)</h3>
                <ul>
                    <li>entry one</li>
                    <li>entry two</li>
                </ul>
            </div>
            <p class="textBoxText-Dark textBoxText">style sheet can be used to chage the symbol shown on list entries</p>
            <br>

            <h3 class="textBoxText-Dark textBoxText">tables</h3>
            <div class="sampleBox-Dark sampleBox">
                <h2>tables (tables > tr > th)</h2>
                <table style="margin: auto;">
                    <tr>
                        <th>first</th>
                        <th>result</th>
                    </tr>
                    <tr>
                        <th>second</th>
                        <th>position</th>
                    </tr>
                    <tr>
                        <th>third</th>
                        <th>entry</th>
                    </tr>
                </table>
            </div>
        </section>
        <br>
        `
    } else {
        html += `
        <section class="textBox-Dark textBox" id="listsTables">
            <div style="display: flex;">
                <div style="width: 160px;">
                    <h2 class="textBoxTittle-Dark textBoxTittle">Lists & tables</h2>
                </div>
                <div class="closeButton-Dark" onclick="openSectionListsTables()">
                    ↓
                </div>
            </div>
        </section>
        <br>
        `
    }





    
    if (visualOpen === true) {                                                                // Visual
        html += `
        <section class="textBox-Dark textBox" id="visual">
            <div style="display: flex;">
                <div style="width: 160px;">
                    <h2 class="textBoxTittle-Dark textBoxTittle">Visual</h2>
                </div>
                <div class="closeButton-Dark" onclick="colapseSectionVisual()">
                    ↑
                </div>
            </div>

            <h3 class="textBoxText-Dark textBoxText">images</h3>
            <div class="sampleBox-Dark sampleBox">
                <h3>images (img)</h3>
                <img src="duck.png" alt="Bonus Duck image">

                <br>

                <h3>if a source is missing or cant be found the (alt) property will be used as displayed text</h3>
                <img alt="Image unavailable">
                <br>
                <br>
                <img alt="the text can also be used to describe what its suposed to be, or anything else you want">
            </div>
            <br>

            <h3 class="textBoxText-Dark textBoxText">Video</h3>
            <div class="sampleBox-Dark sampleBox">
                <video height="360" width="480"></video>
                <br>
            </div>
        </section>
        <br>
    `
    } else {
        html += `
        <section class="textBox-Dark textBox" id="visual">
            <div style="display: flex;">
                <div style="width: 160px;">
                    <h2 class="textBoxTittle-Dark textBoxTittle">Visual</h2>
                </div>
                <div class="closeButton-Dark" onclick="openSectionVisual()">
                    ↓
                </div>
            </div>
        </section>
        <br>
        `
    }





    
    if (keyBindsOpen === true) {                                                                // Key Binds
        html += `
        <section class="textBox-Dark textBox" id="keyBinds">
            <div style="display: flex;">
                <div style="width: 160px;">
                    <h2 class="textBoxTittle-Dark textBoxTittle">Key Binds</h2>
                </div>
                <div class="closeButton-Dark" onclick="colapseSectionKeyBinds()">
                    ↑
                </div>
            </div>

            <h3 class="textBoxText-Dark textBoxText">Comment Out</h3>
            <div class="sampleBox-Dark sampleBox">
                <h3>[ctrl] => k -> c</h3>
                <p>holding the ctrl button and then pressing k and c in that order you Comment out all selected code</p>
                <br>
                
                <h3>[ctrl] => *</h3>
                <p>holding the ctrl button and then pressing the star button is another way to comment out a select area</p>
                <img src="key.png">
                <br>
                <p>if you do not have a area selected it will take effect on the line you are curently editing</p>
            </div>
            <br>

            <h3 class="textBoxText-Dark textBoxText">Copy/Cut/Paste</h3>
            <div class="sampleBox-Dark sampleBox">
                <h2>Copy</h2>
                <h3>[Ctrl] => c</h3>
                <p>holding the ctrl button and then pressing c will copy anything selected onto your clipboard,</p>
                <br>

                <h2>Cut</h2>
                <h3>[Ctrl] => x</h3>
                <p>holding the ctrl button and then pressing x will cut out anythin selected</p>

                <h3>[Shift] => [Delete]</h3>
                <p>holding the shift button and then pressing the delete button will "cut" out the curent selected area putting it onto your clipboard while also removing it from the text</p>
                <p>not selecting an area will result in the curent line your working on getting cut out</p>
                <br>

                <h2>Paste</h2>
                <h3>[Ctrl] => v</h3>
                <p>holding ctrl and presing v will paste your curent clipboard, if selecting an area it will replace what you have selected</p>
                <br>
            </div>
            <br>
        </section>
        <br>
    `
    } else {
        html += `
        <section class="textBox-Dark textBox" id="keyBinds">
            <div style="display: flex;">
                <div style="width: 160px;">
                    <h2 class="textBoxTittle-Dark textBoxTittle">Key Binds</h2>
                </div>
                <div class="closeButton-Dark" onclick="openSectionKeyBinds()">
                    ↓
                </div>
            </div>
        </section>
        <br>
        `
    }






    if (functionalOpen === true) {                                                                // Functional
        html += `
        <section class="textBox-Dark textBox" id="functional">
            <div style="display: flex;">
                <div style="width: 160px;">
                    <h2 class="textBoxTittle-Dark textBoxTittle">Functional</h2>
                </div>
                <div class="closeButton-Dark" onclick="colapseSectionFunctional()">
                    ↑
                </div>
            </div>

            <h3 class="textBoxText-Dark textBoxText">Buttons</h3>
            <div class="sampleBox-Dark sampleBox">
                <button>does nothing</button> <!-- no seriously its not bound to a function -->
                <br>

                <div id="hunter">
                    <h1 id="season" class="rabbit">RABBIT SEASON!</h1>
                    <button onClick="huntingSeason()">ripp</button>
                </div>
                <br>
                <button onClick="warning()">DANGER!</button>
            </div>
            <br>

            <!-- Variables -->
            <h3 class="textBoxText-Dark textBoxText">Variables</h3>
            <div class="sampleBox-Dark sampleBox">
                <h3>var</h3>
                <p>variables are data storing items.<br>a var asigned the number 2 can be turned into any other number but will always keep its asigned value type</p>
                <br>

                <h3>let</h3>
                <p>the let variable is the least restricted variant allowing chang to everything.<br>a let asigned the number 2 can be turned into any other data type</p>
                <p>in many cases calling a variable that dosent exist using a singular = symbol, javascript will register that as creating a let variable<br>so make sure to spell your variables right</p>
                <br>

                <h3>const</h3>
                <p>const is a variable type that when defined can not be changed.<br>a const asigned the number 2 will have that in all refrences to it</p>
                <br>

                <p>if a variable is declared within a code block ex. funtion, for, if. it will only be available within that block of code</p>
                <p>a variable has to be declared above any code that uses it, thats why its smart to put all variable declarations at the top</p>
                <div style="border: solid; padding: 0; width: 200px; text-align: left;">function canCall() {<br>
                    var variable_One = 1<br>
                    }<br>
                    console.log(variable_One)
                </div>
                <p>This line of code will not work no matter wich variable type you use</p>
                <p onclick="proof()" style="color: rgb(163, 48, 48); font-family: sans-serif;">click on this text with the console open to see</p>
            </div>
            <br>

            <!-- Loops -->
            <h3 class="textBoxText-Dark textBoxText">Loops</h3>
            <div class="sampleBox-Dark sampleBox">
                <h3>while</h3>
                <p>a while loop repeats its function for as long as its prompt is true</p>
                <p> while (variable < 20) {looping function};</p>
                <br>
                <br>

                <h3>for</h3>
                <p>for loops iterate through a given prompt and acctuates its function "for" every iteration</p>
                <p>for (i = 0; i > 10; i += 2) {looping function};</p>
                
                <p>however it could also be used to itterate through a list or object</p>
                <p>for (variable in object) {looping function};</p>
                <br>
            </div>
            <br>

            <!-- Links -->
            <h3 class="textBoxText-Dark textBoxText">Links</h3>
            <div class="sampleBox-Dark sampleBox">
                <h3>open link in a new tab (a target="_blank")</h3>
                <a href="https://www.google.com" target="_blank">open google</a>
                <h3>open link in this tab (a target="_self")</h3>
                <a href="https://www.google.com" target="_self">open google</a>
            </div>
            <br>
        </section>
        <br>
        `
    } else {
        html += `
        <section class="textBox-Dark textBox" id="functional">
            <div style="display: flex;">
                <div style="width: 160px;">
                    <h2 class="textBoxTittle-Dark textBoxTittle">Functional</h2>
                </div>
                <div class="closeButton-Dark" onclick="openSectionFunctional()">
                    ↓
                </div>
            </div>
        </section>
        <br>
        `
    }




    
    if (scriptsOpen === true) {                                                                // Scripts
        html += `
        <section class="textBox-Dark textBox" style="border-color: goldenrod;" id="script">
            <div style="display: flex;">
                <div style="width: 160px;">
                    <h2 class="textBoxTittle-Dark textBoxTittle">Scripts</h2>
                </div>
                <div class="closeButton-Dark" onclick="colapseSectionScript()">
                    ↑
                </div>
            </div>

            <h2 class="textBoxText-Dark textBoxText" style="font-size: 30px;">Math</h2>

<!-- Dice -->
            <h3 class="textBoxText-Dark textBoxText">Random</h3>
            <div class="sampleBox-Dark sampleBox">
                <div class="numberBox-Dark">
                    ${diceRollNum}
                </div>
                <button onclick="rollTheDice()">Roll the dice</button>
            </div>
            <br>

<!-- Math -->
            <h3 class="textBoxText-Dark textBoxText">add and subtract</h3>
            <div class="sampleBox-Dark sampleBox">
                <div class="numberBox-Dark">
                    ${mathNum}
                </div>
                <button onclick="subOne()">subtract</button>
                <input type="number" value="${inputNumber}" id="numberForMath" onchange="updateInputValue()">
                <button onclick="addOne()">add</button>
            </div>
            <br>

<!-- Gator Game -->
            <h3 class="textBoxText-Dark textBoxText">add and subtract</h3>
            <div class="sampleBox-Dark sampleBox">
                <div style="display: flex;">
                    <div class="numberBox-Dark">
                        ${first_number}
                    </div>
                    <div class="numberBox-Dark">
                        <input value="=" id="lessOrMore" style="text-align: center; font-size: 42px; width: 40%">
                    </div>
                    <div class="numberBox-Dark">
                        ${second_number}
                    </div>
                </div>
                <button onclick="isLessOrMore()">check</button><button onclick="gatorAgain()">reset</button>
                <div class="numberBox-Dark">${gatorResultText}</div>
            </div>
            <br>


<!-- background color changer -->
            <h3 class="textBoxText-Dark textBoxText">background color</h3>
            <div class="sampleBox-Dark sampleBox" id="backgroundBox">
                <button id="colorSelectButton" onclick="backgoundChange()" style="background-color: ${selectedColor};" >select</button>
                <br>
                <div style="display: flex;">
                    <div class="colorButton" style="background-color: yellow; color: yellow;" onclick="colorPicker('yellow')"></div>
                    <div class="colorButton" style="background-color: cyan; color: cyan;" onclick="colorPicker('cyan')"></div>
                    <div class="colorButton" style="background-color: red; color: red;" onclick="colorPicker('red')"></div>
                    <div class="colorButton" style="background-color: rgb(33, 34, 39); color: rgb(33, 34, 39);" onclick="colorPicker('')"></div>
                </div>
            </div>
            <br>



<!-- Stoppeklokke --> 
            <h3 class="textBoxText-Dark textBoxText">Stopwatch</h3>
            <div class="sampleBox-Dark sampleBox">
                <div class="numberBox-Dark">
                    ${seconds} ${stopwatchSpelling}
                </div>
                <!-- <button>start</button> -->
                <button onclick="startTimer()">start</button>
                <button onclick="stopTimer()">stop</button>
                <button onclick="resetTimer()">reset</button>
            </div>
            <br>



<!-- Game -->
        <h3 class="textBoxText-Dark textBoxText">fight game</h3>
        <div class="sampleBox-Dark sampleBox">
            ${fightGameScreen()}


        </div>
        <br>


            
<!-- Inventory -->
            <h3 class="textBoxText-Dark textBoxText">Inventory</h3>
            <div class="sampleBox-Dark sampleBox">
                <div>
                    ${showBagContents()}
                </div>
                <div class="numberBox-Dark" style="display: flex;">
                    <br>
                    <div class="item" id="red" style="border: solid rgb(148, 0, 0) 2px; background-color: red;" onclick="addItem(this.id)"><img src="duck.png" width="30px"></div>
                    <br>
                    <div class="item" id="blue" style="border: solid rgb(0, 0, 148) 2px; background-color: rgb(54, 181, 255);" onclick="addItem(this.id)"><img src="duck.png" width="30px"></div>
                    <br>
                    <div class="item" id="green" style="border: solid rgb(0, 121, 0) 2px; background-color: rgb(0, 255, 0);" onclick="addItem(this.id)"><img src="duck.png" width="30px"></div>
                    <br>
                    <div class="item" id="yellow" style="border: solid rgb(131, 131, 0) 2px; background-color: yellow;" onclick="addItem(this.id)"><img src="duck.png" width="30px"></div>
                    <br>
                </div>
            </div>
            <br>


<!-- Trafic light -->
        <h3 class="textBoxText-Dark textBoxText">Trafic light</h3>
        <div class="sampleBox-Dark sampleBox">
            <button onclick="roadLightTimer = false">Off</button>
            <button onclick="roadLightTimer = true">On</button>
            <br>
            <br>
            <div style="width: 270px; height: 750px; border: solid black 3px; background-color: gray; border-radius: 200em;">
                <div class="lights ${lightSequence[2]}" onclick="turnLightOn(2)"></div>

                <div class="lights ${lightSequence[1]}" onclick="turnLightOn(1)"></div>
                
                <div class="lights ${lightSequence[0]}" onclick="turnLightOn(0)"></div>

            </div>
            <br>
            <br>
        </div>
        <br>


<!-- Magic 8 ball -->
            <h3 class="textBoxText-Dark textBoxText">8 ball</h3>
            <div class="sampleBox-Dark sampleBox">
                <h3>Ask the magic 8 ball any question you would like</h3>
                <div style="border: solid 2px black; background-color: black; width: 400px; height: 400px; border-radius: 100%;" ondblclick="shakeEightBall()">
                    <div style="border: solid 2px blue; background-color: blue; width: 200px; height: 200px; border-radius: 100%; margin-top: 100px;">
                        <br>
                        <br>
                        <div style="font-size: 36px; color: white">
                            ${eightBallText}
                        </div>
                    </div>
                </div>
                <p>double click to activate</p>
            </div>
            <br>
        </section>
        <br>
        <br>
    `


    } else {
        html += `
        <section class="textBox-Dark textBox" style="border-color: goldenrod;" id="script">
            <div style="display: flex;">
                <div style="width: 160px;">
                    <h2 class="textBoxTittle-Dark textBoxTittle">Scripts</h2>
                </div>
                <div class="closeButton-Dark" onclick="openSectionScript()">
                    ↓
                </div>
            </div>
        </section>
        <br>
        `
    }
    










    mainPage.innerHTML = html
}

lightChange()



















/*
                                                                    <!-- Scripts -->
    <section class="textBox-Dark textBox" style="border-color: goldenrod;" id="script">
        <div style="display: flex;">
            <div style="width: 100%;">
                <h2 class="textBoxTittle-Dark textBoxTittle">Scripts</h2>
            </div> <!--
            <div class="closeButton-Dark" onclick="colapseSectionScript()">
                ↑
            </div>  -->
        </div>

        <h2 class="textBoxText-Dark textBoxText" style="font-size: 30px;">Math</h2>
        <!-- Dice -->
        <h3 class="textBoxText-Dark textBoxText">Random</h3>
        <div class="sampleBox-Dark sampleBox">
            <div id="dice" class="numberBox-Dark">
                10
            </div>
            <button onclick="rollTheDice()">Roll the dice</button>
        </div>
        <br>

        <!-- Math -->
        <h3 class="textBoxText-Dark textBoxText">add and subtract</h3>
        <div class="sampleBox-Dark sampleBox">
            <div id="math" class="numberBox-Dark">
                1
            </div>
            <button onclick="subOne()">subtract</button>
            <input type="number" id="numberForMath">
            <button onclick="addOne()">add</button>
        </div>
        <br>

        <!-- Gator Game -->
        <h3 class="textBoxText-Dark textBoxText">add and subtract</h3>
        <div class="sampleBox-Dark sampleBox">
            <div style="display: flex;">
                <div id="gatorOne" class="numberBox-Dark">
                    1
                </div>
                <div class="numberBox-Dark">
                    <input value=">" id="lessOrMore" style="text-align: center; font-size: 42px; width: 40%">
                </div>
                <div id="gatorTwo" class="numberBox-Dark">
                    1
                </div>
            </div>
            <button onclick="isLessOrMore()">check</button><button onclick="gatorAgain()">reset</button>
            <div id="gatorResult" class="numberBox-Dark"></div>
        </div>
        <br>


        <!-- background color changer -->
        <h3 class="textBoxText-Dark textBoxText">background color</h3>
        <div class="sampleBox-Dark sampleBox" id="backgroundBox">
            <button id="colorSelectButton" onclick="backgoundChange()">select</button>
            <br>
            <div style="display: flex;">
                <div class="colorButton" style="background-color: yellow; color: yellow;" onclick="colorPicker('yellow')"></div>
                <div class="colorButton" style="background-color: cyan; color: cyan;" onclick="colorPicker('cyan')"></div>
                <div class="colorButton" style="background-color: red; color: red;" onclick="colorPicker('red')"></div>
                <div class="colorButton" style="background-color: rgb(33, 34, 39); color: rgb(33, 34, 39);" onclick="colorPicker('rgb(33, 34, 39)')"></div>
            </div>
        </div>
        <br>

        <!-- Stoppeklokke --> 
        <h3 class="textBoxText-Dark textBoxText">Stopwatch</h3>
        <div class="sampleBox-Dark sampleBox">
            <div id="timer" class="numberBox-Dark">
                0 seconds
            </div>
            <!-- <button>start</button> -->
            <button onclick="startTimer()">start</button>
            <button onclick="stopTimer()">stop</button>
            <button onclick="resetTimer()">reset</button>
        </div>
        <br>

        <!-- Game -->
        <h3 class="textBoxText-Dark textBoxText">fight game</h3>
        <div class="sampleBox-Dark sampleBox">
            <div id="fightGame">
                <p>Welcome User</p>
                <div style="display: flex;">
                    
                </div>
                <img src="duck.png" ondblclick="notSoSecretFight()">
            </div>
            <br>
            <input id="inputName">
            <button onclick="startGame()">Fight</button>
        </div>
        <br>
        
        <!-- Inventory -->
        <h3 class="textBoxText-Dark textBoxText">Inventory</h3>
        <div class="sampleBox-Dark sampleBox">
            <div>
                <div id="bag" style="width: auto; height: auto; border: solid brown 2px; display: flex; width: 90%;">
                    <div id="bagOptions" style="width: 15%;">
                        <p onclick="openBag()">Open<br>bag</p>
                    </div>
                    <div id="bagInventory" style="display: grid; width: 85%; grid-template-columns: repeat(14, 40px);">
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="numberBox-Dark" style="display: flex;">
                <br>
                <div class="item" id="red" style="border: solid rgb(148, 0, 0) 2px; background-color: red;" onclick="addItem(this.id)"><img src="duck.png" width="30px"></div>
                <br>
                <div class="item" id="blue" style="border: solid rgb(0, 0, 148) 2px; background-color: rgb(54, 181, 255);" onclick="addItem(this.id)"><img src="duck.png" width="30px"></div>
                <br>
                <div class="item" id="green" style="border: solid rgb(0, 121, 0) 2px; background-color: rgb(0, 255, 0);" onclick="addItem(this.id)"><img src="duck.png" width="30px"></div>
                <br>
                <div class="item" id="yellow" style="border: solid rgb(131, 131, 0) 2px; background-color: yellow;" onclick="addItem(this.id)"><img src="duck.png" width="30px"></div>
                <br>
            </div>
        </div>
        <br>

        <!-- Trafic light -->
        <h3 class="textBoxText-Dark textBoxText">Trafic light</h3>
        <div class="sampleBox-Dark sampleBox">
            <br>
            <br>
            <div style="width: 270px; height: 750px; border: solid black 3px; background-color: gray; border-radius: 200em;">
                <div class="lights redLightOn" id="redLight" onclick="turnLightOn(redLight, 'redLightOn')"></div>

                <div class="lights lightOff" id="yellowLight" onclick="turnLightOn(yellowLight, 'yellowLightOn')"></div>
                
                <div class="lights lightOff" id="greenLight" onclick="turnLightOn(greenLight, 'greenLightOn')"></div>

            </div>
            <br>
            <br>
        </div>
        <br>


        <!-- Magic 8 ball -->
        <h3 class="textBoxText-Dark textBoxText">8 ball</h3>
        <div class="sampleBox-Dark sampleBox">
            <h3>Ask the magic 8 ball any question you would like</h3>
            <div style="border: solid 2px black; background-color: black; width: 400px; height: 400px; border-radius: 100%;" ondblclick="shakeEightBall()">
                <div style="border: solid 2px blue; background-color: blue; width: 200px; height: 200px; border-radius: 100%; margin-top: 100px;">
                    <br>
                    <br>
                    <div id="eightBallText" style="font-size: 36px; color: white">8</div>
                </div>
            </div>
            <p>double click to activate</p>
        </div>
        <br>
    </section>
    <br>
    <br>
*/
