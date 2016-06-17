
$(document).ready(function(){

  $(".fa-times").hide();

  $(".float-icon").click(function(){
    $(".fa-comment-o").toggle();
    $(".fa-times").toggle();

    $(".menu-wrap").toggle();
  });
});
