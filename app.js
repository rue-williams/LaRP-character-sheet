//import utility functions
import { objToArray, listItems, clearItems, toggleClass, getBasicInfo, getBackground } from './utilities.js';
import { diceRoll, displayRoll } from './diceroll.js';

// grab ids and stuff them into vars, gently
const description = document.getElementById('desc-id');
const background = document.getElementById('background-id');
const keys = ['charName', 'charPronouns', 'statModBody', 'statModHeart', 'statModMind', 'description'];
const elTags = ['name-id', 'pronoun-id', 'body-mod-id', 'heart-mod-id', 'mind-mod-id', 'desc-id'];
const listTags = ['inventory-list-id', 'skill-list-id', 'relationship-list-id', 'bond-list-id'];
const listKeys = ['inventory', 'skills', 'relationships', 'bonds'];

// //fetch character objects
let characters = [];
async function getChar() {
    const res = await fetch('./assets/character.json');
    const resJson = await res.json();
    characters = resJson;
}

getChar();

function init(char) {
    getBasicInfo(char, keys, elTags);       
    getBackground(char, background);
    clearItems(listTags);
    listItems(char.inventory, 'inventory-list-id');
    for (let i = 1; i < listTags.length; i++) {
        listItems(objToArray(char[listKeys[i]]), listTags[i]);
    }
    const charStats = [char.statModBody, char.statModHeart, char.statModMind];
    for (let i = 0; i < statButtons.length; i++) {
        const el = document.getElementById(statButtons[i]);
        el.addEventListener('click', () => {
            displayRoll('dice-id', 'result-id', diceRoll(charStats[i]));
        });    
    }
}

const selectList = document.getElementById('char-select');
selectList.addEventListener('change', () => {
    switch (selectList.value) {
        case 'kal':
            init(characters[0]);            
            break;
    
        case 'mel':
            init(characters[1]);            
            break;
    
        case 'chadth':
            init(characters[2]);            
            break;
    
        default:
            break;
    }
});

const descHeader = document.getElementById('desc-h4-id');
const backHeader = document.getElementById('back-h4-id');
toggleClass(descHeader, description, 'hidden');
toggleClass(backHeader, background, 'hidden');

// const colorSwapButton = document.getElementById('color-swap-button');
// toggleClass(colorSwapButton, document.body, 'dark-mode');

const rollButton = document.getElementById('dice-roller-id');
const statButtons = ['body-stat-id', 'heart-stat-id', 'mind-stat-id'];

rollButton.addEventListener('click', () => {
    displayRoll('dice-id', 'result-id', diceRoll());
});
