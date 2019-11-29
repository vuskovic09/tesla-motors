$(document).ready(function(){
  $('.dropdownLink').hover(function(e){
    e.preventDefault();
    $('#dropdown').slideDown(900, function(){
      $('#dropdown').css("visibility", "visible");
    });
  }, function(){
    $('#dropdown').slideUp(900, function(){
      $('#dropdown').css("visibility", "hidden");
    });
  });
});
