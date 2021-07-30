// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);


class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above
        let select = Math.floor(Math.random()*3);

        if (select == 0) {
            return Selections.ROCK;
        } else if (select == 1) {
            return Selections.PAPER;
        } else {
            return Selections.SCISSORS;
        };
    }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner() {
        //*********************************ADD CODE HERE *************************************/
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
        if (this.playerSelection == this.computerSelection) {
            return Outcomes.TIE;
        } else if (this.playerSelection == Selections.ROCK && this.computerSelection == Selections.SCISSORS) {
            return Outcomes.PLAYER_WINS;
        } else if (this.playerSelection == Selections.ROCK && this.computerSelection == Selections.PAPER) {
            return Outcomes.COMPUTER_WINS;
        } else if (this.playerSelection == Selections.PAPER && this.computerSelections == Selections.ROCK) {
            return Outcomes.PLAYER_WINS;
        } else if (this.playerSelection == Selections.PAPER && this.computerSelections == Selections.SCISSORS) {
            return Outcomes.COMPUTER_WINS;
        } else if (this.playerSelection == Selections.SCISSORS && this.computerSelections == Selections.PAPER) {
            return Outcomes.PLAYER_WINS;
        } else if (this.playerSelection == Selections.SCISSORS && this.computerSelections == Selections.ROCK) {
            return Outcomes.COMPUTER_WINS;
        } else {
            return "blah blah blah you messed up";
        }
    }
}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;