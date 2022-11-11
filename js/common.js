$(document).ready(function () {
  $(".menu-btn").on("click", function () {
    var rightVal = 0;
    if ($(this).hasClass("active")) {
      rightVal = -300;
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
    $("#nav").stop().animate(
      {
        right: rightVal,
      },
      400
    );
  });
});
