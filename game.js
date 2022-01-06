const squares = Array.from(document.querySelectorAll('.square'))


const buttonColors = ['green', 'red', 'blue', 'yellow']
const gamePattern = [] //Computer Pattern 
const userPattern = [] // User Input Pattern to check with game Pattern


randomColor = buttonColors[nextSequence()] // So I use nextSequence to select a color from the array
console.log(randomColor);
gamePattern.push(randomColor) //push that onto the AI sequence

//Animating the flash
let buttonToBeFlashed = document.querySelector("." + randomColor)
console.log(buttonToBeFlashed);
buttonToBeFlashed.addEventListener("click", () => {
    buttonToBeFlashed.classList.add("pressed");
    setTimeout(() => {
        buttonToBeFlashed.classList.remove("pressed");
    },100);
})



//^^ Works so, idea for AI, to click the button using the click()

function nextSequence() {
    const RandomNumber = Math.floor(Math.random()*4);
    return RandomNumber
}


