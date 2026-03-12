const grid = document.querySelector('#grid');
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    grid.appendChild(square);
}

document.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('square')) {
    e.target.style.backgroundColor = "green";
  }
});

let size;
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    grid.textContent = "";
    size= parseInt(prompt('Pick a number from 1 to 100 to build your grid.\nExample: if you pick 10, you get a 10x10 grid with 100 squares total.'));
    if(size <= 0 || size > 100) {
        alert("We cannot create a grid with values lower or equal to 0 or bigger than 100");
    } else {
        for (let i = 0; i < size ** 2; i++) {
                let square = document.createElement('div');
                square.className = 'square';
                grid.appendChild(square);
        }
    }
});