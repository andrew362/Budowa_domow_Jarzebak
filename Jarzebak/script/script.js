   $(document).ready(function () {
       var navBg = $('#nav-main');

       // ------smooth scrooling-----------  

       $(document).on('click', '.navigation', function (event) {
           event.preventDefault();
           stop();
           var href = $(this).attr('href');
           $('html, body').animate({
               scrollTop: $(href).offset().top
           }, 800, function () {
               location.hash = href;
           });
       });

       // --------------animacja danych kontaktowych w nawigacji---------

       $(document).on('scroll', function () {
           console.log($(this).scrollTop());
           var navContactInfo = $('#nav-contact-info');
           if ($(this).scrollTop() > 50) {
               //navContactInfo.stop();
               navContactInfo.slideUp(200, function () {
                   navContactInfo.removeClass('d-md-block');
                   navBg.css('backgroundColor', 'rgba( 0, 0, 0, 0.6 )');
               });
           } else {
               navContactInfo.addClass('d-md-block');
               navContactInfo.slideDown(200);
               navBg.css('backgroundColor', 'rgba( 0, 0, 0, 0)');
           }
       });

       // -----------------Galeria------------------

       $('.slider-for').slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           fade: true,
           appendArrows: $('.slider-for '),
           arrows: true,
           asNavFor: '.slider-nav'
       });

       $('.slider-nav').slick({
           slidesToShow: 7,
           slidesToScroll: 1,
           arrows: false,
           asNavFor: '.slider-for',
           centerMode: true,
           focusOnSelect: true,
           autoplay: true,
           autoplaySpeed: 2000,
           dots: true,
           responsive: [
               {
                   breakpoint: 992,
                   settings: {
                       slidesToShow: 5,
                       slidesToScroll: 5,
                       infinite: true,
                       dots: true
                   }
                },
               {
                   breakpoint: 767,
                   settings: {
                       slidesToShow: 3,
                       slidesToScroll: 3,
                       dots: true

                   }
                },
               {
                   breakpoint: 450,
                   settings: {
                       slidesToShow: 2,
                       slidesToScroll: 2,
                       dots: true
                   }
                }
            ]
       });
   });