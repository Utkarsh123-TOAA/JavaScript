const prompt = require("prompt-sync")();

const name = prompt("What's your name? ")
console.log("Hello "+ name + "!");

const shouldWePlay = prompt("Do you wanna play a game? ");

if (shouldWePlay.toLowerCase() === "yes" || shouldWePlay === "yeah"){
    // Game logic
    const leftOrRight = prompt("You enter a maze, do you wanna go left or right? ");
    if(leftOrRight.toLowerCase() === "left"){
        console.log("You go left and see a bridge...");
        const cross = prompt("Do you wanna cross the bridge? ")
        if(cross.toLowerCase() === "yes" || cross ==="yeah"){
            console.log("The bridge was weak and you fell off. You lost...");
        }
        else{
            console.log("Congrats, You win!");
        }
    }
    else{
        console.log("You go right and fall off a cliff...")
    }
}
else if(shouldWePlay.toLowerCase()=== "no" || shouldWePlay === "Nope"){
    console.log("Okay :( ");
}
else{
    console.log("Invalid Input!")
}

