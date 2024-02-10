// for (let i = 0; i < 78; i++) {
//     const hsBox = document.createElement('div');
//     hsBox.id = i + '' ;
//     hsBox.className = 'hsBox';
//     hSquare.appendChild(hsBox);
// }
// ----------------------
// const hSquare = document.getElementById('h-square');

const bigBox = document.getElementById('large-square');
const slider = document.getElementById('slider');
const sliderValueElement = document.getElementById('sliderValue');

for (let i = 0; i < 256; i++) {
    const smallBox = document.createElement('div');
    smallBox.id = i + '' ;
    smallBox.className = 'smallBox';
    bigBox.appendChild(smallBox);
}   
colorDivs();
// ----------------------Calling this function won't work, if you don't first remove the already occupied divs and then add new ones/

slider.addEventListener('input' , ()=>{
    const sliderValue = slider.value;
    sliderValueElement.textContent = sliderValue + 'x' + sliderValue;
    const totalNumberOfSquares = sliderValue*sliderValue;
    changeGrid(totalNumberOfSquares , sliderValue);
});

// function removeExisting (className) {
//     const divsToRemove = document.querySelectorAll('.' + className);
//     divsToRemove.forEach( div => {
//         div.remove();
//     });
// }

function changeGrid ( num , root){

    bigBox.innerHTML = '';
    // removeExisting('smallBox');

    for (let i = 0; i < num; i++) {
    const smallBox = document.createElement('div');
    smallBox.id = i + '' ;
    smallBox.className = 'smallBox';
    bigBox.appendChild(smallBox);
    
    }

    const newHeight =  100 / root;
    sizeDivs(newHeight);
    colorDivs();
}

function sizeDivs ( size ){
    const divs = document.querySelectorAll('.smallBox');
    divs.forEach(div => {
        div.style.width = size+ '%';
    });
}


function colorDivs (){
    const hoveredDiv = document.querySelectorAll('.smallBox');

hoveredDiv.forEach( hoverDiv => {
    hoverDiv.addEventListener('click', () => {
        hoverDiv.style.backgroundColor = 'black';
    });
});
}


