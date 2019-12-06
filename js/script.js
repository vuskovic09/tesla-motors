$(document).ready(function(){
  //SLICK PLUGIN START
  let url = 'https://vuskovic09.github.io/tesla-motors/';
  if(url.indexOf('index.html')){
    $('.single-item').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 3500,
      zIndex: 0,
      dots: true,
      arrows: true,
    });
  }
  //SLICK PLUGIN END

  navHover();
  heroImages();
  aboutParagraph();
  modelLoad();
  detailsLoad();
  $('.singleModel').filter(':even').css("flex-direction", "row-reverse");

  //FOOTER NAVIGATION
  var footerNav = document.querySelector('#footerNav ul');
  footerNav.innerHTML = '';
  var navElements = ['Home', 'About us', 'Model X', 'Model Y', 'Model S', 'Model 3', 'Rodaster', 'Cybertruck']
  var hrefs = ['header', 'about', 'ModelX', 'ModelY', 'ModelS', 'Model3', 'Roadster', 'Cybertruck']
  for (i = 0; i < navElements.length; i++){
    footerNav.innerHTML += `<li><a href="${hrefs[i]}" class="link">${navElements[i]}</a></li>`;
  }
  //FOOTER NAVIGATION END


  //FORM VALIDATION
  document.getElementById('validationButton').addEventListener('click', function(e){
    e.preventDefault();
    var fName, lName, phoneNum, eMail, reFName, reLName, reEmail;
    fName = document.getElementById('first-name');
    reFName = /^[A-Z][a-z]{1,13}$/;
    fNameErr = document.getElementById('fNameErr');

    lName = document.getElementById('last-name');
    reLName = /^([A-Z][a-z]{1,30}\s?)+$/;
    lNameErr = document.getElementById('lNameErr')

    eMail = document.getElementById('email');
    reEmail = /^[a-z][a-z\d\_\.\-]+\@[a-z\d]+(\.[a-z]{2,4})+$/;
    eMailErr = document.getElementById('eMailErr');
    
    if(!reFName.test(fName.value.trim())){
      fNameErr.innerHTML = 'First name has to start with a capital letter and contain 1-13 characters.';
    } else {
      fNameErr.innerHTML = '';
    }
    if(!reLName.test(lName.value.trim())){
      lNameErr.innerHTML = 'Last name has to start with a capital letter and contain 1-30 characters.';
    } else {
      lNameErr.innerHTML = '';
    }
    if(!reEmail.test(eMail.value.trim())){
      eMailErr.innerHTML = 'E-mail address has to be in the following format: <i>example@example.com</i>';
    } else {
      eMailErr.innerHTML = '';
    }
  });
  //FORM VALIDATION END


  //SCROLL FUNCTIONALITY
  $(document).bind('scroll', function(){
    var scrollOffset = $(document).scrollTop();
    var containerOffsetHome = $('#header').offset().top - window.innerHeight;
    var containerOffsetAbout = $('#about').offset().top - window.innerHeight/2;
    var containerOffsetModels = $('#models').offset().top - window.innerHeight/2;
    var containerOffsetContact = $('#contact').offset().top - window.innerHeight/2;

    if (scrollOffset > containerOffsetHome) {
			$('#headerNav ul li a').removeClass('active');
			$('#home').addClass('active');
    }
    if (scrollOffset > containerOffsetAbout) {
			$('#headerNav ul li a').removeClass('active');
			$('#aboutNav').addClass('active');
    }
    if (scrollOffset > containerOffsetModels) {
			$('#headerNav ul li a').removeClass('active');
			$('#modelsNav').addClass('active');
    }
    if (scrollOffset > containerOffsetContact) {
			$('#headerNav ul li a').removeClass('active');
			$('#contactNav').addClass('active');
		}

    if ($('#home').hasClass('active')){
      $('#toTop').fadeOut('500');
    }
    else {
      $('#toTop').fadeIn('500');
    }
  });
  //SCROLL FUNCTIONALITY END

  //NAVIGATION CLICK-SCROLL
  $('.buttonInfo').click(function(event){
  	event.preventDefault();
  	var target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $("#" + target).offset().top - 2.5 * $('#headerNav').height()
    }, 500);
 	});

  $('.navigation').find('a').click(function(event){
  	event.preventDefault();
  	var target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $("#" + target).offset().top - 2.5 * $('#headerNav').height()
    }, 500);
   });
   
   $('#footerNav').find('a').click(function(event){
  	event.preventDefault();
  	var target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $("#" + target).offset().top - 2.5 * $('#headerNav').height()
    }, 500);
 	});

	$('#toTop').click(function(event){
		event.preventDefault();
		var target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $("#" + target).offset().top
    }, 500);

  });
  //NAVIGATION CLICK-SCROLL END
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
  let hero = document.getElementById('hero');
  hero.innerHTML = '';
  for(i = 0; i < images.length; i++) {
    hero.innerHTML += '<img class="heroIMG" src="images/' + images[i] + '.jpg" alt="Hero image' + i + '"/>';
  };
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

