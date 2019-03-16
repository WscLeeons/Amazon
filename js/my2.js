var timer;
var n=0;
var index;
$('.l-fade').slideUp();
function a(){
	$('.l-ul>li').eq(n).removeClass('opa');
	$('.l-ul>li').eq(n).siblings().addClass('opa');
	$('ol>li').eq(n).siblings().removeClass('current');
	$('ol>li').eq(n).addClass('current');
}
function go(){timer=setInterval(function(){
		n++;
		if(n>3){
			n=0;
		}
		a();
	},3000)
}
go();
$('.lbt').hover(function(){
	clearInterval(timer);
	$('ol').css('display','none');
	$('.l-fade').slideDown(200);
},function(){
	go();
	$('.l-fade').slideUp(200,function(){
		$('ol').css('display','block');
	});
})
$('#l-left').click(function(){
	n--;
	if(n<0){
		n=3;
	}
	a();
})
$('#l-right').click(function(){
	n++;
	if(n>3){
		n=0;
	}
	a();
})
$('.l-fade>ul>li').mouseenter(function(){
	index=$(this).index();
	$('.l-ul>li').eq(index).removeClass('opa');
	$('.l-ul>li').eq(index).siblings().addClass('opa');
	$('.l-fade>ul>li').eq(index).siblings().removeClass('current');
	$('.l-fade>ul>li').eq(index).addClass('current');
})
$('.l-lbt2').click(function(){
	n++;
	if(n>1){
		n=0;
	}
	$('.weight').css('left',-1205*n+'px');
})
$('.r-lbt2').click(function(){
	n--;
	if(n<0){
		n=1;
	}
	console.log(n)
	$('.weight').css('left',-1205*n+'px');
})
$('.l-f-lbt2').click(function(){
	n++;
	if(n>1){
		n=0;
	}
	$('.weight2').css('left',-1205*n+'px');
})
$('.r-f-lbt2').click(function(){
	n--;
	if(n<0){
		n=1;
	}
	$('.weight2').css('left',-1205*n+'px');
})

$('.l-btn').click(function(){
	n++;
	if(n>1){
		n=0;
	}
	$('.move').css('left',-1377*n+'px');
})
$('.r-btn').click(function(){
	n--;
	if(n<0){
		n=1;
	}
	$('.move').css('left',-1377*n+'px');
})
$('.l-f-btn').click(function(){
	n++;
	if(n>1){
		n=0;
	}
	$('.move2').css('left',-1377*n+'px');
})
$('.r-f-btn').click(function(){
	n--;
	if(n<0){
		n=1;
	}
	$('.move2').css('left',-1377*n+'px');
})


$(window).scroll(function(){
	var s=$(window).scrollTop();
	var q=$('.sky').offset().top-$(window).height();
	if(s>q){
		$('.fix').css('display','none');
	}else{
		$('.fix').css('display','block');
	}
})

$('.f-right button').click(function(){
	var index=$(this).index();
	var top=$('.m-b-box').eq(index).offset().top;
	$('html,body').animate({'scrollTop':top});
})


/*⬇*/
$('.l1-box2').hover(function(){
	$('.js-box').css('display','block')
},function(){
	$('.js-box').css('display','none')
})
$('.l2-box2').hover(function(){
	$('.js-box2').css('display','block')
},function(){
	$('.js-box2').css('display','none')
})
$('.l4-box2').hover(function(){
	$('.js-box3').css('display','block')
},function(){
	$('.js-box3').css('display','none')
})



$('.l-box1').hover(function(){
	$('.js-box4').css('display','block');
},function(){
	$('.js-box4').css('display','none');
	$('.js2').width(0);
	$('.js2-txt').css('display','none');
})

// $('.js2').width(0);
$('.js>p').mouseenter(function(){
	$('.js-box4').css('border-radius','5px 0px 0px 5px');
	$('.js2').css('display','block').width(549);
	index=$(this).index();
	$('.js2-txt').eq(index).css('display','block');
	$('.js2-txt').eq(index).siblings().css('display','none')
})
$('.js2').mouseleave(function(){
	$('.js-box4').css('border-radius','5px');
	$('.js2').width(0);
	$('.js2-txt').css('display','none');
})


$('.special2').mouseenter(function(){
	$('.js2').width(0);
	$('.js2-txt').css('display','none');
})
/*⬆*/