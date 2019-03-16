var timer;
var n=0;
var index;

function start(){
		timer=setInterval(function(){
		n++;
		if(n>8){
			n=0;
		}
		b(n);
	},3000)
}
function b(x){
	$('.m_lbt>ul>li').eq(x).addClass('current');
	$('.m_lbt>ul>li').eq(x).siblings().removeClass('current');
	$('.f_m_lbt>ul>li').eq(x).addClass('current2');
	$('.f_m_lbt>ul>li').eq(x).siblings().removeClass('current2');
	$('.frame>ul>li').eq(x).addClass('current3');
	$('.frame>ul>li').eq(x).siblings().removeClass('current3');
}
start();
$('.m_lbt').mouseenter(function(){
	clearInterval(timer);
	$('.f_m_lbt').css('display','none');
	$('.frame').slideDown(200);
})
$('.m_lbt').mouseleave(function(){
	start();
	$('.frame').slideUp(200);
	$('.f_m_lbt').css('display','block');
})
$('.arrows').click(function(){
	n--;
	if(n<0){
		n=8;
	}
	b(n);
})
$('.arrows2').click(function(){
	n++;
	if(n>8){
		n=0;
	}
	b(n);
})
$('.frame>ul>li').mouseenter(function(){
	index=$(this).index();
	b(index);
})

$('.r_lbt2>span').click(function(){
	n++;
	if(n>=3){
		n=0;
	}
	$('.weight').css('left','1205'*-n+'px');
})
$('.l_lbt2>span,.l_lbt2>i').click(function(){
	n--;
	if(n<0){
		n=2;
	}
	console.log(n)
	$('.weight').css('left','-1205'*n+'px');
})

$('.l1_box2').hover(function(){
	$('.js_box').css('display','block')
},function(){
	$('.js_box').css('display','none')
})
$('.l2_box2').hover(function(){
	$('.js_box2').css('display','block')
},function(){
	$('.js_box2').css('display','none')
})
$('.l4_box2').hover(function(){
	$('.js_box3').css('display','block')
},function(){
	$('.js_box3').css('display','none')
})
$('.l_box1').hover(function(){
	$('.js_box4').css('display','block')
},function(){
	$('.js_box4').css('display','none')
})

$('.js>p').mouseenter(function(){
	$('.js_box4').css('border-radius','5px 0px 0px 5px');
	// $('.js2');
	$('.js2').css('display','block').width(549);
	index=$(this).index();
	$('.js2_txt').eq(index).css('display','block');
	$('.js2_txt').eq(index).siblings().css('display','none')
})
$('.js2').mouseleave(function(){
	$('.js_box4').css('border-radius','5px');
	$('.js2').width(0);
	$('.js2_txt').css('display','none');
})
$('.special2').mouseenter(function(){
	$('.js2').width(0);
	$('.js2_txt').css('display','none');
})