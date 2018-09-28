document.getElementById('copyright').innerHTML = "&copy;" + (new Date()).getFullYear() + " Tori Hedden";

var closeMenu = document.getElementsByClassName('fa-times')[0];
closeMenu.style.display = 'none';
var openMenu = document.getElementsByClassName('fa-comment-o')[0];
openMenu.style.display = 'inline-block';
var mobileMenu = document.getElementsByClassName('menu-wrap')[0];
var mobileMenuButton = document.getElementsByClassName('float-icon')[0];

mobileMenuButton.addEventListener('click', function() {
  if (closeMenu.style.display === 'none') {
    closeMenu.style.display = 'inline-block';
    openMenu.style.display = 'none';
    mobileMenu.style.display = 'block';
  } else {
    closeMenu.style.display = 'none';
    openMenu.style.display = 'inline-block';
    mobileMenu.style.display = 'none';
  }
})

var projectSectionTop = document.getElementById('projects').getBoundingClientRect().top;
document.getElementsByClassName('about-button')[0].addEventListener('click', function() {
  window.scrollTo(0, projectSectionTop);
})

//   $(".about-button2").click(function(){
//     //basically, if in desktop media query, execute if. else is for tablet and phone
//     if ($("#contact").css('display') !== 'none'){
//       $('html, body').animate({
//         scrollTop: $("#contact").offset().top},
//         'slow');
//     } else {
//       $('html, body').animate({
//         scrollTop: $(document).height()
//       },'slow');
//       // setInterval(function() {
//         $(".menu-wrap").show();
//         $(".fa-comment-o").hide();
//         $(".fa-times").show();
//       // }, 600);
//     }//ok this fixes the issue but it doesn't look as good... try and re-work in a pause before the contact menu flies out that doesn't cause it to re-open and close
//   });

// });
