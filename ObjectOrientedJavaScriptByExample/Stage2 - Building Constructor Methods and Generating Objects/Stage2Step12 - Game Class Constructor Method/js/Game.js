import { Board } from './Board'
import { Player } from './Player'

class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    createPlayers() {
        let players = [];
        const playerOne = new Player('Player 1', 1, '#e15258', true);
        const playerTwo = new Player('Player 2', 2, '#e59a13');
        players.push(playerOne);
        players.push(playerTwo);
        return players;
    }
}