var Oven = function() {
  this.cookies = [];
  this.bakedTime = 0;
};

Oven.prototype.addItem = function(cookie) {
  this.cookies.push(cookie)
};

Oven.prototype.bake = function() {
  this.bakedTime = this.bakedTime + 1;
  for (i=0; i < this.cookies.length; i++) {
   this.cookies[i].bake_time = this.cookies[i].bake_time + 1
   this.cookies[i].checkStatus();
 }
}


