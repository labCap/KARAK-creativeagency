$(function () {



    $(document).ready(function () {



        $('.btn__menu').on('click', function () {
            $('.menu__list').slideToggle();
            $(this).toggleClass('active').next().slideToggle(500);

        });
    });


    $('.course-slider__items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false, touchMove: false,
        autoplay: true,
        autoplaySpeed: 3000, responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.mentors__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false, touchMove: false,
        autoplay: true,
        autoplaySpeed: 3000, responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,

                    slidesToShow: 1
                }
            }
        ]
    });

    $(document).ready(function () {
        $('.spoiler__item-title').click(function (event) {
            if ($('.spoiler__item').hasClass('one')) {
                $('.spoiler__item-title').not($(this)).removeClass('active');
                $('.spoiler__item-list').not($(this).next()).slideUp(500);
            }

            $(this).toggleClass('active').next().slideToggle();
        });
    });

    $(document).ready(function () {
        $('.language__spoiler-title').click(function (event) {
            if ($('.footer__spoiler').hasClass('one')) {
                $('.language__spoiler-title').not($(this)).removeClass('active');
                $('.language__spoiler-list').not($(this).next()).slideUp(500);
            }

            $(this).toggleClass('active').next().slideToggle();
        });
    });
});