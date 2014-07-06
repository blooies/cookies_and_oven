var OvenController = function(oven, view) {
	this.oven = oven;
	this.view = view;
	this.listenforBake();
}


OvenController.prototype.listenforBake = function() {
	var self = this;
	$('#bake').on('click', function(){
		self.view.redraw(self.oven);
		self.oven.bake();
	})
}

