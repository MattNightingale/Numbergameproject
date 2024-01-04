let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
    target = Math.floor(Math.random() * 10);
    return target;
}

const compareGuesses = (user, computer, target) => {
    if(user < 0 || user > 9){ 
        window.alert("Please make sure your guess is between 0 and 9");
    } else if (Math.abs(user - target) <= Math.abs(computer - target)) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
       computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}


