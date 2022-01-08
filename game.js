const squares = Array.from(document.querySelectorAll('.square'))
const heading = document.querySelector("h1")

const buttonColors = ['green', 'red', 'blue', 'yellow']
const gamePattern = [] //Computer Pattern 
const userPattern = [] // User Input Pattern to check with game Pattern

let currentLevel = 0;
// const gameOn = false;

const soundMap = {
    blue: new Audio("sounds/blue.mp3"),
    green: new Audio("sounds/green.mp3"),
    red: new Audio("sounds/red.mp3"),
    yellow: new Audio("sounds/yellow.mp3"),
    gameOver: new Audio("sounds/wrong.mp3")
}

function nextSequence() {
    currentLevel++;
    heading.innerText = "Level " +currentLevel;
    const RandomNumber = Math.floor(Math.random()*4);
    randomColor = buttonColors[RandomNumber] // So I use nextSequence to select a color from the array
    console.log(randomColor);
    gamePattern.push(randomColor);


    let buttonToBeFlashed = document.querySelector("." + randomColor)
    console.log(buttonToBeFlashed);
   
    buttonToBeFlashed.classList.add("pressed");

    
    soundMap[randomColor].play();

    setTimeout(() => {
        buttonToBeFlashed.classList.remove("pressed");
    },150);

    

}


 //push that onto the AI sequence

//Animating the flash

document.addEventListener("keypress", () =>{
    // gameOn = true;
    // if (gameOn){
    //     nextSequence();
    // }

    nextSequence();
    
}, {once : true});

squares.forEach((button) =>{
    button.addEventListener("click", (event) =>{
        console.log(event)
        console.log(event.target.classList)


        let userClickedButtonColor = event.target.classList[0]
        userPattern.push(userClickedButtonColor);

        if (gamePattern.length === userPattern.length && gamePattern[currentLevel-1] === userPattern[currentLevel-1]){
            nextSequence()
        } else{
            gameOver();
        }

        // checkButtonifCorrect(userPattern.length -1)

    })
})

function gameOver(){
    gamePattern = []
    userPattern= []
    currentLevel = 0

    heading.innerText = "Game Over";
    document.querySelector("body").classList.add(".game-over");
    soundMap.gameOver.play();

    setTimeout(() => {
        heading.innerText = "Press a Key to Restart"
        document.querySelector("body").classList.remove(".game-over")
    },1500)

    window.location.reload();

}

// function checkButtonifCorrect(level){
//     //Check if the length of the arrays are the same, 
//     //cause if the length isn't the same then something went wrong

//     if (gamePattern.length === userPattern.length){

//     }

// }




    // currentLevel++;
    // heading.innerText = "Level " +currentLevel ;
    
    // nextSequence()

    // setTimeout(() =>{
    //     nextSequence();
    // },5000);

    // Have the next Sequence return the AI chosen color, add event listeners to all 4 buttons.
    // After every 


//^^ Works so far, idea for AI, to click the button using the click()




