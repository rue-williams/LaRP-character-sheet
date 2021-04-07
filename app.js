//import utility functions
import { objToArray, listItems, clearItems, toggleClass, getBasicInfo, getBackground } from './utilities.js';

// //fetch character objects
let characters = [];
async function getChar() {
    const res = await fetch('./assets/character.json');
    const resJson = await res.json();
    characters = resJson;
}

getChar();

// grab ids and stuff them into vars, gently
const description = document.getElementById('desc-id');
const background = document.getElementById('background-id');
const keys = ['charName', 'charPronouns', 'statModBody', 'statModHeart', 'statModMind', 'description'];
const elTags = ['name-id', 'pronoun-id', 'body-mod-id', 'heart-mod-id', 'mind-mod-id', 'desc-id'];
const listTags = ['inventory-list-id', 'skill-list-id', 'relationship-list-id', 'bond-list-id'];
const listKeys = ['inventory', 'skills', 'relationships', 'bonds'];

function init(char) {
    getBasicInfo(char, keys, elTags);       
    getBackground(char, background);
    clearItems(listTags);
    listItems(char.inventory, 'inventory-list-id');
    for (let i = 1; i < listTags.length; i++) {
        listItems(objToArray(char[listKeys[i]]), listTags[i]);
    }
}

const selectList = document.getElementById('char-select');
selectList.addEventListener('change', () => {
    switch (selectList.value) {
        case 'kal':
            init(characters[0]);            
            break;
    
        case 'dee':
            init(characters[1]);            
            break;
    
        case 'anthony':
            init(characters[2]);            
            break;
    
        default:
            break;
    }
});

const colorSwapButton = document.getElementById('color-swap-button');
const descHeader = document.getElementById('desc-h4-id');
const backHeader = document.getElementById('back-h4-id');

toggleClass(descHeader, description, 'hidden');
toggleClass(backHeader, background, 'hidden');
toggleClass(colorSwapButton, document.body, 'dark-mode');