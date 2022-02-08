var mobileMenu = "#mobile-menu";

$(".ham").click(function () {
  if (!$(this).hasClass("toggle")) {
    $(this).attr("src", "./images/icon-close.svg");
    $(this).addClass("toggle");
    $(mobileMenu).css("display", "block");
    $("body").css("overflow-y", "hidden");
  } else {
    $(this).attr("src", "./images/icon-hamburger.svg");
    $(this).removeClass("toggle");
    $(mobileMenu).css("display", "none");
    $("body").css("overflow-y", "auto");
  }
});
