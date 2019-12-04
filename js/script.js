$(document).ready(function(){
  navHover();
  heroImages();
  aboutParagraph();
  modelInfo();

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
    ispis += '<img class="heroIMG" src="images/' + images[i] + '.jpg" alt="Hero image' + i + '"/>';
  };
  hero.html(ispis);
  //Convert to native JS?
}

function aboutParagraph(){
  let para = $('#hiddenPara');
  let showButton = $('#showMore');
  let hideButton = $('#hide');

  showButton.click(function(){
    para.slideDown(500);
    showButton.slideUp(600);
    hideButton.slideDown(600);
    hideButton.css('display', 'inline-block'); //So it centers
  });

  hideButton.click(function(){
    para.slideUp(500);
    showButton.slideDown(600);
    hideButton.slideUp(600);
  });

}

function modelInfo(){
  let div = document.getElementById('models');
  let img = ['modelX.jpg', 'modelY.jpg', 'modelS.jpg', 'model3.jpg', 'roadster.jpg', 'cybertruck.jpg']
  let models = ['Model X', 'Model Y', 'Model S', 'Model 3', 'Roadster',  'Cybertruck'];
  let year = ['2015', '2019', '2012', '2017', '2020', '2020'];
  let range = ['523km', '483km', '600km', '402km', '997km', '804km'];
  let price = ['$84,990', '$39,000', '$79,990', '$36,000', '$200,000', '$39,900'];

  div.innerHTML = '';
  for (i = 0; i < models.length; i++){
    div.innerHTML += 
    `<div class="modelInfo">
      <div class="information">
      <img class="modelIMG" src="images/${img[i]}" alt="" />
      <table class="modelInfo">
        <tr>
          <td>Name:</td>
          <td>${models[i]}</td>
        </tr>
        <tr>
          <td>Date:</td>
          <td>${year[i]}</td>
        </tr>
        <tr>
          <td>Range:</td>
          <td>${range[i]}</td>
        </tr>
        <tr>
          <td>Price:</td>
          <td>${price[i]}</td>
        </tr>
      </table>
      </div>
      <span>
      <a class="buttonInfo" href="#">Show More</a>
    </span>
    </div>
    `;
  }
}