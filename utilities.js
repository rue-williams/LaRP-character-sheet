
export function toggleClass(button, el, tag) {
    button.addEventListener('click', () => {
        el.classList.contains(tag) ? 
            el.classList.remove(tag) :
            el.classList.add(tag);
    });
}