const baseURL = "https://pokeapi.co/api/v2/"
let url;

const searchTerm = document.querySelector('.form-control');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    url = `${baseURL}pokemon/${searchTerm.value.toLowerCase()}`;
    console.log(url); 
    
    fetch(url)
        .then(function(result) {
            return result.json(); //? jsonifying the data result from url
        }) .then (function(json) {
            displayResults(json);
        });
}

function displayResults(json) {
    let addImg = document.getElementById('spriteImgContainer');
    while (addImg.firstChild) {
        addImg.removeChild(addImg.firstChild);
    }
    
    let name = document.getElementById('infoContainer');
    while (name.firstChild) {
        name.removeChild(name.firstChild);
    }

    let type = document.getElementById('infoContainer');
    while (type.firstChild) {
        type.removeChild(type.firstChild);
    }

    let weight = document.getElementById('infoContainer');
    while (weight.firstChild) {
        weight.removeChild(weight.firstChild);
    }

    let pokeInfo = json;
    console.log(pokeInfo);
    let spriteImg = json.sprites.front_default;
    let pokeName = json.forms[0].name;
    console.log(pokeName);
    let pokeType = json.types[0].type.name;
    console.log(pokeType);
    let pokeWeight = json.weight;
    console.log(pokeWeight);
    let pokeMoves = json.moves;
    console.log(pokeMoves);

    //infoContainer Style
    let infoContainer = document.getElementById('infoContainer');
    infoContainer.style.backgroundColor = "#53de2c";

    //Add Image after submit
    let img = document.createElement('img');
    addImg.appendChild(img);
    img.src = spriteImg;
    img.id = 'spriteImg';

    //Add Name after submit
    let pokeNameP = document.createElement('p');
    pokeNameP.textContent = `Name: ${pokeName}`;
    pokeNameP.id = "name";
    name.appendChild(pokeNameP);

    //Add Type after submit
    let pokeTypeP = document.createElement('p');
    pokeTypeP.textContent = `Type: ${pokeType}`;
    pokeTypeP.id = "type";
    type.appendChild(pokeTypeP);

    //Add Weight after submit
    let pokeWeightP = document.createElement('p');
    pokeWeightP.textContent = `Weight: ${pokeWeight}`;
    pokeWeightP.id = "weight";
    weight.appendChild(pokeWeightP);

    // let results = document.getElementById('resultsRow');
    // let newDiv = document.createElement('div');
    // newDiv.class = "col-sm=3";
    // newDiv.id = "information";
    // results.appendChild(newDiv);

    let moves = document.getElementById('infoContainer');
    let movesText = document.createElement('p');
    movesText.textContent = "Learnable Moves:";
    movesText.id = "movesText";
    moves.appendChild(movesText);

    for(i = 0; i < pokeMoves.length; i++) {  //?Need to figure out how to add to a drop down menu and add a text label before drop down similar to "name: "
        let moves = document.getElementById('infoContainer');
        let movesP = document.createElement('p');
        movesP.textContent = pokeMoves[i].move.name;
        movesP.id = "moves"
        moves.appendChild(movesP);
    }
    
}