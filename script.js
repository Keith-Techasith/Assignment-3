// Declare global variables
let numRows = 0;
let numCols = 3;
let colorSelected; 

// Add a row
function addR() {
    numRows++;
    let tr = document.createElement("tr");
    tr.setAttribute("id", numRows);
    document.querySelector("tbody").appendChild(tr);
    for(let i=0; i<numCols; i++){
        let td = document.createElement("td");
        document.getElementById(numRows).appendChild(td);
    }
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}