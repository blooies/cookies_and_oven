//i want to click on 'add to oven' on ANY cookie, 
//and that will populate the first spot
  var OvenView = {
    cookies_tray: [],
    draw: function(cookie) {
      i = this.cookies_tray.length;
      display = cookie.type + ' [' + cookie.status + ']';
      $('#oven tr:nth-child('+ (i+1) + ') td').html(display);
      this.cookies_tray.push(cookie);
    },

    //always redraw based on current view
    redraw: function() {
      for (var i = 0 ; i < this.cookies_tray.length; i++){
        display = this.cookies_tray[i].type + ' [' + this.cookies_tray[i].status + ']';
        $('#oven tr:nth-child('+ (i+1) + ') td').html(display);
      }
    }
  }