/*
* Excercise 1
*
*/

let myColor = document.getElementById("color-block");
let myName = document.getElementById("color-name");

/*
* Then write a function that changes the text and the color inside the div
*
*/


function changeColor(){
    //Write a condition determine what color it should be changed to
    console.log(myColor.style.backgroundColor);
    if( myColor.style.backgroundColor === "rgb(240, 128, 128)" || myColor.style.backgroundColor === ""){
        //change the background color using JS
        myColor.style.backgroundColor = "#4B0082";
        //Change the text of the color using the span id color-name
        myName.innerText = "#4B0082";
    }
    else{
        //change the background color using JS
        myColor.style.backgroundColor = "#F08080";
        //Change the text of the color using the span id color-name
        myName.innerText = "#F08080";
    }
}

myColor.addEventListener("click", changeColor);


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

let userInput = document.getElementById("f-input");
let finalOutput = document.getElementById("c-output");
let button = document.getElementById("convertbtn");

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    let input = userInput.value;
    let cels = (input - 32) * (5/9);
    //Send the calculated temperature to HTML
    finalOutput.innerText = cels.toPrecision(2);
}

button.addEventListener("click", convertTemp);