// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

//NOTE: Ive set it so when creating columns or rows, each column or row will have 
//and ID set to "tr" (for rows, td for columns) and the number row it is.
//i.e. the first row has an id of tr1, the second will be tr2, etc.

// Add a row
function addR() {
    numRows++;
    let tr = document.createElement("tr");
    tr.setAttribute("id", "tr"+numRows);
    document.querySelector("table").appendChild(tr);
    for(let i=0; i<numCols; i++){
        let td = document.createElement("td");
        document.getElementById("tr"+numRows).appendChild(td);
    }
}

// Add a column
function addC() {
    numCols++
    let td = document.createElement("td");
    td.setAttribute("id", "td"+numCols);
    document.querySelector("table").appendChild(td);
    for(let i=0; i<numRows; i++){
        let tr = document.createElement("tr");
        document.getElementById("td"+numCols).appendChild(tr);
    }
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