// 轮播图控件
var swiper = new Swiper('.lunbo .swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// 就业保障
var swiper = new Swiper('.cooperation_list', {
    slidesPerView: 5,
    spaceBetween: 4,
    autoplay: true,
    loop: true,
    freeMode: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    }
});
// 资讯问答
jQuery(".txtMarquee-top").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "topMarquee",
    vis: 4,
    interTime: 60
});