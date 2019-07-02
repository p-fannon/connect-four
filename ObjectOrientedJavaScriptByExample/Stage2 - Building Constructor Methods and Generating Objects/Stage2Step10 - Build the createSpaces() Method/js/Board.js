class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    createSpaces() {
        const spaces = [];
        for (let x = 0; x < this.columns; x++) {
            const boardColumn = [];
            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                boardColumn.push(space);
            }
            spaces.push(boardColumn);
        }

        return spaces;
    }
}