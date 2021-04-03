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
const selectList = document.getElementById('char-select');

//elements to populate with character data
const elements = [
    charName, charPronouns, statModBody, statModHeart, statModMind, description
];

//character objects
const kal = {
    'charName': 'Kal(vin)',
    'charPronouns': 'she/they/he',
    'statModBody': 1,
    'statModHeart': 0,
    'statModMind': 1,
    'description': "Dark brown eyes and a crooked smile might be the first things you notice about Kal. She stands at about 5'7\", with strawberry blonde hair that's either under a hat or has at least two different kinds of organic detritus in it. Her face is stained with dirt, grass, sweat and... probably a few freckles. She's physically sturdy and almost always in worn and dusty denim pants.",
    'background': {
        'summary': 'First-born farm-adjacent offspring turned rural post deliverer meets old farmer in a truck after a wicked storm. They finish her deliveries for the day, bring the van to a mechanic and he lets her stay in the guest bedroom. During her stay, Kal became fast friends with Hobbs, a donkey on the farm. Months later the daughter of the farmer contacted Kal saying the farmer had taken a bad fall. Kal quickly agreed to deliver pain meds to him excited to pay back the favor and get out of the city. It also meant more time on the trails with Hobbs. The revolution slowed mail deliveries down to mostly personal letters and parcels, wellness checks, and damage reports for the city. While delivering a mysterious book from a person on her route to a library in the city, Kal was offered a part-time position with the library’s Charity Acquisition Team',
        'more': 'https://docs.google.com/document/d/1aiQOJ-ehWwb3cNjCOqaUNep-HvE5XRw7RHSUUUzQ5Y8/edit'
    },
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
const dee = {
    'charName': 'Mel',
    'charPronouns': 'she/her',
    'statModBody': -1,
    'statModHeart': 2,
    'statModMind': 1,
    'description': 'A woman in her early thirties, in the process of gaining back body weight after too many years spent hungry, with a face that doesn’t remember youth. She’s most comfortable in baggy clothing: sweatshirts, big jackets, and has some facial piercings. She’s quick-witted with a held tongue, motherly, welcoming and warm.',
    'background': {
        'summary': 'Depression, nihilism, and general pessimism turned Mel to drugs while at university, before she was caught stealing equipment from a campus research laboratory. She lived houseless for a while after her expulsion, and forged bonds with other lost souls. She joined the revolution from the streets, taken in by friends she’d developed through had given through mutual aid where she had received. Determined to help all disenfranchised peoples, but immunocompromised and hyper-empathetic as lasting side-effects from her long-term drug abuses, her new-world roles are social roles: she acts as a mediator, mental health advocate, resource distributor and surveyor as needed.' 
    },
    'skills': [
        {
            'name': 'Mediation',
            'level': 1
        },
        {
            'name': 'facial expression reading',
            'level': 1
        }
    ],
    'bonds': [
        {
            'name': 'NPC #1',
            'connection': 'TBD' 
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
            'name': 'NPC #1',
            'relation': 'TBD'
        },
        {
            'name': 'PC #2',
            'profession': 'TBD'
        },
        {
            'name': 'PC #1',
            'profession': 'TBD'
        }
    ],
    'inventory': [
        'Narcan',
        'fidget toy',
        'journal'
    ]
};
const anthony = {
    'charName': 'TBD',
    'charPronouns': 'TBD',
    'statModBody': 1,
    'statModHeart': 2,
    'statModMind': -1,
    'description': 'TBD',
    'background': {
        'summary': 'TBD'
    },
    'skills': [
        {
            'name': 'skill 1',
            'level': 1
        },
        {
            'name': 'skill 2',
            'level': 1
        }
    ],
    'bonds': [
        {
            'name': 'NPC #1',
            'connection': 'TBD' 
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
            'name': 'NPC #1',
            'relation': 'TBD'
        },
        {
            'name': 'PC #1',
            'profession': 'TBD'
        },
        {
            'name': 'PC #2',
            'profession': 'TBD'
        }
    ],
    'inventory': [
        'item 1',
        'item 2',
        'item 3'
    ]
};

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


//list out character arrays
function listItems(arr, listElement) {
    for (let i = 0; i < arr.length; i++) {
        const newItem = document.createElement('li');
        newItem.textContent = arr[i];
        listElement.appendChild(newItem);
    }
}

//function to initalize an empty list before listing out character items
function clearItems() {
    inventory.innerHTML = '';
    skills.innerHTML = '';
    bonds.innerHTML = '';
    relationships.innerHTML = '';
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
    background.textContent = char.background.summary;
    if (char.background.more) {
        const link = document.createElement('a');
        link.href = char.background.more;
        link.textContent = 'Read More';
        link.target = '_blank';
        background.appendChild(document.createElement('br'));
        background.appendChild(document.createElement('br'));
        background.appendChild(link);
    }
    clearItems();
    listItems(char.inventory, inventory);
    listItems(arrayToObject(char.skills), skills);
    listItems(arrayToObject(char.relationships), relationships);
    listItems(arrayToObject(char.bonds), bonds);
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


selectList.addEventListener('change', () => {
    switch (selectList.value) {
        case 'kal':
            syncEls(kal, elements);            
            break;
    
        case 'dee':
            syncEls(dee, elements);            
            break;
    
        case 'anthony':
            syncEls(anthony, elements);            
            break;
    
        default:
            break;
    }
});

hideObject(descHeader, description);
hideObject(backHeader, background);