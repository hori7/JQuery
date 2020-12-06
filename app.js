$(function(){

  $("#test1").text("hello");
  $('h1').css('color','red');

  $('#remove').remove();


  $("#btn").click(function() {
    $("body").css("background", "#ffff00");
  });

  $("#test2").hide();
  $("#btn2").on("click", function(){
    $("#test2").show();
  });
  $("#btn3").on("click", function(){
    $("#test2").hide();
  });

  $('#test3').before('<h1>before</h1>');
  $('#test3').after('<h1>after</h1>');

  var scroll;
  $(window).scroll(function() {
    scroll = $(this).scrollTop();
    $("#scroll-position").text(scroll);
  });

  $("body").keypress(function(){
    $("h1").css("color","blue")
 });

});
