
window.addEventListener('load', () => { 
let e = document.createElement('div');
e.innerText = 'Hello World';
document.body.appendChild(e);
// const checkBoard = document.createElement("TABLE"); 
// document.body.appendChild(checkBoard);
// var tbody = document.createElement('tbody'); 
// document.checkBoard.appendChild(tbody);
var body = document.getElementsByTagName("body")[0];

// create elements <table> and a <tbody>
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");

const Letters = ['A','B','C','D','E','G','H'];
// cells creation
for (var j = 0; j < 10; j++) {
  // table row creation
  var row = document.createElement("tr");
  
  for (var i = 0; i < 10; i++) {
    // create element <td> and text node 
    //Make text node the contents of <td> element
    // put <td> at end of the table row
    var cell = document.createElement("td");
    var cellText = document.createTextNode("");
    cellText.innerText = Letters[j]; 
    if(i === 0 || i === 9 || j === 0 || j === 9)
    {
         if(i === 0 && j !== 0 && j !== 9){
         cellText.innerText = Letters[j]; 
         }
    }
    else
    {
        if(j % 2 === 0 && i % 2 === 0 )
         {  
           cell.style.backgroundColor = 'black';    
         }
       else if(j % 2 !== 0 && i % 2 !== 0)
         {
           cell.style.backgroundColor = 'black';  
         }
    }
    

    cell.appendChild(cellText);
    row.appendChild(cell);
    cell.style.padding = '5px';
  }

  //row added to end of table body
  tblBody.appendChild(row);
}

// append the <tbody> inside the <table>
tbl.appendChild(tblBody);
// put <table> in the <body>
body.appendChild(tbl);
// tbl border attribute to 
tbl.setAttribute("border", "1");
tbl.style.padding = '10px'; 

});