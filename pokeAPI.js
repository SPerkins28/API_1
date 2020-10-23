const baseURL = "https://pokeapi.co/api/v2/"
let url;

const searchTerm = document.querySelector('.form-control');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    url = `${baseURL}pokemon/${searchTerm.value.toLowerCase()}`;
    console.log(url); //? Works to this point. Need to fetch data from here
    
    fetch(url)
        .then(function(result) {
            return result.json(); //? jsonifying the data result from url
        }) .then (function(json) {
            // let id = json.id;
            // console.log(id);
            // fetch(`${baseURL}evolution-chain/${id}/`) //? tried to get evolution chain but pokemon ids do not match up with evolution ids in api
            // .then(res => res.json())
            // .then(data => console.log(data))  
            displayResults(json);
        });
}

function displayResults(json) {
    let addImg = document.getElementById('spriteImgContainer');
    while (addImg.firstChild) {
        addImg.removeChild(addImg.firstChild);
    }

    let name = document.getElementById('information');
    while (name.firstChild) {
        name.removeChild(name.firstChild);
    }

    let type = document.getElementById('information');
    while (type.firstChild) {
        type.removeChild(type.firstChild);
    }

    let weight = document.getElementById('information');
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

    // for(i = 0; i < pokeMoves.length; i++) {   //? for loop works. Need to create a drop down menu and create element to put inside html once populated
    //     let moves = document.getElementById('pokeInfo');
    //     let movesP = document.createElement('p');
    //     movesP.textContent = pokeMoves[i].move.name;
    //     moves.appendChild(movesP);
    // }
}