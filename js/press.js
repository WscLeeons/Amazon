$('.main-left li').click(function(){
	var index=$(this).index()
	$('.main-left li').removeClass()
	$(this).toggleClass('triangle')
	$('.main-left li span').css('cursor','pointer')
	$(this).children('span').css('cursor','text')
	$('.main-right>div').css('display','none')
	$('.main-right>div').eq(index).css('display','block')
})
$('.main-left li').eq(0).click()