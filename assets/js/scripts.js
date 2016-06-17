
$(document).ready(function(){

  $($(".fa-times")[0]).hide();

  $(".float-icon").click(function(){
    $(".fa-comment-o").toggle();
    $(".fa-times").toggle();
  });
});
