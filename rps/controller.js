var game = new Game();


// main entry point
function playGame() {
    //*********************************ADD CODE HERE *************************************/
    // Call the function game.newGame() to reset the counts.
    game.newGame();
    //*********************************ADD CODE HERE *************************************/
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
    // Use game.IsNumerOfRoundsValid() to validate the user input.
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the suer again
    let numberOfRounds = prompt('How many rounds would you like to play?');
    let check = game.isNumberOfRoundsValid();

    if (check) {
        game.setNumberOfRounds(numberOfRounds);
    } else {
        numberOfRounds = prompt('Number of rounds invalid. How many rounds would you like to play?');
    };
    //*********************************ADD CODE HERE *************************************/
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round 
    for (let i = 1; i <= numberOfRounds; i++) {
        playRound(i);
    }

    //*********************************ADD CODE HERE *************************************/
    // Display the Final Score from the properties stored in the Game object
    console.log(`FINAL SCORE [Player Score: ${game.countOfPlayerWins}    Computer Score: ${game.countOfComputerWins}]`);
}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    //*********************************ADD CODE HERE *************************************/
    // Display the Current Score to the User
    console.log(`Round ${roundNumber}`)
    console.log(`Player Score: ${game.countOfPlayerWins}    Computer Score: ${game.countOfComputerWins}   Ties: ${game.countOfTies}`);
    //Prompt for Player Selection
    var playerSelection = getPlayerSelection();
    var round = new Round(playerSelection);

    //Play the Round
    var outcome = round.determineWinner();
    
    if (outcome == Outcomes.PLAYER_WINS) {
        game.incrementPlayerWins();
    } else if (outcome == Outcomes.COMPUTER_WINS) {
        game.incrementComputerWins();
    } else {
        game.incrementCountOfTies();
    }

    //*********************************ADD CODE HERE *************************************/
    // Display the Round Results from the properties stored in the Round object
    console.log(`${playerSelection} vs ${round.computerSelection}`)
    if (outcome !== Outcomes.TIE) {
        console.log(`${outcome} wins the round!`);
    } else {
        console.log('It\'s a tie!');
    };
}



/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    
    //*********************************ADD CODE HERE *************************************/
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
    let playerSelection = prompt('Rock, paper, or scissors?')

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log('Error: Player selection is invalid')
    } else {
        return playerSelection;
    };
}

