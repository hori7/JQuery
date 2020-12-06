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

  //beforeAfter
  $('#test1').before('<h1>before</h1>');
  $('#test1').after('<h1>after</h1>');

  var scroll;
  $(window).scroll(function() {
    scroll = $(this).scrollTop();
    $("#scroll-position").text(scroll);
  });

  $("body").keypress(function(){
    $("h1").css("color","blue")
  });

  //animation
  $("#fadeOut").on("click", function(){
    $("h1").fadeOut();
  });

  $("#fadeIn").on("click", function(){
    $("h1").fadeIn();
  });

  $("#slideUp").on("click", function(){
    $("h1").slideUp();
  });

  $("#slideDown").on("click", function(){
    $("h1").slideDown();
  });

  $("#opacity").on("click", function(){
    $("h1").animate({opacity: 0.3});
  });

  $("#fontsize").on("click", function(){
    $("h1").animate({fontSize:'100px'}, 2000).animate({fontSize:'30px'});
  });

  $("h1").animate({opacity: 0.2}).fadeOut().fadeIn().slideUp().slideDown().animate({opacity: 1});

});
