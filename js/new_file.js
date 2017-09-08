	//左侧滑动广告
	
	$(document).scroll(function(){
		var H = $(window).height();//浏览器的高度(页面高度)  window为当前显示区域高度
		var scrollH = $("body").scrollTop();//广告条滑动的高度    body为整个页面高度
		var adH = $(".aside").height();//广告条的高度
		$(".aside").stop(true,true).animate({
			top:(((H-adH)/2)+scrollH)+"px"
		},1000,"easeOutBack")
	});
	


	//下拉菜单
	$("nav ul li").hover(function(){
		$(this).next("ul").slideDown(300);
	})
	
	
	
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
	
