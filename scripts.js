let container = document.querySelector('.container');
function createGrid(gridAmount){
    for (let i =1; i < gridAmount; i++) {
        const row = document.createElement('div');
        container.appendChild(row);

        for (let j=0; j < gridAmount; j++) {
            const square = document.createElement('div');
            square.setAttribute('id', 'innerSquare');
            square.classList.add('square');
            square.style.width = `${960 / gridAmount}px`;
            square.style.height = `${500 / gridAmount}px`;
            row.appendChild(square)

        }
    }
}

container.addEventListener('mouseover', getColor);
function getColor(event) {let square = event.target
    let red = Math.floor((Math.random() * 256) + 1);
    let green = Math.floor((Math.random() * 256) + 1);
    let blue = Math.floor((Math.random() * 256) + 1);
    return square.style.backgroundColor = `rgb(${red}, ${green},${blue})`;

}



function getSize() {
    gridAmount = prompt("Enter a grid amount: ", 16);
    createGrid(gridAmount);
}
getSize();