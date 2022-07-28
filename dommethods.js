// First, create a 16 by 16 grid of square divs with JS
for (let numberDivs = 0; numberDivs < 16*16; numberDivs++) {
    let gridBox = document.createElement('div');
    // gridBox.textContent = ".";
    gridBox.classList.add("size");
    document.querySelector('#wrapper').appendChild(gridBox);
}

// Get all inner divs as a NodeList
let gridCell = document.querySelectorAll(".size");

// Convert inner divs NodeList to array
let gridCellArray = Array.from(gridCell);

// Function to call hover
gridCellArray.forEach(miniCell => {
    miniCell.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "red";
        // setTimeout(function() {
        //     e.target.style.backgroundColor = "red"
        // }, 100);
    });

    miniCell.addEventListener("mouseleave", e => {
        e.target.style.backgroundColor = "white";
        // setTimeout(function() {
        //     e.target.style.backgroundColor = "white"
        // }, 100);
    });
}); /* use an arrow function */


/* NEXT STEPS: figure out how to leave the trail. also try to understand the css and js code you've written. it can be a lot to digest, but I think it is important to solidify your understanding of the fundamentals. */