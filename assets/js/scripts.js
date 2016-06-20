
$(document).ready(function(){

  $(".fa-times").hide();

  $(".float-icon").click(function(){
    $(".fa-comment-o").toggle();
    $(".fa-times").toggle();

    $(".menu-wrap").toggle();
  });

  $(".about-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
  });

  $(".about-button2").click(function(){

    if ($("#contact").css('display') !== 'none'){
      $('html, body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
    } else {
      $('html, body').animate({
        scrollTop: $(document).height()},
        'slow');
      setInterval(function() { $(".menu-wrap").show() }, 600);
    }

  });

});
