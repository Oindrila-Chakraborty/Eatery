$(".burger").on("click",function(){
    $(".navlinks").toggleClass("nav-active");
})

$(".navlinks").on("click",function(){
    $(this).toggleClass("nav-active");
})

$("header").hide();
$("header").slideDown(1000);

$(function () {
    $(document).scroll(function () {
      var $nav = $("nav");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


  $(".breakfast-button").addClass("activate");
  $(".lunch").hide();
  $(".dinner").hide();

$(".breakfast-button").on("click",breakfast);
$(".lunch-button").on("click",lunch);
$(".dinner-button").on("click",dinner);
function breakfast(){
  $(".breakfast").show();
  $(".lunch").hide();
  $(".dinner").hide();
  $(".breakfast-button").addClass("activate");
  $(".lunch-button").removeClass("activate");
  $(".dinner-button").removeClass("activate");
}
function lunch(){
  $(".breakfast").hide();
  $(".lunch").show();
  $(".dinner").hide();
  $(".breakfast-button").removeClass("activate");
  $(".lunch-button").addClass("activate");
  $(".dinner-button").removeClass("activate");
}
function dinner(){
  $(".breakfast").hide();
  $(".lunch").hide();
  $(".dinner").show();
  $(".breakfast-button").removeClass("activate");
  $(".lunch-button").removeClass("activate");
  $(".dinner-button").addClass("activate");
}