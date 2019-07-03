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
	
	
    /**
	 * Branches code, depending on what key player presses
	 * @param	{Object}	e - Keydown event object
	 */
	handleKeydown(e) {
        if (this.ready) {
            if (e.key === "ArrowLeft") {
                this.activePlayer.activeToken.moveLeft();
            } else if (e.key === "ArrowRight") {
                this.activePlayer.activeToken.moveRight(this.board.columns);
            } else if (e.key === "ArrowDown") {
                this.playToken()
            }
        }
    }
    
    playToken() {
        const tokenPosition = this.activePlayer.activeToken.columnLocation
        let occupied = 0;
        for (let player of this.players) {
            for (let token of player.tokens) {
                if (token.columnLocation === tokenPosition && token.dropped == true) {
                    occupied++;
                }
            }
        }
        if (occupied < this.board.rows) {
            const location = this.activePlayer.activeToken.columnLocation
            this.activePlayer.activeToken.drop(this.board.spaces[location][(this.board.rows - 1) - occupied])
        }
    }
}