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
    charName, charPronouns, statModBody, statModHeart, statModMind, description, background
];

//character objects
const kal = {
    'charName': 'Kal(vin)',
    'charPronouns': 'she/they/he',
    'statModBody': 1,
    'statModHeart': 0,
    'statModMind': 1,
    'description': "Dark brown eyes and a crooked smile might be the first things you notice about Kal. She stands at about 5'7\", with strawberry blonde hair that's either under a hat or has at least two different kinds of organic detritus in it. Her face is stained with dirt, grass, sweat and... probably a few freckles. She's physically sturdy and almost always in worn and dusty denim pants.",
    'background': "Kal grew up outside of the city, and is the eldest of 3. As a young kid, spent her free time doing 4H and other outdoorsy things with her two younger siblings. \n She loves to travel and because she's pretty handy and not at all squeamish, she spent many summers WOOFing around Oregon and California with her youngest sibling, Emily, who has big dreams about getting into agricultural science in the future. \n Kal didn’t have a specific career in mind when she was browsing local job ads, and after seeing a job posting for a mail handling assistant, she started working for her local post office, which then had an opening for rural mail carrier, allowing her to take long drives through the country each week. \n Kal spent the next couple years working on many rural routes, and after the revolution she continued to do her job, though fewer cars were available and some roads got taken down for weeks or even months during inclement weather, mudslides, and fallen trees. \n On one particular day, there had been a huge wind storm that had taken out power lines and rendered several paved roads too dangerous to navigate by vehicle. Kal was driving through a gravel back road in her delivery van, and managed to get not one but two flat tires due to a difficult-to-spot spool of barbed wire. \n With no phone reception and the evening coming, she was tremendously relieved to be spotted by an older gentleman-- Mr. Joseph McGinty-- as he passed by her in his truck. He offered to help her finish her deliveries for the day, and towed her van to the only mechanic in over 50 miles. Of course, she was pretty well and stranded until the morning, so Mr. McGinty offered to let her stay in the guest bedroom. He had at least ten acres of pasture and a large barn that was attached to his garage. He ran a small rescue, and previously earned most of his income from renting out several stalls in his barn to rich folks from the city. \n Kal got along well with Mr. McGinty, and was given the grand tour in the morning of all the animals that currently resided on the property. A donkey named Bubs, a huge dun mare named Harriet, two goats (both named Philip), a pony named Peanut, an old racehorse named Sabak, and Hobbs, a young gelding mule that was a happy accident between Bubs and Harriet. \n Of course, Hobbs and Kal were fast friends-- Kal had worked with horses and loved to go on trail rides, she knew how to scratch the itchy spots that a horse couldn’t reach and it didn’t take long for Hobbs to protest when she had to leave. She left her phone number with Mr. McGinty and several months of warm summer evenings passed. \n Fall had settled in when Kal got a call from Sarah Keane, Mr. McGinty’s eldest daughter. Kal was surprised to not hear the gruff voice on the other end of the caller ID, but was brought up to speed quickly. \n “Joe-- my dad-- took a pretty bad fall off a ladder last week and broke his ankle-- he’s fine, I mean, he’s in a cast but he’s doing okay. I hate to give you the craziest call, but he could use a hand and you’re the last person he’s got in his phone, and he’s kind of loopy on the painkillers right now. Anyway, I totally understand if you can’t, but even just a morning visit to feed the animals would be a lifesaver.” \n Kal quickly agreed, because not only did she owe Mr. McGinty a favor, she missed the quiet that the city never seemed to have, and was excited to visit again. \n Of course, she wasn’t without ulterior motive-- she wanted to spend time trail riding, and was pretty certain that if she helped Mr. McGinty out for long enough, she could convince him to let her take Hobbs for a jaunt. \n They got along famously, and after the revolution had hit the big city, she found that her mail deliveries slowed down significantly. No more junk mail, no more advertisements-- now it was letters and parcels, wellness checks on older folks, and road condition reports for areas that were unpaved and unable to be frequently serviced by the city. Kal had half the week to spend training Hobbs when she wasn’t out on a delivery, and she loved it. \n She also loved the gossip-- oh the things she got to hear. Rumors, squabbles between towns, and occasionally some very peculiar information. Kal heard it all on the mail runs, everyone wanted to know what the city was doing, since it changed so quickly from day to day. \n One particular day, an older woman-- Stella-- had asked Kal to deliver what seemed to have... at one time? been a book? It was currently a tea-towel-wrapped collection of fragile, browning pages that still retained their numbers, but were out of order and Stella admitted to not having the eyesight needed to sort them anymore. She asked Kal to take it to the Library, you know, the one in the city? \n Of course Kal knew there were multiple libraries in the city, at least three if you counted the one just on the edge of the old city limits. \n \"Tell them it’s from Stella!” the older woman had supplied helpfully, being entirely unable to remember which library was The Library. \n While on her way back to the city, Kal tried to sort the book. The typeface used for the numbering made the 3’s and the 8’s look identical, so she tried to devise from context which page was next, but just as soon as she’d read the last sentence, she’d forgotten it. After an hour of reading it, mumbling aloud as she read, repeating the sentence a few times, she still just couldn’t remember the words. As she read them, they were clear, and it seemed quite impossible that she would forget a moment later, but over and over again it happened, until she bundled the book back up, stuffed it in her carrier bag, and scowled the rest of the way back. Maybe she was just tired from a long day. Maybe she needed glasses. \n The next day it was time to find out which library was The Library. She called the first one, who had no idea who Stella was, and couldn’t accept a book in the condition that Kal had described. The second one was in the process of downsizing their collection to smaller distributed networks of book-shares in favor of opening up the space as a community kitchen. They had recently sent many fragile collection items like Stella’s to the large library downtown, which had a small restoration team form recently. \n [To fill out after next session] Upon delivery of the book, Kal was offered a part-time position with the library’s Charity Acquisition Team, but the onboarding process was more supernatural than she was expecting.",
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
    'background': 'Depression, nihilism, and general pessimism turned Mel to drugs while at university, before she was caught stealing equipment from a campus research laboratory. She lived houseless for a while after her expulsion, and forged bonds with other lost souls. She joined the revolution from the streets, taken in by friends she’d developed through had given through mutual aid where she had received. Determined to help all disenfranchised peoples, but immunocompromised and hyper-empathetic as lasting side-effects from her long-term drug abuses, her new-world roles are social roles: she acts as a mediator, mental health advocate, resource distributor and surveyor as needed.',
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
    'background': 'TBD',
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