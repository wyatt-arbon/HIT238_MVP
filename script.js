
function addRow()
{
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        time = document.getElementById("time").value,
        discription = document.getElementById("discription").value;

    cell1.innerHTML = time;
    cell2.innerHTML = discription;
    selectRow()

}

function selectRow(){
  var rowNum,
    table = document.getElementById("table");
  for(var i = 1; i < table.rows.length; i++)
  {
      table.rows[i].onclick = function()
      {
        rowNum = this.rowIndex;
        document.getElementById("time").value = this.cells[0].innerHTML;
        document.getElementById("discription").value = this.cells[1].innerHTML;
      };
  }
}
selectRow()
/*
const $tableID = $('#table');
const newTr = `
<tr class="hide">
  <td><input type="time" name="mon start time" /></td>
  <td><input type="text" name="event discription" /></td>
  <td><button type="button" onclick="DeleteRowFunction(this)" >Remove</button></td>
</tr>`;


//$tableID.on('click', '.btn_Add', function () {
//  $('tbody').append(newTr);
//});
//function AddRow(tableID){
//  let tableRef = document.getElementById(tableID);
//  let newRow = tableRef.insertRow(-1);
//  let newCell = newRow.insertCell(0);
//  let newText = document.createTimeNode("");
//  newCell.append(newText);
//}

function AddRowFunction(){
//  AddRow("my-table");
  $('tbody').append(newTr);
}

 function DeleteRowFunction(o) {
     var p=o.parentNode.parentNode;
         p.parentNode.removeChild(p);
    }
*/
