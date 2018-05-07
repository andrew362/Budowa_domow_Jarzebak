var navBg = $('#nav-main');


// animacja danych kontaktowych w nawigacji

$(window).on('scroll', function(){
    console.log($(this).scrollTop());
    var navContactInfo = $('#nav-contact-info');
    if($(this).scrollTop() > 50){
        //navContactInfo.stop();
        navContactInfo.slideUp(200,function() {
            navContactInfo.removeClass('d-md-block');
            navBg.css('backgroundColor', 'rgba( 0, 0, 0, 0.6 )');
        });
        
    } else {
            navContactInfo.addClass('d-md-block');
            navContactInfo.slideDown(200);
            navBg.css('backgroundColor', 'rgba( 0, 0, 0, 0)');
    }
});