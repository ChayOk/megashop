$( "#form" ).submit(function( event ) {
    event.preventDefault();
    let name = ( $("#name").val() )
    let price = ( $("#price").val() )
    let table = ($("#table"));
    let lastId = $("#table tr td[data-id]").last().data('id')
    if (!lastId) {
        lastId = 1;
    } else {
        lastId += 1;
    }
    console.log(lastId)
    jsonData = {name: name, price: price}
    $.post( "add", jsonData )
        .done(function() {
            table.append(`<tr><td data-id=`+lastId+`>` +lastId+ `</td><td>`+name+`</td><td>`+price+`</td>
            <td style="display:flex;">
                <form method="post" action="delete" id="formDel" style="margin-right: 5px;">
                    <input type="hidden" id="idProd" name="idProd" value="{{v}}" data-id="{{v}}">
                    <button type="button" class="btn btn-primary delBtn delete" id="{{value['id']}}">&#10006;</button>
                </form>                
                <button type="button" class="btn btn-primary modalUpdate" data-toggle="modal" data-target="#exampleModal">&#9998;</button>
            </tr>`);
        }
    );
    
});

$( "#formUpdate" ).submit(function( event ) {
    event.preventDefault();
    let idProd = ( $("#idProd").val() )
    let name = ( $("#name").val() )
    let price = ( $("#price").val() )
    let table = ($("#table"));
    let lastId = $("#table tr td[data-id]").last().data('id')
    if (!lastId) {
        lastId = 1;
    } else {
        lastId += 1;
    }
    console.log(lastId)
    jsonData = {name: name, price: price}
    $.post( "update", jsonData )
        .done(function() {
            table.append(`<tr><td data-id=`+lastId+`>` +lastId+ `</td><td>`+name+`</td><td>`+price+`</td>
            <td><button type="button" class="btn btn-primary delBtn delete" id="{{value['id']}}">&#10006;</button><button type="button" class="btn btn-primary">&#9998;</button></td>
            </tr>`);
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