class Player {
    constructor (name, position, color) {
        this.name = name;
        this.position = position;
        this.color = color;
        this.tokens = Board.spaces / 2;
    }
}