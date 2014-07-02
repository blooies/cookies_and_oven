 var PrepTableController = {
 	cookies: [],
    makeCookie: function() {
      var type = $("input[name='batch_type']").val();
      var time = $("input[name='bake_time']").val();
      cookie = new Cookie(type, time)
      this.cookies.push(cookie);
      PrepTableView.drawCookies(this.cookies)
    }
  }
