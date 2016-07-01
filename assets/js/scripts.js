
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
//try changing .show() on line 33 to toggle... why is the menu toggling after line 23 event listener fires?
  });

});
//investigate media-query specific js files... instead of checking whether or not the desktop footer is shown, really the behavior we care about is tied to the media query. better befinition of when this should happen.
