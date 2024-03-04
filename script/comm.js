$(document).ready(function () {
  let now = 0;
  const slideCount = $(".slide ul li").length;
  const slideList = $(".slide ul");

  setInterval(function () {
    now = (now + 1) % slideCount;
    slideList.css("left", 100 * -now + "%");
  }, 3000);

  $(".notice ul > li:first-child").on("click", function () {
    $(".modal").css("display", "block");
    $(".modal-bg").css("display", "block");
  });
  $(".modal > button").on("click", function () {
    $(".modal").hide();
    $(".modal-bg").hide();
  });
});
