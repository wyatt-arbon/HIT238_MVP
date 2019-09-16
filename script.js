

const newTr = `
<tr class="hide">
  <td><input type="time" name="mon start time" /></td>
  <td><input type="text" name="event discription" /></td>
  <td><button type="button" onclick="DeleteRowFunction(this)" >Remove</button></td>
</tr>`;



//$tableID.on('click', '.btn_Remove', function () {
//  $('tbody').append(newTr);
// });
function AddRow(tableID){
  let tableRef = document.getElementById(tableID);
  let newRow = tableRef.insertRow(-1);
  let newCell = newRow.insertCell(0);
  let newText = document.createTimeNode("");
  newCell.append(newText);
}

function AddRowFunction(){
  AddRow("my-table");
}

 function DeleteRowFunction(o) {
     var p=o.parentNode.parentNode;
         p.parentNode.removeChild(p);
    }
