// 顶部导航滑块
function back(){
	var ow = $('.header').find('.on').width();
	var ol = $('.header').find('.on').children('.fir_link').offset().left;
	$('.back').css({
		'width': ow,
		'left': ol
	});
}
$(document).ready(function() {
	back();
});
$('.fir_item').hover(function() {
	var tw = $(this).width();
	var tl = $(this).children('.fir_link').offset().left;
	$('.back').css({
		'width': tw,
		'left': tl
	});
}, function() {
	back();
});



// 二级菜单
$('.fir_item').hover(function() {
	var athis = $(this);
	delay = setTimeout(function(){
		athis.children('.sec_menu').slideDown(300);
	},300)
}, function() {
	clearTimeout(delay);
	var athis = $(this);
	athis.children('.sec_menu').slideUp(200);
});






function ovback(){
	var ovw = $('.ny_menu').find('.on').innerWidth();
	var ovl = $('.ny_menu').find('.on').offset().left;
	$('.ovback').css({
		'width': ovw,
		'left': ovl
	});
}
$(document).ready(function() {
	ovback()
});
$('.ny_menu').find('a').hover(function() {
	$(this).siblings('.on').addClass('zhanwei').removeClass('on');
	var yw = $(this).innerWidth();
	var yl = $(this).offset().left;
	$('.ovback').css({
		'width': yw,
		'left': yl
	});
}, function() {
	$('.zhanwei').addClass('on').removeClass('zhanwei');
	ovback();
});



function showzz(){
	$('.zzbox').css('display', 'block');
}

function hidezz(){
	$('.zzbox').css('display', 'none');
}