//banner轮播
var swiper = new Swiper('.banner-one', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});

//字体轮播
var swipers = new Swiper('.main-down-right-lun', {
    autoplay: 3500,
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween:25,
    autoplayDisableOnInteraction: false
});