$(function(){

	//点击课程详情里的某个课程，跳转到对应的课程播放页面
	$(".studyDetailInfo").click(function(){
		// alert("aaa");
		window.location.href="playCourse.html";

		
	})

})



// 首页底部图标选项，点击哪个选项，哪个选项变色，并跳转到对应的页面，其他选项不变
$(function(){

	$(".bottomsItems1").click(function(){
		$(".bottomsItems1-img1").attr('src',"images/bottoms/1-1.png");
		$(".bottomsItems1-img2").attr('src',"images/bottoms/2.png");
		$(".bottomsItems1-img3").attr('src',"images/bottoms/3.png");
		$(".bottomsItems1-img4").attr('src',"images/bottoms/4.png");
		$(".bottomsTitle1").css("color",'#3f9dec');
		$(".bottomsTitle2").css("color",'black');
		$(".bottomsTitle3").css("color",'black');
		$(".bottomsTitle4").css("color",'black');
		window.location.href="index.html";
		
	})

	$(".bottomsItems2").click(function(){
		$(".bottomsItems1-img1").attr('src',"images/bottoms/1.png");
		$(".bottomsItems1-img2").attr('src',"images/bottoms/2-1.png");
		$(".bottomsItems1-img3").attr('src',"images/bottoms/3.png");
		$(".bottomsItems1-img4").attr('src',"images/bottoms/4.png");
		$(".bottomsTitle1").css("color",'black');
		$(".bottomsTitle2").css("color",'#3f9dec');
		$(".bottomsTitle3").css("color",'black');
		$(".bottomsTitle4").css("color",'black');
		window.location.href="myCourse-studyMap.html";
		
	})

	$(".bottomsItems3").click(function(){
		$(".bottomsItems1-img1").attr('src',"images/bottoms/1.png");
		$(".bottomsItems1-img2").attr('src',"images/bottoms/2.png");
		$(".bottomsItems1-img3").attr('src',"images/bottoms/3-1.png");
		$(".bottomsItems1-img4").attr('src',"images/bottoms/4.png");
		$(".bottomsTitle1").css("color",'black');
		$(".bottomsTitle2").css("color",'black');
		$(".bottomsTitle3").css("color",'#3f9dec');
		$(".bottomsTitle4").css("color",'black');
		
	})

	$(".bottomsItems4").click(function(){
		$(".bottomsItems1-img1").attr('src',"images/bottoms/1.png");
		$(".bottomsItems1-img2").attr('src',"images/bottoms/2.png");
		$(".bottomsItems1-img3").attr('src',"images/bottoms/3.png");
		$(".bottomsItems1-img4").attr('src',"images/bottoms/4-1.png");
		$(".bottomsTitle1").css("color",'black');
		$(".bottomsTitle2").css("color",'black');
		$(".bottomsTitle3").css("color",'black');
		$(".bottomsTitle4").css("color",'#3f9dec');
		window.location.href="personalCenter.html";
	})
})






//点击课程时，出现背景色
$(function(){
	$(".studyDetailInfo").on("touchstart",touchStart);
	$(".studyDetailInfo").on("touchend",touchEnd);
	$(".mustStudyDetailInfo").on("touchstart",touchStart);
	$(".mustStudyDetailInfo").on("touchend",touchEnd);
	$(".studyDetailInfoType").on("touchstart",touchStart);
	$(".studyDetailInfoType").on("touchend",touchEnd);

	function touchStart(event){
		$(this).addClass("clickColor");
		// console.log('11');
	}
	function touchEnd(event){
		$(this).removeClass('clickColor');
		// console.log('22');
	}

})

