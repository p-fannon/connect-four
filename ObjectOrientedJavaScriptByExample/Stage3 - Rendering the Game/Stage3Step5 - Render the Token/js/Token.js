class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    drawHTMLToken() {
        const newDiv = `<div></div>`;
        document.getElementById('game-board-underlay').appendChild(newDiv);
        newDiv.setAttribute('id', this.id);
        newDiv.setAttribute('class', 'token');
        newDiv.setAttribute('background', this.owner.color);
    }

    get htmlToken() {
        return document.getElementById(this.id);
    }

}