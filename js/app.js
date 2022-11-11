$(document).ready(function () {
    $(".about-wrapper > .col > .video > .thumb").click(function () {
        $(this).addClass("active");
        $(this).next().attr("controls", "");
    });


    $(".nav-open").click(function(){
        $(".nav-body").addClass("active");
    });
    $(".nav-close").click(function(){
        $(".nav-body").removeClass("active");
    });




    // slider
    $('.slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
    });
    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 799,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});