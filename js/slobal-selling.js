$('.link .open~li').hover(function(){
	var index=$(this).index()
	$('.dropdown').eq(index-1).css('display','block')
},function(){
	$('.dropdown').css('display','none')
})


$('.open>a').hover(function(){
	$('.open .open-dropdown').css('display','block')
},function(){
	$('.open .open-dropdown').css('display','none')
})
$('.open .open-dropdown').hover(function(){
	$('.open .open-dropdown').css('display','block')
},function(){
	$('.open .open-dropdown').css('display','none')
})


$(function(){
	var num=0;
	var timer;
	var n=0;
	function run(){
		timer=setInterval(function(){
			num=num+1;
			if(num==6){
				n=0;
				$('.banner ol li').eq(n).addClass('active').siblings('').removeClass('active');
			}
			if(num>6){
				num=0;
				$('.carousel-inner').css('left',-100*num+'%');
				num=1
			}
			$('.banner ol li').eq(num).addClass('active').siblings('').removeClass('active');
			$('.carousel-inner').stop().animate({'left':-100*num+'%'},800);
			console.log(num);
		},4000)
	}
	run();
	
	$('.left-carousel-control').click(function(event) {
        num=num-1;
        if(num<0)
        {
        	num=6;
            $('.carousel-inner').css('left', -100*num+'%'); 
            num=5;
        }
        $('.carousel-inner').animate({'left':-100*num+'%'},800)
        $('.banner ol li').eq(num).addClass('active').siblings('').removeClass('active');

    });
    $('.right-carousel-control').click(function(event) {
        num=num+1;
        if(num==6){
            n=0;
            $('.banner ol li').eq(n).addClass('active').siblings('').removeClass('active');
        }
        if(num>6)
        {
            num=0; 
            $('.carousel-inner').css('left', -100*num+'%'); 
            num=1;
        }
        $('.banner ol li').eq(num).addClass('active').siblings('').removeClass('active');
        $('.carousel-inner').animate({'left':-100*num+'%'},800)
    });

	$('.banner ol li').click(function(event) {
        num=$(this).index();
        $('.carousel-inner').css('left', -100*num+'%'); 
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
	
	$('.banner').hover(function() {		
	    clearInterval(timer);
	}, function() {
		run();
	});
})


$('.open-2>a').hover(function(){
	$('.open-2 .open-dropdown').css('display','block')
},function(){
	$('.open-2 .open-dropdown').css('display','none')
})
$('.open-2 .open-dropdown').hover(function(){
	$('.open-2 .open-dropdown').css('display','block')
},function(){
	$('.open-2 .open-dropdown').css('display','none')
})

$('.open-3>a').hover(function(){
	$('.open-3 .open-dropdown').css('display','block')
},function(){
	$('.open-3 .open-dropdown').css('display','none')
})
$('.open-3 .open-dropdown').hover(function(){
	$('.open-3 .open-dropdown').css('display','block')
},function(){
	$('.open-3 .open-dropdown').css('display','none')
})