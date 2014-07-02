$(document).ready(function() {

  our_oven = new Oven();


  //listener for "make batch" button
  $('form').on('submit', function(e) {
    e.preventDefault();
    PrepTableController.makeCookie();
    $('form')[0].reset();
  })


  //listener for "add to oven" button
  $(document).on('click', '#prep_batches li', function(e) {
    current_cookie = PrepTableController.cookies[this.id]
    our_oven.addItem(current_cookie)
    //prevent somebody from clicking 'add oven' twice for one cookie
    if (current_cookie.prepped == false) {
      OvenView.draw(current_cookie)
    };
    current_cookie.prepped = true;
  })


  //listener for "bake for 1 minute" button
  $('#bake').on('click', function(){
    our_oven.bake();
    OvenView.redraw();
  })

});
