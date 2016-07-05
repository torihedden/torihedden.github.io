
$(document).ready(function(){

//initialize visibility of the X to close the mobile view contact menu as hidden
  $(".fa-times").hide();

//toggle between chat bubble and X on click floating round icon
  $(".float-icon").click(function(){
    $(".fa-comment-o").toggle();
    $(".fa-times").toggle();

//toggle the mobile view contact menu visibility
    $(".menu-wrap").toggle();
  });

//on click View my work, scroll page to projects section
  $(".about-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
  });

  $(".about-button2").click(function(){
    //basically, if in desktop media query, execute if. else is for tablet and phone
    if ($("#contact").css('display') !== 'none'){
      $('html, body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
    } else {
      $('html, body').animate({
        scrollTop: $(document).height()
      },'slow');
      // setInterval(function() {
        $(".menu-wrap").show();
        $(".fa-comment-o").hide();
        $(".fa-times").show();
      // }, 600);
    }//ok this fixes the issue but it doesn't look as good... try and re-work in a pause before the contact menu flies out that doesn't cause it to re-open and close
  });

});
//investigate media-query specific js files... instead of checking whether or not the desktop footer is shown, really the behavior we care about is tied to the media query. better befinition of when this should happen.
