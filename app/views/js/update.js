// Отправка данных в форму
$( ".modalUpdate" ).on('click', function(event) {
    event.preventDefault();
    
    let updateId = $(this).attr('id');
    let updateName = $(this).attr('data-name');
    let updatePrice = $(this).attr('data-price');
  
    jsonData = {id: updateId, name: updateName, price: updatePrice}
    $.post( "updateData", jsonData )
        .done(function() {
          $(".update").attr('id', updateId);
          $(".idProd").attr('id', updateId);
          $(".idProd").attr('value', updateId);
          $("#updateName").attr('value', updateName);
          $("#updatePrice").attr('value', updatePrice);
        }
    );
  });

// Отправка данных на сервер и динамическое изменение данных 
// (данные уходят, запрос строится, динамическое обновление работает, но в бд изменения не происходят)
// ДЛЯ ПРОВЕРКИ РАСКОММЕНТИТЬ

/*$( ".updateForm" ).submit(function(event) {
event.preventDefault();

let updatedId = $(".idProd").val();
let updatedName = $("#updateName").val();
let updatedPrice = $("#updatePrice").val();

jsonData = {id: updatedId, name: updatedName, price: updatedPrice}
$.post( "update", jsonData )
    .done(function() {
        $(".nameProd"+updatedId).html(updatedName);
        $(".priceProd"+updatedId).html(updatedPrice);
    }
    );
});*/