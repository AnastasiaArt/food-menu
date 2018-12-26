$(function() {
  if ( $(window).width() >= 980 ) {
    $(".scroll-menu__list").niceScroll({
      cursorcolor: " #D62323 ",
      cursorwidth: "4px",
      autohidemode: false,
      emulatetouch: false,
      cursorfixedheight:'30'
      // railpadding : {top:20,right:0,left:50,bottom:20}
    });
  }
  if ( $(window).width() < 980 ) {
    $(".add__button-order").text("готово");
    var overlay = $('<div class="overlay"> </div>');
    $(".scroll-menu").hide();
    $(".catalog__title-link").click(function(){
      overlay.appendTo(document.body);
      $("body").attr("style", "overflow:hidden;")
      $(".scroll-menu").fadeIn(600);
      $(".scroll-menu__list").niceScroll({
        autohidemode: true,
        cursorcolor: " transparent ",
        emulatetouch: true,
      });
      $(".scroll-menu__item a").click(function() {
        overlay.remove();
        $("body").attr("style", "overflow:auto;")
        $(".scroll-menu").fadeOut(600);
      });
      $(document).mouseup(function (){
        overlay.remove();
        $("body").attr("style", "overflow:auto;")
        $(".scroll-menu").hide();
      });
    });
  }
});
