const choices = ['rock', 'paper', 'scissors'];
const playerChoices = document.querySelectorAll('.choice');
const computerChoiceImg = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

playerChoices.forEach(choice => {
    choice.addEventListener('click', () => {
        playerChoices.forEach(c => c.classList.remove('selected'));
        choice.classList.add('selected');
        const playerPick = choice.id;
        computerTurn(playerPick);
    });
});

function computerTurn(playerPick) {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceImg.src = `hw4sources/${randomChoice}.png`;
    decideWinner(playerPick, randomChoice);
}

function decideWinner(playerPick, computerThrow) {
    if (playerPick === computerThrow) {
        resultDisplay.textContent = "It's a tie!";
    }
    else if (
        (playerPick === 'rock' && computerThrow === 'scissors') ||
        (playerPick === 'paper' && computerThrow === 'rock') ||
        (playerPick === 'scissors' && computerThrow === 'paper')
    ) {
        resultDisplay.textContent = 'You win!';
    }
    else {
        resultDisplay.textContent = 'Computer wins!';
    }
}


