import '../component/player-item.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const playerListElement = document.querySelector("#playerList");

    const onButtonSearchClicked = () => {
            searchplayer(searchElement.value);
    };

    const searchplayer = (keyword) => {
        DataSource.searchplayer(keyword)
                .then(renderResult)
                .catch(fallbackResult)
    }

    const renderResult =  results => {
        playerListElement.style.display = "flex";
        playerListElement.children[0].innerHTML = "";
        playerListElement.children[0].style.width = "20%";
        playerListElement.children[1].innerHTML = "";
        playerListElement.children[2].innerHTML = "";
        playerListElement.children[3].innerHTML = "";
        let i = 0;
        
        results.forEach(player => {  
            const playerItemElement = document.createElement("player-item");
            playerItemElement.player = player

            playerListElement.children[i].appendChild(playerItemElement);
            if (i==3){
                i=-1;
            }
            
            i+=1;
        })
    };

    const fallbackResult = message => {
        playerListElement.children[0].innerHTML = "";
        playerListElement.children[1].innerHTML = "";
        playerListElement.children[2].innerHTML = "";
        playerListElement.children[3].innerHTML = "";
        playerListElement.children[0].innerHTML += `<h2 class="placeholder">${message}</h2>`;
        playerListElement.children[0].style.width = "100%";
        playerListElement.style.display = "block";
    };

    searchplayer('');

    searchElement.clickEvent = onButtonSearchClicked;

};

export default main;