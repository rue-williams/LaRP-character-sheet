//turn object items (inv, skills, rels, bonds) into an array
export function objToArray(arr) {
    const objects = [];
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        objects.push(flattenObj(el));
    }
    return objects;
}

export function populate(el, content) {
    el.textContent = content;
}

export function getBackground(char, el) {
    populate(el, char.background.summary);
    if (char.background.more) {
        const link = document.createElement('a');
        link.href = char.background.more;
        link.textContent = 'Read More';
        link.target = '_blank';
        el.appendChild(document.createElement('br'));
        el.appendChild(document.createElement('br'));
        el.appendChild(link);
    }
}

function flattenObj(obj) {
    const out = [];
    for (const key in obj) {
        out.push(obj[key]);
    }
    return out[0] + ': ' + out[1];
}

//list out character arrays
export function listItems(arr, listElement) {
    for (let i = 0; i < arr.length; i++) {
        const newItem = document.createElement('li');
        newItem.textContent = arr[i];
        listElement.appendChild(newItem);
    }
}

//function to initalize an empty list before listing out character items
export function clearItems(list) {
    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = '';
    }
}

export function toggleClass(button, el, tag) {
    button.addEventListener('click', () => {
        if (el.classList.contains(tag)) {
            el.classList.remove(tag);
        } else {
            el.classList.add(tag);
        }
    });
}