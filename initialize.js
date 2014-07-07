$(document).ready(function() {

	appController = new ApplicationController(new PrepTableController(), new OvenController(new Oven(), new OvenView()));


	$('h2').addClass('animated bounceTop')
	$('#play_button').addClass('animated bounceTop')

	$('#play_button').on('click', function() {
		$('.intro_game').addClass('animated_fast slideDown')

		$('.intro_game').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
			$('.intro_game').addClass('hidden');
			$('.menu_group').addClass('showing animated_fast flyInLeft')
			$('#tray').addClass('showing animated_fast flyInRight')
		});
	})


	// $('#add_oven').on('click', function() {
	// 	console.log('clicked again!!!')
	// 	$('.play_box').addClass('hidden')
	// 	$('#tray').addClass('hidden')
	// 	$('.oven_group').addClass('showing')
	// })

});
