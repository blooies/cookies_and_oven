var OvenView = function() {
}

OvenView.prototype.redraw = function(oven) {
  for (var i = 0 ; i < oven.cookies.length; i++){
    which_cookie = "nth-child(" + (i+1) + ")"
    $('#raw-cookie:'+which_cookie).removeClass('still_gooey').removeClass('just_right').removeClass('crispy').addClass(oven.cookies[i].status)
  }
}
