$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.open-popup2').click(function(e) {
    e.preventDefault();
    $('.popup-bg2').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg2').fadeOut(800);
    $('html').removeClass('no-scroll');
});
