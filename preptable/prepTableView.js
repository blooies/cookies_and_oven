 var PrepTableView = {
    drawCookies: function(cookies) {
      $("#prep_batches").empty();
      for (var i = 0; i < cookies.length; i++) {
        html = "<li id=" + i + '>'
        html+= cookies[i].type
        html+= '<input type="submit" value="add to oven"></li>'
        $('#prep_batches').append(html);
      }

    }
    // removeCookie: function(cookie) {
    //   $('#add_oven').click(function() {
    //     alert("your cookie has been added to the oven!");
    //     var cookie_and_button = $(this).parent().remove();
    //     OvenView.draw(our_oven);
    //   });
    // }

}