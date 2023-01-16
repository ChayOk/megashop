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
            <button type="button" class="btn btn-primary delBtn" id="{{value['id']}}" style="margin-right:5px">&#10006;</button>
            <button type="button" class="btn btn-primary modalUpdate" data-toggle="modal" id="{{value['id']}}" data-name="{{value['name']}}" data-price="{{value['price']}}" data-target="#exampleModal">&#9998;</button>
            </tr>`);
        }
    );
    
});