$(".l1-box2").hover(function(){$(".js-box").css("display","block")},function(){$(".js-box").css("display","none")});$(".l2-box2").hover(function(){$(".js-box2").css("display","block")},function(){$(".js-box2").css("display","none")});$(".l4-box2").hover(function(){$(".js-box3").css("display","block")},function(){$(".js-box3").css("display","none")});function daohang(a){if(a<=1233){$(".js-box4").css("display","none");$(".l-box1").hover(function(){$(".js-box4").css("display","block")},function(){$(".js-box4").css("display","none");$(".js2").width(0);$(".js2").css("border","0px solid #bbb");$(".js2-txt").css("display","none")})}else{$(".js-box4").css("display","block");$(".l-box1").unbind();$(".js-box4").mouseleave(function(){$(".js2").width(0);$(".js2").css("border","0px solid #bbb");$(".js2-txt").css("display","none")})}}$(".js>p").mouseenter(function(){$(".js-box4").css("border-radius","5px 0px 0px 5px");$(".js2").css("display","block").width(546);$(".js2").css("border","1px solid #bbb");index=$(this).index();$(".js2-txt").eq(index).css("display","block");$(".js2-txt").eq(index).siblings().css("display","none")});$(".js2").mouseleave(function(){$(".js-box4").css("border-radius","5px");$(".js2").width(0);$(".js2").css("border","0px solid #bbb")});$(".special2").mouseenter(function(){$(".js2").width(0);$(".js2").css("border","0px solid #bbb")});function topbannerchange(){$(".topbannerjs").css({"display":"none","top":"-460px"});$(".topbannerjs").stop().animate({"opacity":"0"},500)}$(".bannercenter").hover(function(){$(".topbannerjs").css("display","block");$(".topbannerjs").stop().animate({"top":"0px","opacity":"1"},500)},function(){topbannerchange()});$(".close").click(function(){topbannerchange()});$(".topbanner>span").hover(function(){$(".topbannerjs").css("display","block");$(".topbannerjs").stop().animate({"top":"0px","opacity":"1"},500)},function(){topbannerchange()});var num=0;var timer;function change(){$(".mainbanner ul li").eq(num).addClass("bannercurrnt").siblings("").removeClass("bannercurrnt");$(".mainbanner>a").eq(num).fadeIn(500);$(".mainbanner>a").eq(num).siblings("a").fadeOut(500)}function run(){timer=setInterval(function(){num=num+1;if(num>7){num=0}change()},5000)}run();$(".main-bannerctrlleft").click(function(){num=num-1;if(num<0){num=7}change()});$(".main-bannerctrlright").click(function(){num=num+1;if(num>7){num=0}change()});$(".mainbanner ul>li").mouseenter(function(){num=$(this).index();$(".mainbanner ul li").eq(num).addClass("bannercurrnt").siblings("").removeClass("bannercurrnt");$(".mainbanner>a").eq(num).fadeIn(500);$(".mainbanner>a").eq(num).siblings("a").stop().hide()});$(".mainbanner").hover(function(){$(".mainbanner ul").stop().animate({"bottom":"0px"},100);$(".mainbanner ul li").css("border-color","rgba(255,255,255,0.5)");clearInterval(timer)},function(){$(".mainbanner ul").stop().animate({"bottom":"-47px"},100);$(".mainbanner ul li").css("border-color","rgba(255,255,255,0)");run()});setInterval(function(){var date=new Date();var date2=new Date(2019,3,3);var date3=date2.getTime()-date.getTime();var leave=Math.floor(date3/(24*3600*1000));var leave2=Math.floor(date3%(24*3600*1000));var leave3=Math.floor(leave2%(60*60*1000));var leave4=Math.floor(leave3%(60*1000));$(".jishiqi").html("剩余时间 "+Math.floor(leave2/(60*60*1000))+":"+Math.floor(leave3/(60*1000))+":"+Math.floor(leave4/1000))},1000);setInterval(function(){var date=new Date();var date2=new Date(2019,3,3);var date3=date2.getTime()-date.getTime();var leave=Math.floor(date3/(24*3600*1000));var leave2=Math.floor(date3%(24*3600*1000));var leave3=Math.floor(leave2%(60*60*1000));var leave4=Math.floor(leave3%(60*1000));$(".ms-daojishi>span").html("剩余时间 "+Math.floor(leave2/(60*60*1000))+":"+Math.floor(leave3/(60*1000))+":"+Math.floor(leave4/1000))},1000);$(".close-bottom-banner").click(function(){$(".bottom-banner").css("display","none")});$(".lbxialawrap").mouseenter(function(){$(".lbxialawrap").stop().fadeIn()});$(".lbxialawrap").mouseleave(function(){$(".lbxialawrap").stop().fadeOut()});$(".leibie").hover(function(){$(".lbxialawrap").stop().fadeIn()},function(){$(".lbxialawrap").stop().fadeOut()});$(".ms-2").css("display","none");var mznum=1;$(".cz-right").click(function(){mznum=mznum+1;$(".sp>span").html(mznum+"/2页");console.log(mznum);if(mznum>1){$(".cz-left").css("display","block")}if(mznum==2){$(".cz-right").css("display","none");$(".ms-1").css("display","none");$(".ms-2").css("display","block")}});$(".cz-left").click(function(){mznum=mznum-1;$(".sp>span").html(mznum+"/2页");console.log(mznum);if(mznum==1){$(".cz-left").css("display","none")}if(mznum<2){$(".cz-right").css("display","block");$(".ms-2").css("display","none");$(".ms-1").css("display","block")}});function media(){if(1233<=width){$(".mainbanner").css({"margin-left":"190px","width":"calc(100% - 190px)"});$(".gwcontent").css({"margin-left":"190px","width":"calc(100% - 190px)"})}if(width<1233){$(".mainbanner").css({"margin-left":"0px","width":"100%"});$(".gwcontent").css({"margin-left":"0px","width":"100%"})
}if(width<=1163){$(".gwcontent-3-wrap").css("display","none");$(".shuline2").css("display","none");$(".gwcontent-1-wrap").css("width","calc(50% - 1px)");$(".gwcontent-2-wrap").css("width","calc(50% - 1px)")}if(1163<width&&width<1233){$(".gwcontent-3-wrap").css("display","inline");$(".shuline2").css("display","inline");$(".gwcontent-1-wrap").css("width","calc(33% - 1px)");$(".gwcontent-2-wrap").css("width","calc(33% - 1px)")}if(1233<width&&width<=1345){$(".gwcontent-3-wrap").css("display","none");$(".shuline2").css("display","none");$(".gwcontent-1-wrap").css("width","calc(50% - 1px)");$(".gwcontent-2-wrap").css("width","calc(50% - 1px)")}if(width>1345){$(".gwcontent-3-wrap").css("display","inline");$(".shuline2").css("display","inline");$(".gwcontent-1-wrap").css("width","calc(33% - 1px)");$(".gwcontent-2-wrap").css("width","calc(33% - 1px)")}if(width<=1029){$(".re-content-4-wrap").css("display","none");$(".re-content-5-wrap").css("display","none");$(".re-content-wrap-auto").css("width","33.33333%")}if(1029<width&&width<=1189){$(".re-content-4-wrap").css("display","block");$(".re-content-5-wrap").css("display","none");$(".re-content-wrap-auto").css("width","25%")}if(width>1189){$(".re-content-4-wrap").css("display","block");$(".re-content-5-wrap").css("display","block");$(".re-content-wrap-auto").css("width","20%")}if(width<=1060){$(".ms-main-3").css("display","none");$(".ms-main-4").css("display","none")}if(1060<width&&width<=1284){$(".ms-main-4").css("display","none");$(".ms-main-3").css("display","block")}if(width>1284){$(".ms-main-3").css("display","block");$(".ms-main-4").css("display","block")}if(width<1070){$(".hwg-content-4").css("display","none");$(".hwg-content-5").css("display","none");$(".hwg-main-content-1>ul").css("width","33.33333%")}if(1070<=width&&width<1250){$(".hwg-content-4").css("display","block");$(".hwg-content-5").css("display","none");$(".hwg-main-content-1>ul").css("width","25%")}if(width>=1250){$(".hwg-content-4").css("display","block");$(".hwg-content-5").css("display","block");$(".hwg-main-content-1>ul").css("width","20%")}}var width=$(window).width();console.log(width);daohang(width);media(width);$(window).resize(function(){width=$(window).width();console.log(width);daohang(width);media(width)});