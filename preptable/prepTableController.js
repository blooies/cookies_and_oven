var PrepTableController = function() {
  this.tray = [];
 }


PrepTableController.prototype.makeCookie = function() {
      var type = $("input[name='batch_type']").val();
      var time = $("input[name='bake_time']").val();
      cookie = new Cookie(type, time)
      this.tray.push(cookie);
}

PrepTableController.prototype.checkFullTray = function() {
    	if (this.tray.length === 3) {
    		return true;
    	}
    	return false;
}
  
