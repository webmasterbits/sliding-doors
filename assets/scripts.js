$( "#top-menu , #bot-menu " ).click(function() {

	$('#contact').addClass('animated fadeOut');

	setTimeout(function(){
	  $('#top').addClass('animated slideOutLeft');
	  $('#bot').addClass('animated slideOutRight');
	  $('#logo').addClass('animated fadeOut');
	}, 500);

	setTimeout(function(){
		$('#logo').css('top','80px');
	}, 1500);

	setTimeout(function(){
		$('#logo').removeClass('animated fadeOut');
		$('#logo').addClass('animated fadeIn');
		$('#container-start').css('display','none');
		$('#content').css('display','block');
	}, 1500);

	
	


});