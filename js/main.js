$(document).ready(function(){
    // WOW
    new WOW().init();

    $('.venobox').venobox({
        share: []
    }); 

    // Nav
    $('.burger').click(function(e) {
        if ($('ul').css('display') == 'none') {
            $('ul').addClass('mobile');
        } else {
            $('ul').removeClass('mobile');
        }
    });

    // Slick
    $('.work').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
});