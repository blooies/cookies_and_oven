$(document).ready(function() {

  appController = new ApplicationController(new PrepTableController(), new OvenController(new Oven(), new OvenView()));

 
});
