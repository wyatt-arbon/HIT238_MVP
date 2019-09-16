
const $tableID = $('#table');
const newTr = `
<tr class="hide">
  <td><input type="time" name="mon start time" /></td>
  <td><input type="text" name="event discription" /></td>
  <td><button type="button" onclick="DeleteRowFunction(this)" >Remove</button></td>
</tr>`;

$('.btn_Add').on('click', () => {
  $('tbody').append(newTr);
});

//$tableID.on('click', '.btn_Remove', function () {
//  $('tbody').append(newTr);
// });

 function DeleteRowFunction(o) {
     //no clue what to put here?
     var p=o.parentNode.parentNode;
         p.parentNode.removeChild(p);
    }
