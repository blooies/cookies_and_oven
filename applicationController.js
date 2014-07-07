var ApplicationController = function(prepTableController, ovenController) {
	this.prepTableController = prepTableController;
	this.ovenController = ovenController;
	this.clicked = 0;
	this.listenForMakeBatch();
	this.listenForAddOven();
};


ApplicationController.prototype.listenForMakeBatch = function() {
  var self = this;
  $('#make_batch').on('click', function(e) {
    e.preventDefault();
    if (self.clicked >= 3) {
    }
    else if (self.clicked == 2) {
        self.prepTableController.makeCookie();
        self.clicked = self.clicked + 1;
        $('#tray').append("<div id='cookie_column'><div id='cookie'> </div><div id='cookie'> </div><div id='cookie'> </div></div>")
        $('form')[0].reset();
        $('#tray').after("<div id='add_oven'>add to oven</div>")
        $('#add_oven').addClass('animated_fast flyInRight')

    }
    else {
        self.prepTableController.makeCookie();
        self.clicked = self.clicked + 1;
        $('#tray').append("<div id='cookie_column'><div id='cookie'> </div><div id='cookie'> </div><div id='cookie'> </div></div>")
        $('form')[0].reset();
    }
  })
 }


ApplicationController.prototype.listenForAddOven = function() {
  var self = this;
  $(document).one('click', '#add_oven', function(e) {
    console.log('yo clicked!!!')
  	var tray = self.prepTableController.tray
    for (var i = 0; i < tray.length; i++) {
      self.ovenController.oven.addItem(tray[i])
    }
    $('#messageholder').append("<div id='message'></div><div id='message'></div><div id='message'></div>")
    $('#oven').append("<div id='cookie-holder'><div id='raw-cookie'></div><div id='raw-cookie'></div><div id='raw-cookie'></div></div>")

    // $('.play_box').addClass('animated_fast slideDown')
    // $('.#tray').addClass('animated_fast slideDown')

    // $('.play_box').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
      // $('.play_box').addClass('hidden');
      // $('#tray').addClass('hidden')
      $('#tray #cookie_column').addClass('hidden')
      $('.oven_group').addClass('showing animated_fast bounceTop')
    // })
  })
}


