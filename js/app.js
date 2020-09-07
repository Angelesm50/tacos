(function($){
  $(function(){
    // Parallax efect
    $('.parallax-window-1').parallax({ imageSrc: 'img/logos/taco-de-birria.png' });
    $('.parallax-window-2').parallax({ imageSrc: 'img/tacos-de-birria.jpg' });

    // Back to top scroll efect
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $(".phone-call").fadeIn(200);
      } else {
        $(".phone-call").fadeOut(200);
      }
    });
    $(".phone-call").click(function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 300);
    });

    new WOW().init();
  }); // end of document ready
})(jQuery); // end of jQuery name space
