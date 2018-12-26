$(function() {
  $(".card__wrapper").click(function() {
    var overlay = $('<div class="overlay"> </div>');
    overlay.appendTo(document.body);
    $(".main-header").addClass("blur");
    $(".main-content").addClass("blur");
    $(".modal").addClass("open");
    $(function(){
      $(".modal__top-title").delay(450).fadeTo(600, 1);
      $(".modal__discription").addClass("slow").find(".modal__table").addClass("slow");
      $(".add").animate({ marginBottom: 0},600);
      $(".add__wrapper").animate({ marginBottom: 0},600);
      $(".add__button-order").addClass("color-btn");
    });
    $(".modal__btn-close").click(function (){
      $(".modal").removeClass("open");
      $(".main-header").removeClass("blur");
      $(".main-content").removeClass("blur");
      $(".modal__top-title").fadeIn("fast");
      $(".modal__discription").removeClass("slow");
      $(".modal__table").removeClass("slow");
      $(".add").animate({ marginBottom: "-100px"},600);
      $(".add__wrapper").animate({ marginBottom: "-100px"},600);
      $(".add__button-order").removeClass("color-btn");
      overlay.fadeTo(800, 0.01, function(){ $(this).remove(); })
    });
  });

});
