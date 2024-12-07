const greet = (name: string): void => {
    const element = document.getElementById('app');
    if (element) {
        element.textContent = `Hello ${name}`;
    }
};
    
greet('Sakshat');