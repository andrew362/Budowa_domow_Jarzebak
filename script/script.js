
// animacja danych kontaktowych w nawigacji

$(window).on('scroll', function(){
    console.log($(this).scrollTop());
    var navContactInfo = $('#nav-contact-info');
    if($(this).scrollTop() > 50){
        //navContactInfo.stop();
        navContactInfo.slideUp(200,function() {
            navContactInfo.removeClass('d-md-block');
        });
//        navContactInfo.animate({
//            opacity: 0.25,
//            height: 0
//          }, 300, function() {
//            navContactInfo.removeClass('d-md-block');
//          });
        
    } else {
            navContactInfo.addClass('d-md-block');
            navContactInfo.slideDown(200);
    }
});