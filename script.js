const bigBox = document.getElementById('large-square');

for (let i = 0; i < 256; i++) {
    const smallBox = document.createElement('div');
    smallBox.id = i + '' ;
    smallBox.className = 'smallBox';
    bigBox.appendChild(smallBox);
}

const hSquare = document.getElementById('h-square');

for (let i = 0; i < 78; i++) {
    const hsBox = document.createElement('div');
    hsBox.id = i + '' ;
    hsBox.className = 'hsBox';
    hSquare.appendChild(hsBox);
}

const hoveredDiv = document.querySelectorAll('.smallBox');

hoveredDiv.forEach( hDiv => {
    hDiv.addEventListener('mouseenter', () => {
        hDiv.style.backgroundColor = 'red';
    });
});