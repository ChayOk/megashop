// $( ".formDel" ).submit(function( event ) {
//     event.preventDefault();
//     let idProd = ( $("#idProd").val() )
//     let name = ( $("#name").val() )
//     let price = ( $("#price").val() )
//     let table = ($("#table"));
//     jsonData = {idProd: id}
//     $.post( "idProd", jsonData )
//         .done(function() {
//             table.append(`<tr><td data-id=`+lastId+`>` +lastId+ `</td><td>`+name+`</td><td>`+price+`</td>
//             <td><button type="button" class="btn btn-primary">&#10006;</button><button type="button" class="btn btn-primary">&#9998;</button></td>
//             </tr>`);
//         }
//     );
    
// });
// $( ".delBtn" ).on('click', function(event) {
//     event.preventDefault();
    
//     let id = $(this).attr('id');
  
//     jsonData = {id: id}
//     $.post( "delete", jsonData )
//         .done(function() {
//           $("#"+id).parent().parent().parent().remove();
//         }
//     );
//   });

$( ".delBtn" ).on('click', function( event ) {
    // $("#formDel").submit();
    event.preventDefault();

    let id = $(this).attr('id');
  
    jsonData = {id: id}
    $.post( "delete", jsonData )
        .done(function() {
          $("#"+id).parent().parent().parent().remove();
        }
    );
});