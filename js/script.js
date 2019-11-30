$(document).ready(function(){
  navHover();
  socialMenu();

  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    zIndex: 0
  });
});

function socialMenu(){
    let menu = $("#socialMenu");
    let button = $("#socialButton")

    button.click(function(){
      if(menu.hasClass("opened")){
        menu.removeClass("opened");
        setTimeout(function(){
          button.css({
          "border-bottom-right-radius": "5px"
          });
        }, 500);
        menu.slideUp(500);
      } 
      else {
        menu.addClass("opened");
        button.css({
          "border-bottom-right-radius": "0px"
        });
        menu.css({
          "border-bottom-right-radius": "5px"
        });
        menu.slideDown(500);
      }
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