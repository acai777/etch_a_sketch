// First, create a 16 by 16 grid of square divs with JS
for (let numberDivs = 0; numberDivs < 16*16; numberDivs++) {
    let gridBox = document.createElement('div');
    // gridBox.textContent = ".";
    gridBox.classList.add("size");
    document.querySelector('#wrapper').appendChild(gridBox);
}