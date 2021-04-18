export function diceRoll(mod = 0) {
    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    
    return [dice1, dice2, mod, dice1 + dice2 + mod];
}

export function displayRoll(diceTag, rollTag, roll) {
    const diceOut = document.getElementById(diceTag);
    const resultOut = document.getElementById(rollTag);
    diceOut.innerHTML = '';
    diceOut.appendChild(renderDice(roll[0]));
    diceOut.appendChild(renderDice(roll[1]));
    if (roll[2] > 0) {
        const p = document.createElement('p');
        p.innerHTML = ' + ' + roll[2];
        diceOut.appendChild(p);
    } else if (roll[2] < 0) {
        const p = document.createElement('p');
        p.innerHTML = ' ' + roll[2];
        diceOut.appendChild(p);
    }
    if (roll[3] >= 10) {
        resultOut.style.color = 'green';
    } else if (roll[3] <= 6) {
        resultOut.style.color = 'red';
    } else {
        resultOut.style.color = 'black';
    }
    resultOut.textContent = roll[3]; //display the roll
}

function createDice() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '23');
    svg.setAttribute('height', '23');
    svg.setAttribute('fill', 'black');
    svg.setAttribute('viewBox', '0 0 16 16');

    const shell = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    shell.setAttribute('d', 'M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z');
    
    svg.appendChild(shell);

    return svg;
}

function renderPip(svg) {
    const pip = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    pip.setAttribute('cx', '8');
    pip.setAttribute('cy', '8');
    pip.setAttribute('r', '1.5'); 
    svg.appendChild(pip);
}

function renderPips(svg, path) {
    const pip = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pip.setAttribute('d', path);
    svg.appendChild(pip);
}

const pip2path = 'M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z';
const pip3path = 'M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z';
const pip4path = 'M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z';
const pip5path = 'M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z';
const pip6path = 'M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z';
    
function renderDice(value) {
    const svg = createDice();
    switch (value) {
        case 1:
            renderPip(svg);
            svg.setAttribute('fill', 'red');
            break;
        case 2:
            renderPips(svg, pip2path);
            break;
        case 3:
            renderPips(svg, pip3path);
            break;
        case 4:
            renderPips(svg, pip4path);
            break;
        case 5:
            renderPips(svg, pip5path);
            break;
        case 6:
            renderPips(svg, pip6path);
            svg.setAttribute('fill', 'green');
            break;
        default:
            // eslint-disable-next-line no-console
            console.log('Case value failed, default response');
    }
    return svg;  
}