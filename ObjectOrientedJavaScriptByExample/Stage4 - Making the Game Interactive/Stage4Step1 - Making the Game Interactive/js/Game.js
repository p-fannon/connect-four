class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }
    
    
    /** 
     * Returns active player.
     * @return  {Object}    player - The active player.
     */
	get activePlayer() {
        return this.players.find(player => player.active);
	}
    
    
    /** 
     * Creates two player objects
     * @return  {array}    An array of two player objects.
     */
    createPlayers() {
        const players = [new Player('Player 1', 1, '#e15258', true),
                         new Player('Player 2', 2, '#e59a13')];
        return players;
    }
    
    
    /** 
     * Initializes game. 
     */
    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    handleKeydown(eventKey) {
        if (this.ready && eventKey != "") {
            console.log(eventKey + ' was pressed');
        }
    }
}