var ApplicationController = function(prepTableController, ovenController) {
	this.prepTableController = prepTableController;
	this.ovenController = ovenController;
	this.clicked = 0;
	this.listenForMakeBatch();
	this.listenForAddOven();
};


ApplicationController.prototype.listenForMakeBatch = function() {
  var self = this;
  $('form').on('submit', function(e) {
    e.preventDefault();
    if (self.clicked >= 3) {
    }
    else if (self.clicked == 2) {
        self.prepTableController.makeCookie();
        self.clicked = self.clicked + 1;
        $('#tray').append("<div id='cookie'> </div><div id='cookie'> </div><div id='cookie'> </div>")
        $('form')[0].reset();
        $('#menu').append("<input id='prep_batches' type='submit' value='add to oven'>")
    }
    else {
        self.prepTableController.makeCookie();
        self.clicked = self.clicked + 1;
        $('#tray').append("<div id='cookie'> </div><div id='cookie'> </div><div id='cookie'> </div>")
        $('form')[0].reset();
    }
  })
 }


ApplicationController.prototype.listenForAddOven = function() {
  var self = this;
  $(document).one('click', '#prep_batches', function(e) {
  	var tray = self.prepTableController.tray
    for (var i = 0; i < tray.length; i++) {
      self.ovenController.oven.addItem(tray[i])
    }
    $('#oven').append("<div id='cookie-holder'><div id='raw-cookie'></div><div id='raw-cookie'></div><div id='raw-cookie'></div></div>")
  })
}


