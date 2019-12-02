$(document).ready(function(){
  navHover();
  paragraphShow();
  paragraphHide();

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