const squares = Array.from(document.querySelectorAll('.square'))


const buttonColors = ['green', 'red', 'blue', 'yellow']
const gamePattern = [] //Computer Pattern 
const userPattern = [] // User Input Pattern to check with game Pattern

function nextSequence() {
    const RandomNumber = Math.floor(Math.random()*4);
    randomColor = buttonColors[RandomNumber] // So I use nextSequence to select a color from the array
    console.log(randomColor);
    gamePattern.push(randomColor); 
}

const soundMap = {
    blue: new Audio("sounds/blue.mp3"),
    green: new Audio("sounds/green.mp3"),
    red: new Audio("sounds/red.mp3"),
    yellow: new Audio("sounds/yellow.mp3")
}

randomColor = buttonColors[nextSequence()] // So I use nextSequence to select a color from the array
console.log(randomColor);
gamePattern.push(randomColor) //push that onto the AI sequence

//Animating the flash
let buttonToBeFlashed = document.querySelector("." + randomColor)
console.log(buttonToBeFlashed);
buttonToBeFlashed.addEventListener("click", () => {
    buttonToBeFlashed.classList.add("pressed");
    soundMap[randomColor].play();
    setTimeout(() => {
        buttonToBeFlashed.classList.remove("pressed");
    },1000);
})




buttonToBeFlashed.click();


//^^ Works so far, idea for AI, to click the button using the click()




