// Select color input
// Select size input

const color = document.getElementById("colorPicker");
const size = document.getElementById("sizePicker"); 
const table = document.getElementById("pixelCanvas"); 

// When size is submitted by the user, call makeGrid()
size.addEventListener("submit", function (event){
    // variables for both height and width input values
    const height = document.getElementById("inputHeight").value; 
    const width = document.getElementById("inputWidth").value;

    table.innerHTML = " "; // empty the canvas
    event.preventDefault(); 
    makeGrid(height,width);
});

// add color to table data based on the input set by user
table.addEventListener("click", function(event){
    if (event.target.nodeName === "TD"){
        event.target.style = `background-color: ${color.value};`;
    };
});

// make a grid function that takes in 2 arguments
function makeGrid(height,width){
    //for loop for the tr aka height that creates rows
    for (let i = 0; i < height; i++ ){
        let row = table.appendChild(document.createElement('tr'));
        //for loop for the td aka width that creates cells
        for (let j = 0; j < width; j++){
            row.appendChild(document.createElement('td'));
        };
    };
};


