$(function () {

    // slick 실행 스크립트
    $('.mainSlide').slick(

        {
            dots: true,
            infinite: true,
            autoplay: true,      //자동시작 (boolean) -default:false
            autoplaySpeed: 3000,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: $('#prevArrow'),
            nextArrow: $('#nextArrow'),

        }


    );
    // arrows: false,
    $('.arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev');
    })
    $('.arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext');
    });


});

