$(document).ready(function(){
  $('.dropdownLink').hover(function(e) {
    e.preventDefault();
    $('#dropdown').slideDown(500); 
  }, function() {
    $('#dropdown').mouseleave(function(){
      $('#dropdown').slideUp(500);
    });
  });
});
