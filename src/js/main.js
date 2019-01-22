$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        responsive: true,
        aautoWidth: true,
        item: 3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });
    $('.list-media-mul').slick({
        slidesToShow: 3,
        slidesToScroll: 5,
        mobileFirst: true,
        autoplay: false,
        autoplaySpeed: 2000,
        padding: 5
    });
});