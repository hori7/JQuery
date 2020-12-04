$(function(){
  $("#test1").text("hello");
});

$(function(){
  $("#test2").hide();

  $("#btn2").on("click", function(){
    $("#test2").show();
  });

  $("#btn3").on("click", function(){
    $("#test2").hide();
  });
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