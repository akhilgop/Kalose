window.onload = function() {
    $('.slide').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
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