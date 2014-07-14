var ApplicationController = function(prepTableController, ovenController) {
	this.prepTableController = prepTableController;
	this.ovenController = ovenController;
	this.clicked = 0;
  this.applyAnimations();
  this.listenForPlayButton();
	this.listenForMakeBatch();
	this.listenForAddOven();
};


ApplicationController.prototype.applyAnimations = function() {
    $('h2').addClass('animated bounceTop')
    $('#play_button').addClass('animated bounceTop')
}


ApplicationController.prototype.listenForPlayButton = function() {
  $('#play_button').on('click', function() {
    $('.intro').addClass('animated_fast slideDown')

    $('.intro').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
      $('.intro').addClass('hidden');
      $('.menu_group').addClass('showing animated_fast flyInLeft');
      $('#tray').addClass('showing animated_fast flyInRight');
    });
  })
}


ApplicationController.prototype.listenForMakeBatch = function() {
  var self = this;
  $("#new_batch").on('submit', function(e) {
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
  	var tray = self.prepTableController.tray
    for (var i = 0; i < tray.length; i++) {
      self.ovenController.oven.addItem(tray[i])
    }
    $('#message_holder').append("<div id='message'></div><div id='message'></div><div id='message'></div>")
    $('#tray #cookie_column').addClass('hidden')
    $('#oven').append("<div id='cookie-holder'><div id='raw-cookie'></div><div id='raw-cookie'></div><div id='raw-cookie'></div></div>")
    $('.oven_box').addClass('showing animated_fast bounceTop')
  })
}


