const grid = document.querySelector('#grid');
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    square.style.width = 'calc((100% - 8px * 2 - 8px * 15) / 16)';
    grid.appendChild(square);
}

function randomColor() {
   color =  "#" + Math.floor(Math.random() * 16777215).toString(16);
   return color;
}

document.addEventListener('mouseover', (e) => {
    const el = e.target;
    if(el.classList.contains(`square`)) {
        let count = parseInt(el.dataset.count) || 0;
        if (count < 9) {
            let opacity = count +1;
            el.style.backgroundColor = randomColor();
            el.style.opacity = opacity / 10;
            el.dataset.count = count +1;
        } else if (count === 9) {
            el.style.backgroundColor = "black";
        }
    }

});


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    grid.textContent = "";
    let size= parseInt(prompt('Pick a number from 1 to 100 to build your grid.\nExample: if you pick 10, you get a 10x10 grid with 100 squares total.'));
    if(size <= 0 || size > 100) {
        alert("We cannot create a grid with values lower or equal to 0 or bigger than 100");
    } else {
        for (let i = 0; i < size ** 2; i++) {
                let square = document.createElement('div');
                square.className = 'square';
                square.style.width = `calc((100% - 8px * 2 - 8px * (${size} - 1)) / ${size})`;
                grid.appendChild(square);
        }
    }
});