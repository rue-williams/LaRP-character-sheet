// grab ids and stuff them into vars
const charName = document.getElementById('name-id');
const charPronouns = document.getElementById('pronoun-id');
const statModBody = document.getElementById('body-mod-id');
const statModHeart = document.getElementById('heart-mod-id');
const statModMind = document.getElementById('mind-mod-id');
const description = document.getElementById('desc-id');
const background = document.getElementById('background-id');
const inventory = document.getElementById('inventory-list-id')

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

// set event listeners to update state and DOM
charName.textContent = kal.charName;
charPronouns.textContent = kal.charPronouns;
statModBody.textContent = kal.statModBody;
statModHeart.textContent = kal.statModHeart;
statModMind.textContent = kal.statModMind;
description.textContent = kal.description;
background.textContent = kal.background;


function listItems(char, listElement) {
    for (let i = 0; i < char.inventory.length; i++) {
        const item = char.inventory[i];
        const newItem = document.createElement('li');
        newItem.textContent = item;
        listElement.appendChild(newItem);
    }
}

listItems(kal, inventory);

