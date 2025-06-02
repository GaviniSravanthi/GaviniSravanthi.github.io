// ROCK PAPER SCISSOR
const choices=["rock","paper","scissors"]
const playerDisplay=document.getElementById('playerDisplay');
const computerDisplay=document.getElementById('computerDisplay');
const resultDisplay=document.getElementById('resultDisply');

function playgame(playerchoice)
{
    const computerchoice=choices[Math.floor(Math.random()*3)];
    console.log(computerchoice);
    let result=" "
    if(playerchoice===computerchoice)
    {
        result="IT'S TIE!"
    }
    else{
        switch(playerchoice)
        {
            case 'rock':
                result=(computerchoice==='scissors')?'YOU WIN!':'YOU LOSE!';
                break;
            case 'paper':
                result=(computerchoice==='rock')?'YOU WIN!':'YOU LOSE!';
                break;
            case 'scissors':
                result=(computerchoice==='paper')?'YOU WIN!':'YOU LOSE!';
                break;
        }
    } 

    playerDisplay.textContent=`PLAYER:${playerchoice}`;
    computerDisplay.textContent=`COMPUTER:${computerchoice}`;
    resultDisplay.textContent=result;
    resultDisplay.classList.remove('greenText','redText');

    switch(result)
    {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            break;
            case "YOU LOSE!":
                resultDisplay.classList.add("redText");
                break;
    }
}
