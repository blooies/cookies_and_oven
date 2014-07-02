function Cookie(type, cook_time) {
  this.type = type;
  this.cook_time = cook_time;
  this.bake_time = 0;
  this.status = "raw";
  this.prepped = false;
};


Cookie.prototype.checkStatus = function() {
  if (this.bake_time < this.cook_time) {
    console.log("gooey")
    this.status = "still_gooey";
  }
  else if (this.bake_time == this.cook_time) {
    this.status = "just_right";
  }
  else {
    console.log('crispy')
    this.status = "crispy";
  }
};
