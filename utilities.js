//turn object items (inv, skills, rels, bonds) into an array
export function objToArray(arr) {
    const objects = [];
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        objects.push(flattenObj(el));
    }
    return objects;
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

export function syncEls(char, el) {
    let i = 0;
    for (const key in char) {
        if (el[i]) {
            el[i].textContent = char[key];
        } else {
            break;
        }
        i++;
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