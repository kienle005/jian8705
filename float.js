// JavaScript Document
$(document).ready(function() {
	//Float
	$('a#float-hide-btn').click(function(){
		if($(this).hasClass('float-show'))
		{
			$('.float-menu').css('margin-right','-140px');
			$(this).removeClass('float-show').addClass('float-hide')
		}
		else {
			$('.float-menu').css('margin-right','0px');
			$(this).removeClass('float-hide').addClass('float-show')
		}
	});
	//Hide Float
	if(window.innerWidth <= 1366)
	{$('a#float-hide-btn').click();}	
});

function toTop() {$('html,body').animate({scrollTop: 0}, 300);}