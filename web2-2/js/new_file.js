$(document).ready(function(){

//滑动广告条
	$(document).scroll(function(){
		var H = $(window).height();//浏览器的高度(页面高度)  window为当前显示区域高度
		var scrollH = $("body").scrollTop();//广告条滑动的高度    body为整个页面高度
		var adH = $(".aside-ad").height();//广告条的高度
		$(".aside-ad").stop(true,true).animate({
			top:(((H-adH)/2)+scrollH)+"px"
		},1000,"easeOutBack")
	});

//导航

//logo
	

//banner

//轮播图
	var banner =  $(".banner");
	var images = $(".banner a")
	var index = 0;
	var count = images.length;
	
	
	//仅显示第一张图    eq(0)为第一张图   隐藏所有图片 .显示第一张图
	images.hide().eq(0).show();
	
	//添加圆点
	for(var i = 0; i<count;i++){
		$(".points").append("<span></span>") ;//append是添加元素   addClass是添加类
	}
	
	var points = $(".points span");// 获取小圆点
	$(".points").css("margin-left",(-1*20)*count+"px");
	points.eq(0).addClass("active");//为第一张图片默认添加一个.active类
	//设定定时器
	var t = setInterval(rolling,1500);
		
	//添加hover效果
	
	points.hover(function(){
		var i = $(this).index();
		if(i!=index){
			images.eq(index).fadeOut(200);
			points.eq(index).removeClass("active");
		}
		index = i;
		images.eq(index).fadeIn(200);
		points.eq(index).addClass("active");
	});
	
	
	//有hover操作时停止定时器
	
	banner.hover(function(){
		clearInterval(t);
	},function(){
		t = setInterval(rolling,1500);
	});
	
	
	function rolling(){
		images.eq(index).fadeOut(400);   //第eq(index)个图片  在400毫秒内显示
		points.eq(index).removeClass("active");//移除第eq(index)个图片的"active"属性
		index = (index+1)%count;//index(索引值) 在count内循环  语句位置在中间
		images.eq(index).fadeIn(400);
		points.eq(index).addClass("active");
	}
	
//class-ad

//左侧
	$(".class-group").hide();
	$(".class-list ul li").hover(function(){
		$(".class-list ul li").removeClass("active");
		$(this).addClass("active");
		var index = $(this).index();
		$(".class-group .item").hide().eq(index).show();
		$(".class-group").show();
	});

	$(".class-list").mouseleave(function(){
		$(".class-list ul li").removeClass("active");
		$(".class-group").hide();
	});

//中间
	
	$(".top ul li").hover(function(){
		var index = $(this).index();
		$(".top ul li").removeClass("active").eq(index).addClass("active");
		$(".class-news .item").hide().eq(index).show();
	});
	
	$(".tab ul li").hover(function(){
		var index = $(this).index();
		$(".tab ul li").removeClass("active").eq(index).addClass("active");
		$(".tab .item").hide().eq(index).show();
	});
	
//new-class

//顶部导航
	
	$(".list ul li").hover(function(){
		var index = $(this).index();
		$(".list ul li").removeClass("active").eq(index).addClass("active");
		$(".new-group .image").hide().eq(index).show();
	});
	
	$(".list ul li").hover(function(){
		var index = $(this).index();
		$(".list ul li").removeClass("active").eq(index).addClass("active");
		$(".new-group .image").hide().eq(index).show();
	});

//作品广告图
	$(".ad-image").hover(function(){
		$(this).children("img").animate({
			width:"150%",
			height:"150%",
			top:"-25%",
			left:"-25%"
		},200);
	},function(){
		$(this).children("img").animate({
			width: "100%",
			height: "100%",
			top:"0%",
			left:"0%"
		},200);
	});
//class-price
//teacher
//student


//job
//honor
//school
//cooperation
//footer
});