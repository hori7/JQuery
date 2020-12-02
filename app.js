$(function(){
  $("#test1").text("hello");
});

$(function() {
  var scroll;
  $(window).scroll(function() {
    scroll = $(this).scrollTop();
    $("#scroll-position").text(scroll);
  });
});

$(function() {
  $("#btn").click(function() {
    $("body").css("background", "#ffff00");
  });
});