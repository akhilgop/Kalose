window.onload = function() {
    $('.slide').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        //swipeToSlide: true,
        arrows: true,
        centerPadding: 0,
        variableWidth: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    centerPadding: '10px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    centerPadding: '30px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    var scroll = new IScroll('.slick-list.draggable', {
        scrollX: true,
        scrollbars: true,
        interactiveScrollbars: true,
        fadeScrollbars: true,
        hideScrollbars: true,
        scrollY: false,
        eventPassthrough: true,
        preventDefault: false,
    });
}








// ------------------------------------------------------Slider
$('.variable-width').slick({
    centerMode: true,
    infinite: true,
    //centerPadding: '60px',
    slidesToShow: 1,
    speed: 300,
    variableWidth: true,
    //draggable: true,
});

$('.variable-width').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    //console.log('beforeChange', currentSlide, nextSlide);
    // $(".slick-current").removeClass("high-light");
    // $(".slick-current").addClass("normal");
    //console.log($( ".slick-slide[data-slick-index='"+nextSlide+"']" ));
    var nextSlick = $(".slick-slide[data-slick-index='" + nextSlide + "']");
    // nextSlick.addClass("high-light");
    // nextSlick.removeClass("normal");
});

$('.variable-width').on('afterChange', function(event, slick, currentSlide) {
    //console.log('afterChange', currentSlide);
    //$(".slick-current").addClass("high-light");
    //$(".slick-current").removeClass("normal");
});
setTimeout(() => {
    //console.log($(".slick-current"));
    // $(".slick-current").removeClass("normal");
    // $(".slick-current").addClass("high-light");
    //$('.variable-width').slick('setPosition');
}, 100);