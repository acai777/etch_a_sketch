// Define the function to create the grid 
function createGrid(number) {
    for (let numberDivs = 0; numberDivs < number*number; numberDivs++) {
        let gridBox = document.createElement('div');
        gridBox.classList.add("size");
        gridBox.style["flex-basis"] = "calc((100%/" + originalGridSize + "))";
        document.querySelector('#wrapper').appendChild(gridBox);
    }
}

// Function to delete the grid 
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// First, create a 16 by 16 grid of square divs with JS
let originalGridSize = 16; 
createGrid(originalGridSize);

// Allow user to change grid size 
let buttonClick = document.getElementById("gridButton");
buttonClick.addEventListener("click", () => {
    let newGridSize = document.getElementById("numberForm").value;

    if (newGridSize > 100 || newGridSize < 10) {
        window.alert("Number must be between 10 and 100, inclusive");
        return;
    }
    //window.alert(newGridSize);

    originalGridSize = newGridSize;

    // Remove all child elements from div container first 
    let wrapperParent = document.getElementById("wrapper");
    removeAllChildNodes(wrapperParent);
    createGrid(originalGridSize);


    // Get all inner divs as a NodeList
    let gridCell = document.querySelectorAll(".size");

    // Convert inner divs NodeList to array
    let gridCellArray = Array.from(gridCell);

    // Function to call hover
    gridCellArray.forEach(miniCell => {
        miniCell.addEventListener("mouseover", e => {
            //let randomColor = Math.floor(Math.random()*16777215).toString(16);
            //e.target.style.backgroundColor = "#" + randomColor; // NEED the hashtag in front. 
            e.target.style.backgroundColor = "black"; 
        });

        // miniCell.addEventListener("mouseleave", e => {
        //     e.target.style.backgroundColor = "white";
        // });
}); 


});

// Get all inner divs as a NodeList
let gridCell = document.querySelectorAll(".size");

// Convert inner divs NodeList to array
let gridCellArray = Array.from(gridCell);

// Function to call hover
gridCellArray.forEach(miniCell => {
    miniCell.addEventListener("mouseover", e => {
        //let randomColor = Math.floor(Math.random()*16777215).toString(16);
        //e.target.style.backgroundColor = "#" + randomColor; // NEED the hashtag in front. 
        e.target.style.backgroundColor = "black"; 
    });

    // miniCell.addEventListener("mouseleave", e => {
    //     e.target.style.backgroundColor = "white";
    // });
}); 
/* use an arrow function */

// Allow user to reset 
let resetClick = document.getElementById("eraser");
resetClick.addEventListener("click",() => {
    // Get all inner divs as a NodeList
    let gridCell = document.querySelectorAll(".size");

    // Convert inner divs NodeList to array
    let gridCellArray = Array.from(gridCell);

    gridCellArray.forEach(miniCell => {
        miniCell.style["backgroundColor"] = "white";
    });

});











/* NEXT STEPS: try to understand the css and js code you've written. it can be a lot to digest, but I think it is important to solidify your understanding of the fundamentals. Need to figure out how to change the grid size permanently. seems like the click event listener changes the grid size, but only temporarily */

/*
SELF-NOTE:
https://stackoverflow.com/questions/22273343/onclick-not-creating-permanent-change 

do NOT have the form tag. Originally, the changes made from addEventListener were only temporarily. This is because you were using the form tag. 

"when the form tag is used and you click on the button the colors change but the form also submits, which leads to reload of the page. This way you loose the colors of the div elements."

Also, for some reason, after you change the grid size, the hovering feature does NOT work if you do not put the same hovering code inside the addEventListener for click. I am not sure why. Need to investiate this.
*/