function modelLoad(){
  let modelDivs = document.getElementById('modelsLoad');
  let imgModels = ['modelX.jpg', 'modelY.jpg', 'modelS.jpg', 'model3.jpg', 'roadster.jpg', 'cybertruck.jpg']
  let models = ['Model X', 'Model Y', 'Model S', 'Model 3', 'Roadster',  'Cybertruck'];
  let date = ['September 2015', 'November 2019', 'June 2012', 'July 2017', '2020', '2020'];
  let range = ['523km', '483km', '600km', '402km', '997km', '804km'];
  let price = ['$84,990', '$39,000', '$79,990', '$36,000', '$200,000', '$39,900'];

  modelDivs.innerHTML = '';
  for (i = 0; i < imgModels.length; i++){
    modelDivs.innerHTML += 
    `<div class="modelInfo">
      <div class="information">
      <img class="modelIMG" src="images/${imgModels[i]}" alt="" />
      <table class="modelInfo">
        <tr>
          <td>Name:</td>
          <td>${models[i]}</td>
        </tr>
        <tr>
          <td>Date:</td>
          <td>${date[i]}</td>
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
      <a class="buttonInfo" href="${models[i].replace(/\s+/g, '')}">More info</a>
    </span>
    </div>
    `;
  }



}

function detailsLoad(){
    let detailDivs = document.getElementById('modelDetails');
    let detailIMG = ['detailsX.jpg', 'detailsY.jpg', 'detailsS.jpg', 'details3.jpg', 'detailsRoadster.jpg', 'detailsCybertruck.jpg']
    let models = ['Model X', 'Model Y', 'Model S', 'Model 3', 'Roadster',  'Cybertruck'];
    let modelTexts =[ 
      `'The Model X weighs about 8% more than the Model S and shares about 30% of its parts content – down from around 60% expected when development began. The cargo space is 87.8 ft³. Over the years, the Model X has been available with four lithium-ion battery packs, rated at either 60, 75, 90, or 100 kW·h. The highest performance version of the model P100D goes from 0 to 60 mph (0 to 97 km/h) in 2.7 seconds and the 1⁄4 mile (400 meters) in 11.4 seconds, outperforming the fastest SUVs and most sports cars. The Model X's all-wheel-drive system uses two motors (one for the front and the other for the rear wheels), unlike conventional AWD systems that have a single source of power. The Tesla Model X 100D has an official EPA rated range of up to 325 mi (523 km).
        
      The company planned to offer rear-wheel-drive models, but instead all models use all-wheel drive. The standard AWD has 259 horsepower (193 kilowatts) on both the front and rear motors, while the performance edition has 259 hp (193 kW) front and 503 hp (375 kW) rear. With an optional towbar, the Model X has a towing capacity of up to 5,000 pounds (2,300 kg). At the 55 mph (89 km/h) towing speed limit in California, a Model X may have 70% of the 257 mi (414 km) EPA-registered range when pulling a 2,300 lb (1,000 kg) travel trailer.'`,

      `Tesla originally announced plans at the unveil to assemble the Model Y at Gigafactory 1 in Nevada, along with the battery and drivetrain for the vehicles, unlike the Model 3, where drivetrains and batteries are assembled at Gigafactory 1, with final assembly is completed at the Tesla Factory in Fremont, California. Two months later, in May 2019, Tesla confirmed that they instead plan to shuffle production lines at the Tesla Fremont Factory to make space for Model Y production. Later, Model Y will also be assembled at Gigafactory 3 in Shanghai, China and Tesla Gigafactory Europe in Berlin, Germany.

      US deliveries will start in summer 2020[3] for the Long Range, Dual Motor, and Performance versions; deliveries will start in early 2021 for the Standard Range version. After initial rollout, Tesla is expected to begin shipping cars to the Canadian and Mexican markets, and right-hand drive European markets thereafter. Once Gigafactory 3 in Shanghai is operational, Model Y vehicles for Asian markets will be available.`,

      `The Model S is notable for being designed solely with an electric powertrain in mind, unlike other vehicles where the manufacturer has simply swapped out or supplanted an internal combustion engine with an electric motor. As a result, the Model S is able to offer unique features such as a front trunk (a "frunk") in addition to a spacious rear trunk (with a total cargo volume of 31.56 cu ft or 894 L) (rear wheel drive version has bigger frunk) and a greatly enlarged front crumple zone compared to the typical combustion engine powered vehicle.

      To enhance livability, Tesla has developed a network of fast-charging 'Supercharger' stations that allow the driver to quickly and easily top-up the charge on their Model S. A Supercharger takes about 20 minutes to charge to 50%, 40 minutes to charge to 80%, and 75 minutes to 100% on the original 85 kWh Model S. Supercharger networks have rapidly expanded in Europe, across the United States, and in other countries where there is significant demand, and as of September 2016, the network has been established in most American states, thus making cross-country and long distance trips in an electric vehicle feasible and greatly alleviating range anxiety`,

      `As production began in 2017, the base Model 3 was announced to have a 50-kWh battery with a range of about 220 miles (350 km) while the optional 75-kWh battery would have a range of about 310 miles (500 km). In the event, Tesla did not produce any base Model 3s in 2017 or 2018. The battery uses 2170-size lithium-ion cells
      As of 2017, the 350-volt Model 3 battery pack was made of four longitudinal modules each containing the individual battery cells. The Standard Range version carries 2,976 cells arranged in groups of 31. The Long Range version carries 4,416 cells arranged in groups of 46, and weighs 480 kg.
      
      Tesla continues to improve the design of the 2170 battery cell and introduces incremental improvements into the manufacturing line periodically. Tesla began manufacture of the "lighter, better, cheaper" 2170 cell during 2018, with a company goal of reducing the cost of assembled battery packs to US$100 per kilowatt-hour (kWh) by December 2018, and moving the new cell into volume production at Gigafactory 1 during the first quarter of 2019. Electrek reported in late 2018 that the improved battery cell design was needed to further reduce battery costs as Tesla was planning to begin to deliver the Model 3 Standard Range for the promised base price of US$35,000 the following year.`,

      `The second-generation Tesla Roadster is a 2+2 coupé with a removable glass roof. It was designed by Franz von Holzhausen, who formerly worked at Mazda and Volkswagen. The Roadster has a 2+2 seating arrangements, with smaller rear seats for two passengers.

      The Roadster has three electric motors, one in front and two at the rear, allowing for all-wheel drive, and torque vectoring during cornering. Tesla said that the vehicle had a 200 kWh (720 MJ) battery, twice the capacity of the Tesla Model S P100D, and giving a 1,000 km (620 miles) range on one charge at highway speeds. Tesla stated that the torque at wheels was 10,000 N⋅m (7,400 lb⋅ft). The rear wheels are larger than the front wheels.`,

      `The truck will use self-leveling suspension which compensates for variable load and some models will have all-wheel drive. Other standard features include on-board power inverters for supplying both 120 and 240-Volt electricity, allowing use of power tools without a portable generator. An air compressor for powering pneumatic tools is included. The exterior is bullet-resistant against 9 mm caliber bullets as well. All vehicles will also come standard with Tesla Autopilot, and will have the hardware capabilities for fully autonomous operation. As of November 2019, Tesla was accepting pre-orders for $100, with a $7,000 'full self-driving' option.

      The range of the Cybertruck varies from 250–500 miles (400–800 km), depending on configuration selections.`
    ];

    detailDivs.innerHTML = '';
    for (i = 0; i < detailIMG.length; i++){
      detailDivs.innerHTML += 
        `<div  id="${models[i].replace(/\s+/g, '')}">
          <div class="titleDivider">
            <h2 class="underline">${models[i]}</h2>
          </div>
          <article class="singleModel">
            <img class ="modelIMG" src="images/${detailIMG[i]}" alt ="Tesla ${models[i]} details" />
            <p class="detailsParagraph">${modelTexts[i]}</p>
          </article>
        </div>`;
    }
    
}
