// Generate the random number
let answer =Math.trunc(Math.random()*20 +1);
console.log(answer);
let score = 20;
let highScore = 0;

// Get the Guessed number
document.getElementById("check_btn").addEventListener("click",()=>{

    const GsdNumber = Number(document.getElementById("guess_box").value)
    let msg = document.querySelector(".message")
    let scoreCard = document.getElementById("score")
    if(score > 0){
        // No Number 
        if(!GsdNumber){
            msg.textContent = "Enter any Number!"
        }
        // Out of Range
        else if(GsdNumber>20 || GsdNumber<1){
            msg.textContent = "Enter numbers b/w 1 & 20"
        }
         // Correct Number
        else if(GsdNumber === answer){
            document.querySelector(".game_title").textContent = "You Won!";
            msg.textContent = "Numbers Matched!"
            document.querySelector(".question_mark").textContent = answer;
            document.querySelector("body").style.background = "green";
            msg.style.color = "aqua"

            // Updating highscore
            if(score > highScore){
                highScore = score;
                document.getElementById("highscore").textContent = highScore;
            }
        }
        // Guessed number is high than answer
        else if(GsdNumber > answer){
            score -= 1
            msg.textContent = "Guess is too high";
            scoreCard.textContent = score;
        }
        //  Guessed number is low than answer
        else if(GsdNumber < answer){
            score -= 1
            msg.textContent = "Guess is too low";
            scoreCard.textContent = score;
        }
    }
    // When the Score becomes 0
    if(score == 0){
        scoreCard.textContent = score;   
        msg.textContent = "Restart the Game!";
        msg.style.color = "red"
    }
})

// Restart and setUp default options
document.querySelector(".again_btn").addEventListener("click",()=>{
    score =20;
    document.querySelector("body").style.background = "black";
    document.querySelector(".game_title").textContent = "Guess the Number";
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".message").style.color = "white"
    document.getElementById("guess_box").value = "";
    document.querySelector(".question_mark").style.backgroundColor = "orange" ;
    document.querySelector(".question_mark").textContent = "?";
    document.getElementById("score").textContent = score;
})
