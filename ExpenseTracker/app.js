//creating global varable for button 
const pushBtn = document.querySelector(".pushBtn");

//function for button push
pushBtn.addEventListener("click", () => {
    //variables for the input fields
    expense = document.querySelector(".epenseType").value;
    date = document.querySelector(".date").value;
    amount = document.querySelector(".amount").value;
  //if any input fields left bland do nothing
    if (expense == "" || date == "" || amount == ""){ 
        return
    //all input fields inputted do this  
    } else {
  //using methods to inserts a new row and cell
    var table = document.querySelector(".table"), 
        newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2);
      
        //dispying cells to page
        cell1.innerHTML = expense;
        cell2.innerHTML = date;
        cell3.innerHTML = amount;

      //for all the numbers in column 3 return the total
        let sumVal = 0;
        for(var i = 1; i < table.rows.length; i++) {
            sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
        }       
        document.querySelector(".tots").innerHTML = "Total Spent = " + sumVal;

    }
  
  
    //reset the variables
    document.querySelector(".epenseType").value = ""
    document.querySelector(".date").value  = ""
    document.querySelector(".amount").value  = ""


})

