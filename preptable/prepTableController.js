 var PrepTableController = {
 	cookies: [],
 	clicked: 0,
    makeCookie: function() {
      var type = $("input[name='batch_type']").val();
      var time = $("input[name='bake_time']").val();
      cookie = new Cookie(type, time)
      this.cookies.push(cookie);
      PrepTableView.drawCookies(this.cookies)
    },
    checkFullTray: function() {
    	if (this.cookies.length === 3) {
    		console.log('true')
    		return true;
    	}
    	console.log('false')
    	console.log(this.cookies)
    	return false;
    }
  }
