export function diceRoll(mod = 0) {
    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    
    return [dice1, dice2, mod, dice1 + dice2 + mod];
}

export function displayRoll(diceTag, rollTag, roll) {
    document.getElementById(diceTag).textContent = roll[0] + ' + ' + roll[1]; //display the two dice
    document.getElementById(rollTag).textContent = roll[3]; //display the roll
    if (roll[2] !== 0) {
        document.getElementById(diceTag).textContent += ' + ' + roll[2];
    }
}