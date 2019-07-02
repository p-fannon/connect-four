class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = createTokens(21);
    }

    createTokens(num) {
        let tokens = new Array[num];
        for (let i = 0; i < num; i++) {
            tokens[i] = new Token(i, this.id);
        }
        return tokens;
    }
}