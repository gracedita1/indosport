class playerItem extends HTMLElement {
    set player(player) {
        this._player = player;
        this.render();
    }
  
    render() {
        this.innerHTML = `
            <img class="thumb-player" src="${this._player.strThumb}" alt="player Thumb">
            <div class="player-info">
                <h5>${this._player.strBirthLocation}</h5>
                <p>${this._player.strDescriptionEN}</p>
            </div>`;
    }
 }
  
 customElements.define("player-item", playerItem);