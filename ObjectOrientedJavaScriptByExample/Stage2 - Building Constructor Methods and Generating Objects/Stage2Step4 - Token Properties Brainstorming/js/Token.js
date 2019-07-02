class Token {
    constructor(playerId, color, tokenPlayed = false) {
        this.playerId = playerId;
        this.color = color;
        this.tokenId = playerId + UUID.random.toString();
        this.tokenPlayed = tokenPlayed;

    }
}