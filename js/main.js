// 轮播图
$('.carousel').carousel({  
    interval: 4000,   // 修改轮播时间间隔
    pause: false    // 实现鼠标悬浮不停止轮播
});  
// 设置轮播图高度为屏幕高度
$(window).on("load resize",function(){
    var h=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;
    $(".banner").css("height",h);
    $(".opacity").css("height",h);
});

// 使导航条置顶
$(window).scroll(function () {  
    var menu_top = $('#menu_wrap').offset().top;  
    if ($(window).scrollTop() >= menu_top) {  
        $('.menu').addClass('menuFixed')  
    }else {  
        $('.menu').removeClass('menuFixed')  
    }  
});    


// 点击跳转连接时锚定位的平滑效果
$('.smoot').click(function () {
    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top + 1 + "px"}, 1000);
    return false;//不要这句会有点卡顿
});


