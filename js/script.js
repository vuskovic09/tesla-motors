$(document).ready(function(){
  navHover();
  paragraphShow();
  paragraphHide();
  heroImages();

  //SLICK PLUGIN START
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3500,
    zIndex: 0,
    dots: true,
    arrows: true,
  });
  //SLICK PLUGIN END
});

function paragraphShow(){
    let para = $("#hiddenPara");
    let button = $("#showMore");
    let buttonHide = $('#hide')

    button.click(function(){
      para.addClass("opened");
      para.slideDown(500);
      button.slideUp(600);
      buttonHide.slideDown(600);
      buttonHide.css('display', 'inline-block');
    });
}

function paragraphHide() {
  let para = $('#hiddenPara');
  let button = $('#showMore');
  let buttonHide = $('#hide');
  
  buttonHide.click(function(){
    para.removeClass("opened");
    para.slideUp(500);
    button.slideDown(600);
    buttonHide.slideUp(600);
  });
}

function navHover(){
  let ddLink = $(".dropdownLink");
  let ddList = $("#dropdown");
  ddLink.hover(function(e) {
    e.preventDefault();
    ddList.slideDown(500); 
  }, function(e) {
    event.preventDefault();
    ddList.mouseleave(function(){
      ddList.slideUp(500);
    });
  });
}

function heroImages(){
  let images = ['hero0', 'hero1', 'hero2', 'hero3', 'hero4', 'hero5'];
  let hero = $('#hero');
  let ispis = '';
  for(i = 0; i < images.length; i++) {
    ispis += '<img class="heroIMG" src="images/' + images[i] + '.jpg" alt="Hero image"' + i + '/>'
  };
  hero.html(ispis);
}