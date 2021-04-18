
import { diceRoll, displayRoll } from './diceroll.js';
import { toggleClass } from './utilities.js';
import { populateCharacterSheet } from './noah/helperFunctions.js';

const fetchCharacter = (name) => {
    fetch(`./assets/${name}.json`)
        .then(res => res.json())
        .then(character => {
            populateCharacterSheet(character);
        });
};

const selectList = document.getElementById('char-select');
selectList.addEventListener('change', () => {
    fetchCharacter(selectList.value);
});

const rollButton = document.getElementById('dice-roller-id');
rollButton.addEventListener('click', () => displayRoll('dice-id', 'result-id', diceRoll()));
    
// toggles description and background visibility
const description = document.getElementById('desc-id');
const background = document.getElementById('background-id');
        
const descHeader = document.getElementById('desc-h4-id');
const backHeader = document.getElementById('back-h4-id');
        
toggleClass(descHeader, description, 'hidden');
toggleClass(backHeader, background, 'hidden');