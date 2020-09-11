(function($){
  $(function(){
    // Parallax efect
    $('.parallax-window-1').parallax({ imageSrc: 'img/banner.png' });
    $('.parallax-window-2').parallax({ imageSrc: 'img/footer.jpg' });

    // Button that appears in the scroll efect
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $(".phone-call").fadeIn(200);
      } else {
        $(".phone-call").fadeOut(200);
      }
    });

    new WOW().init();

    $(document).click(function (event) {
      $(".navbar-collapse").collapse("hide");
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
