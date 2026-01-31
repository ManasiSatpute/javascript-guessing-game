// Simple Number Guessing Game using JavaScript

let num = Number(prompt("Enter the max number: "));

const randomNum=Math.floor(Math.random() * num)+1;
let guess = prompt("Guess the number:");
while(true){
    if(guess == "quit"){
        console.log("User quit!");
        break;
    }
    if(guess == randomNum){
        console.log("You are right! Congrats!!");
        break;
    }else if(guess <randomNum){
       guess= prompt("Your Guess was  small. Please try again")
    }
    else if(guess>randomNum){
         guess= prompt("Your Guess was  large. Please try again")

    }
    else{
       guess= prompt("You are out of range!");
    }
}
