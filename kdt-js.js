// JavaScript Document
$(document).ready(function() {
	$('#main-slider').slick({
		autoplay:true,
		arrows:false,
		dots:true,
		fade:true,
	});
	$('#character-slider').slick({
		autoplay:true,
		arrows:true,
		dots:false,
		fade:false,
	});
	//Tabs
	$('.tab-content').hide();
	$('.tab-content').first().show();
	$('ul#tab-menu li a.tab-link').click(function(){
		$('.tab-active').removeClass('tab-active');
		$(this).addClass('tab-active');	
		var i = $(this).data('tab');
		//alert(i);
		$('.tab-content').hide();
		$('#'+i).show();
		//document.getElementById(i).show();
	});
	//Menu slide
	$('#close-menu-slide').hide();
	$('#button-menu-small').click(function(){
		$('#block-menu-slide').css('margin-right','0px');
		$('#close-menu-slide').show();
	});
	$('#close-menu-slide').click(function(){
		$('#block-menu-slide').css('margin-right','-165px');
		$('#close-menu-slide').hide();
	});
});
