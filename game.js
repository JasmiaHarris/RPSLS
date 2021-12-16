const Player = require('./player');

class Game {
    constructor() {
        this.playerOne  = new Player("jas");
        this.playerTwo = new Player("nell");

        this.guesture = ["paper", "rock", "scissors", "spock", "lizzard"];
    

    } 

    runGame(){
        this.displayRules();

        
    }
    displayRules(){
      console.log('welcome to our game');
    }
}
module.exports = Game