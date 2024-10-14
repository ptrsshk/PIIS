const targets = document.querySelectorAll('.target');
let isDragging = false;
let isSticky = false;
let offsetX, offsetY;
let currentElement = null;
const defaultColor = 'rgb(0, 183, 255)';
let elementPosition = { top: 0, left: 0 };


targets.forEach(target => {
    target.addEventListener('mousedown', (event) => {
        if (isSticky) return; 

        isDragging = true;
        currentElement = target;

        offsetX = event.clientX - target.getBoundingClientRect().left;
        offsetY = event.clientY - target.getBoundingClientRect().top;

        elementPosition.top = target.style.top;
        elementPosition.left = target.style.left;
    });

    target.addEventListener('dblclick', () => {
        isSticky = true;
        if (currentElement !== target) {
            currentElement = target;
            elementPosition.top = target.style.top;
            elementPosition.left = target.style.left;
        }
        target.style.backgroundColor = 'rgb(0, 85, 119)'; 
    });

   
    target.addEventListener('click', () => {
        if (isSticky && currentElement === target) {
            isSticky = false;
            currentElement.style.backgroundColor = defaultColor;
            currentElement = null; 
        }
    });
});
document.addEventListener('mousemove', (event) => {
    if (isDragging || isSticky && currentElement) {
        currentElement.style.left = (event.clientX - offsetX) + 'px';
        currentElement.style.top = (event.clientY - offsetY) + 'px';
    }
});
document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        currentElement = null;

    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && currentElement) {
        currentElement.style.top = elementPosition.top;
        currentElement.style.left = elementPosition.left;
        isDragging = false;
        isSticky = false;
        currentElement.style.backgroundColor = defaultColor; 
        currentElement = null;
    }
});