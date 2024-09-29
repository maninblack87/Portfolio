// JavaScript Document

/*슬라이더 이미지*/
setInterval(function () {

	$('#slider ul').delay(6000).animate({ marginLeft: '-100%' });
	$('#slider ul').delay(6000).animate({ marginLeft: '-200%' });
	$('#slider ul').delay(6000).animate({ marginLeft: '0px' });

});

/*갤러리*/
$(function () {

	$('#gallery li').mouseover(function () {
		$(this).children('p').fadeIn();
	});
	$('#gallery li').mouseleave(function () {
		$(this).children('p').fadeOut();
	});

});