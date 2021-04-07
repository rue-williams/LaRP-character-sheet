//import utility functions
import { objToArray, listItems, clearItems, toggleClass, getBasicInfo, getBackground } from './utilities.js';

//character objects
const kal = {
    'charName': 'Kal(vin)',
    'charPronouns': 'she/they',
    'statModBody': 1,
    'statModHeart': 0,
    'statModMind': 1,
    'description': "Dark brown eyes and a crooked smile might be the first things you notice about Kal. She stands at about 5'7\", with strawberry blonde hair that's either under a hat or has at least two different kinds of organic detritus in it. Her face is stained with dirt, grass, sweat and... probably a few freckles. She's physically sturdy and almost always in worn and dusty denim pants.",
    'background': { 'summary':"Kal grew up outside of the city, and is the eldest of 3. As a young kid, spent her free time doing 4H and other outdoorsy things with her two younger siblings. \n She loves to travel and because she's pretty handy and not at all squeamish, she spent many summers WOOFing around Oregon and California with her youngest sibling, Emily, who has big dreams about getting into agricultural science in the future. \n Kal didn’t have a specific career in mind when she was browsing local job ads, and after seeing a job posting for a mail handling assistant, she started working for her local post office, which then had an opening for rural mail carrier, allowing her to take long drives through the country each week.", 'more': 'https://docs.google.com/document/d/1aiQOJ-ehWwb3cNjCOqaUNep-HvE5XRw7RHSUUUzQ5Y8' },
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
            'name': 'Mel',
            'connection': 'Kal started noticing aid opportunities but not knowing what to do, was referred to Mel because she has skills. Sees her as a coworker/acquaintance.'
        },
        {
            'name': 'Chadtholomew',
            'connection': 'Chadth knows McGinty, Kal gave him a ride into town and they tried to understand music together. Kal gets along easily with him and enjoys his company.'
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
            'name': 'Mel',
            'profession': 'Mutual Aid Coordinator(?)'
        },
        {
            'name': 'Chadtholomew',
            'profession': 'Music Man (razzle dazzle)'
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
    'charName': 'Chadtholomew',
    'charPronouns': 'He/Him',
    'statModBody': 1,
    'statModHeart': 2,
    'statModMind': -1,
    'description': 'A man in his late thirties, wearing a tuxedo that’s just a little too big and hasn’t seen a dry-cleaner since before-times. His dark hair is impeccably styled with a face covered with stage makeup. His grin seems to enter a room first. Fingernails although dirty are kept trimmed.',
    'background': {
        'summary': 'Chadtholomew spent most of his life adjacent to the lap of luxury. Always performing for those more privileged, but somewhat unaware of his un-importance to their lives. As Chadth saw it, providing music to all enhanced the lives of everyone around him. Due to this he can be quite naive to the ways of the world, especially once it collapsed. When the world first started to disintegrate he became a full-time live-in lounge pianist/singer in the bunker belonging to the former CEO of a tech company, playing day and night for the wealthy who refused to recognize the world had moved on. Once the food in the bunker had run out, Chadth saw the wealthy’s new society collapse into madness and greedy despair. He escaped unscathed due to always being seen as an extension of the decor to those around him. He discovered that the world had changed much more than he realized, and found himself for the first time unsure of where his next meal would come from.'
    },
    'skills': [
        {
            'name': 'Musical Entertainment',
            'level': 1
        },
        {
            'name': 'Schmoozing',
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
        'Pitch pipe',
        'Shoe horn',
        'Pocket square'
    ]
};

//elements to populate with character data
const keys = ['charName', 'charPronouns', 'statModBody', 'statModHeart', 'statModMind', 'description'];
const elTags = ['name-id', 'pronoun-id', 'body-mod-id', 'heart-mod-id', 'mind-mod-id', 'desc-id'];

// grab ids and stuff them into vars, gently
const description = document.getElementById('desc-id');
const background = document.getElementById('background-id');

const inventory = document.getElementById('inventory-list-id');
const skills = document.getElementById('skill-list-id');
const relationships = document.getElementById('relationship-list-id');
const bonds = document.getElementById('bond-list-id');

const lists = [inventory, skills, bonds, relationships];
// const listTags = ['inventory-list-id', 'skill-list-id', 'relationship-list-id', 'bond-list-id'];

function init(char) {
    getBasicInfo(char, keys, elTags);       
    getBackground(char, background);
    clearItems(lists);
    listItems(char.inventory, inventory);
    listItems(objToArray(char.skills), skills);
    listItems(objToArray(char.relationships), relationships);
    listItems(objToArray(char.bonds), bonds);
}

const selectList = document.getElementById('char-select');

selectList.addEventListener('change', () => {
    switch (selectList.value) {
        case 'kal':
            init(kal);            
            break;
    
        case 'dee':
            init(dee);            
            break;
    
        case 'anthony':
            init(anthony);            
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