var OvenView = function() {
}

OvenView.prototype.redraw = function(oven) {
	console.log(oven.cookies)
  	for (var i = 0 ; i < oven.cookies.length; i++){
  	// console.log(oven.cookies[i])
    which_cookie = "nth-child(" + (i+1) + ")"
    // console.log(which_cookie)
    $('#raw-cookie:'+which_cookie).removeClass('still_gooey').removeClass('just_right').removeClass('crispy').addClass(oven.cookies[i].status)
    $('#message:'+which_cookie).text(oven.cookies[i].status)
  }
}
