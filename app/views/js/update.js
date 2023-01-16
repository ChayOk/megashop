// $( "#formUpdate" ).submit(function( event ) {
//     event.preventDefault();
//     let idProd = ( $("#idProd").val() )
//     let name = ( $("#name").val() )
//     let price = ( $("#price").val() )
//     let table = ($("#table"));
//     let lastId = $("#table tr td[data-id]").last().data('id')
//     if (!lastId) {
//         lastId = 1;
//     } else {
//         lastId += 1;
//     }
//     console.log(lastId)
//     jsonData = {name: name, price: price}
//     $.post( "update", jsonData )
//         .done(function() {
//             table.append(`<tr><td data-id=`+lastId+`>` +lastId+ `</td><td>`+name+`</td><td>`+price+`</td>
//             <td><button type="button" class="btn btn-primary delBtn delete" id="{{value['id']}}">&#10006;</button><button type="button" class="btn btn-primary">&#9998;</button></td>
//             </tr>`);
//         }
//     );
    
// });

$( ".modalUpdate" ).on('click', function(event) {
    event.preventDefault();
    
    let updateId = $(this).attr('id');
    let updateName = $(this).attr('data-name');
    let updatePrice = $(this).attr('data-price');
  
    jsonData = {id: updateId, name: updateName, price: updatePrice}
    $.post( "updateData", jsonData )
        .done(function() {
          $(".update").attr('id', updateId);
          $("#updateName").attr('value', updateName);
          $("#updatePrice").attr('value', updatePrice);
        }
    );
  });

$( ".modalAdd" ).click(function() {
    $(".update").hide();
    $(".add").show(); 
});
$( ".modalUpdate" ).click(function() {
    $(".add").hide();
    $(".update").show();
});