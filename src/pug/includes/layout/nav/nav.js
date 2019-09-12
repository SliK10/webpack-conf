$(document).ready(function(){
  $(".btn-nav").on("click", function() {
    var target = $(this).data("target");
    $(target).toggleClass("nav__list--open");
  });
});
