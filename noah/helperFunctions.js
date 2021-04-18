import { diceRoll, displayRoll } from '../diceroll.js';

//name & pronouns
const nameEl = document.getElementById('name-id');
const pronounsEl = document.getElementById('pronoun-id');

//stats
const bodyStatEl = document.getElementById('body-mod-id');
const heartStatEl = document.getElementById('heart-mod-id');
const mindStatEl = document.getElementById('mind-mod-id');

//description
const descriptionEl = document.getElementById('desc-id');

//background
const backgroundEl = document.getElementById('background-id');

//skills
const skillsEl = document.getElementById('skill-list-id');

//inventory 
const inventoryEl = document.getElementById('inventory-list-id');

//bonds 
const bondsEl = document.getElementById('bond-list-id');

//relationships
const relationshipsEl = document.getElementById('relationship-list-id');


//iterates through a list and conditionally renders each item and its properties
const displayList = (list, listType, parentEl) => {
    list.forEach(item => {
        const li = document.createElement('li');
        switch (listType) {
            case 'skills':
                li.textContent = `${item.name} - ${item.level}`;
                break;

            case 'bonds':
                li.textContent = `${item.name} - ${item.connection}`;
                break;

            case 'relationships':
                li.textContent = `${item.name} - ${item.profession}`;
                break;
        
            case 'inventory':
                li.textContent = item;
                break;

            default:
                break;
        }
        parentEl.appendChild(li);
    });
};

//display all the character sheet elements 
export const populateCharacterSheet = (data) => {

    nameEl.textContent = data.charName;
    pronounsEl.textContent = data.charPronouns;
    
    bodyStatEl.textContent = data.statModBody;
    mindStatEl.textContent = data.statModMind;
    heartStatEl.textContent = data.statModHeart;

    descriptionEl.textContent = data.description;
    backgroundEl.textContent = data.background.summary;

    if (data.background.more) {
        const el = document.getElementById('background-id');
        const link = document.createElement('a');
        link.href = data.background.more;
        link.textContent = ' ...read More';
        link.target = '_blank';
        el.appendChild(link);
    }

    displayList(data.skills, 'skills', skillsEl);
    displayList(data.inventory, 'inventory', inventoryEl);
    displayList(data.bonds, 'bonds', bondsEl);
    displayList(data.relationships, 'relationships', relationshipsEl);

    // attach an event listener to the stat modifiers so that they 
    // roll using that stat
    [bodyStatEl, mindStatEl, heartStatEl].forEach(el => {
        el.addEventListener('click', () => {
            displayRoll('dice-id', 'result-id', diceRoll(Number(el.textContent)));
        });
    });
};
