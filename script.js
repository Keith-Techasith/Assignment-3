// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// NOTE: Ive set it so when creating columns or rows, each column or row will have 
// and ID set to "tr" (for rows, td for columns) and the number row it is.
// i.e. the first row has an id of tr1, the second will be tr2, etc.

// NOTE2: im considering rows as primary and columns as secondary.
// So each column node will be a child of its row node

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
    // check each row. While a row has less children than the number of columns,
    // add columns to that row.
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
    if(numCols <=0){
        alert("No columns to remove"); 
    }
    for(let i = 0; i< numRows; i++ ){
        let tr = document.getElementById("tr" +(i+1)); 
        tr.removeChild(tr.lastChild);
    }
    numCols--; 
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    selectColor();
    for(let i =0; i < numCols; i++){
        let tr = document.getElementById("tr" + (i+1));
        for(let j=0; j<tr.children.length; j++){
            let td= tr.children[j];
            if(td.style.backgroundColor==""){ 
            td.style.backgroundColor = colorSelected;
        }
    }
    }
}

// Fill all cells
function fillAll(){
    selectColor(); 
    for(let i =0; i< numRows; i++){
    let tr = document.getElementById("tr"+ (i+1));
        for(let j =0; j< numCols; j++){
            let td = tr.children[j];
            if(td.style.backgroundColor ===""){
                td.style.backgroundColor = colorSelected; 
            }
        }
}
}


// Clear all cells
function clearAll(){
    selectColor();
    for(let i=0; i<numRows; i++){
        let tr = document.getElementById("tr"+(i+1));
        for(let j =0; j<numCols; j++){
            let td = tr.children[j];
            td.style.backgroundColor= "white"; 
            
        }
    }
}