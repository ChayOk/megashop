$( ".delBtn" ).on('click', function(event) {
    event.preventDefault();
    
    let delId = $(this).attr('id');
  
    jsonData = {id: delId}
    $.post( "delete", jsonData )
        .done(function() {
          $("#"+delId).parent().parent().remove();
        }
    );
  });