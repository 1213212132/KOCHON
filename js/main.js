$(function () {

    // slick 실행 스크립트
    $('.mainSlide').slick(

        {
            infinite: true,
            autoplay: true,      //자동시작 (boolean) -default:false
            autoplaySpeed: 3000,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: $('#prevArrow'), // 좌 (이전) 화살표만 변경 (선택자 혹은 $(element))
            nextArrow: $('#nextArrow'),

        }
    );
    // arrows: false,

});

