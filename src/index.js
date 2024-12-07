"use strict";
const greet = (name) => {
    const element = document.getElementById('app');
    if (element) {
        element.textContent = `Hello ${name}`;
    }
};
greet('Sakshat');
