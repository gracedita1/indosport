class SearchBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            /* max-width: 800px; */
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
            padding: 15px;
            border-radius: 10px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
        }
        
        .search-container > input {
            width: 70%;
            padding: 15px;
            border: 0;
            border-bottom: 2px solid #2FA4FF;
            font-weight: bold;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid #2FA4FF;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: #2FA4FF;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 25%;
            background-color: #2FA4FF;
            cursor: pointer;
            padding: 15px;
            margin-left: auto;
            color: white;
            border: 0;
            text-transform: uppercase;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 15px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search your player" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;
  
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
 }
  
 customElements.define("search-bar", SearchBar);