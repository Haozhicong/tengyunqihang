// 首页导航切换样式
$(".nav_ul li").hover(function () {
    $(this).addClass("isActive");
}, function () {
    $(this).removeClass("isActive");
}
);
