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
    document.getElementById("grid").appendChild(tr);
    if(numCols == 0){
        //row needs at least 1 column to display
        addC();
    }else {
        for(let i=0; i<numCols; i++){
            let td = document.createElement("td");
            td.setAttribute("id", "td"+(i+1));
            document.getElementById("tr"+numRows).appendChild(td);
        }
    }
}

// Add a column
function addC() {
    numCols++
    let td = document.createElement("td");
    td.setAttribute("id", "td"+numCols);
    if(numRows == 0){
        addR();
    } else {
        document.getElementById("tr"+numRows).appendChild(td);
    }
    for(let i =0; i< numRows; i++){
        while(document.getElementById("tr"+(i+1)).children.length < numCols){
            let td = document.createElement("td");
            //ID no should be = to # of children + 1 ( as theres always 1 created initially)
            td.setAttribute("id", "td"+(document.getElementById("tr"+(i+1)).children.length+1));
            document.getElementById("tr"+(i+1)).appendChild(td);
        }
    }
    

}


// Remove a row
function removeR() {
    if(numRows <=0){
        alert("No rows to remove");
    }
    numRows--
    document.querySelector("table").removeChild(document.querySelector("table").lastElementChild);
    
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