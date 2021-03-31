// grab ids and stuff them into vars, gently
const charName = document.getElementById('name-id');
const charPronouns = document.getElementById('pronoun-id');
const statModBody = document.getElementById('body-mod-id');
const statModHeart = document.getElementById('heart-mod-id');
const statModMind = document.getElementById('mind-mod-id');
const description = document.getElementById('desc-id');
const descHeader = document.getElementById('desc-h4-id');
const background = document.getElementById('background-id');
const backHeader = document.getElementById('back-h4-id');
const inventory = document.getElementById('inventory-list-id');
const skills = document.getElementById('skill-list-id');
const relationships = document.getElementById('relationship-list-id');
const bonds = document.getElementById('bond-list-id');

//a character object example, can be used as a template for each character
const kal = {
    'charName': 'Kal(vin)',
    'charPronouns': 'she/they/he',
    'statModBody': 1,
    'statModHeart': 0,
    'statModMind': 1,
    'description': "Dark brown eyes and a crooked smile might be the first things you notice about Kal. She stands at about 5'7\", with strawberry blonde hair that's either under a hat or has at least two different kinds of organic detritus in it. Her face is stained with dirt, grass, sweat and... probably a few freckles. She's physically sturdy and almost always in worn and dusty denim pants.",
    'background': 'See attached sheet',
    'skills': [
        {
            'name': 'horseback riding',
            'level': 1
        },
        {
            'name': 'Nature',
            'level': 1
        }
    ],
    'bonds': [
        {
            'name': 'Joseph McGinty',
            'connection': 'Adopted HeeHobs from him' 
        },
        {
            'name': 'PC #1',
            'connection': 'TBD' 
        },
        {
            'name': 'PC #2',
            'connection': 'TBD' 
        }
    ],
    'relationships': [
        {
            'name': 'Joseph McGinty',
            'relation': "farmer who towed Kal's van"
        },
        {
            'name': 'Sarah Keane',
            'profession': "farmer's daughter"
        },
        {
            'name': 'HeeHobs',
            'profession': 'Mule'
        },
        {
            'name': 'PC#1',
            'profession': 'TBD'
        }
    ],
    'inventory': [
        'multi-tool',
        'phone',
        'backpack',
        '100ft of rope',
        'Saddle and pad',
        'reins',
        'halter',
        'hoof pick',
        'curry comb',
        'brush',
        'Food',
        'grain',
        'water bag (full)',
        'sleeping bag',
        'change of clothes',
        'compass',
        'Map (Oregon)',
        'community billboard',
        'mailbag (full)'
    ]
};

//elements to populate with character data
const elements = [
    charName, charPronouns, statModBody, statModHeart, statModMind, description, background
];

function arrayToObject(arr) {
    const objArray = [];
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        objArray.push(flattenObj(el));
    }
    return objArray;
}

function flattenObj(obj) {
    const output = [];
    for (const key in obj) {
        output.push(obj[key]);
    }
    return output[0] + ': ' + output[1];
}

function hideObject(button, el) {
    button.addEventListener('click', () => {
        if (el.classList.contains('hidden')) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
}

function listItems(arr, listElement) {
    for (let i = 0; i < arr.length; i++) {
        const newItem = document.createElement('li');
        newItem.textContent = arr[i];
        listElement.appendChild(newItem);
    }
}

function syncEls(char, el) {
    let i = 0;
    for (const key in char) {
        if (el[i]) {
            el[i].textContent = char[key];
        } else {
            break;
        }
        i++;
    }
    listItems(char.inventory, inventory);
    listItems(arrayToObject(char.skills), skills);
    listItems(arrayToObject(char.relationships), relationships);
    listItems(arrayToObject(char.bonds), bonds);
}

syncEls(kal, elements);
hideObject(descHeader, description);
hideObject(backHeader, background);