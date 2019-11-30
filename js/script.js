$(document).ready(function(){
  $('.dropdownLink').hover(function(e) {
    e.preventDefault();
    $('#dropdown').slideDown(500); 
  }, function() {
    $('#dropdown').mouseleave(function(){
      $('#dropdown').slideUp(500);
    });
  });

  $("#socialButton").click(function(e){
    e.preventDefault();
    let menu = $("#socialMenu");
    if(menu.hasClass("opened")){
      menu.removeClass("opened");
      $("#socialButton").css({
        "border-bottom-right-radius": "5px"
      });
      menu.slideUp(500);
    } 
    else {
      menu.addClass("opened");
      $("#socialButton").css({
        "border-bottom-right-radius": "0px"
      });
      $("#socialMenu").css({
        "border-bottom-right-radius": "5px"
      });
      menu.slideDown(500);
    } 
  });
});

function socialMenu(){
  
}