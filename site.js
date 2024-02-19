function openNav() {
   
    document.getElementById("mySidenav").style.marginLeft = "0vw";
    document.getElementById("main").style.marginLeft = "0vw";

  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.marginLeft = "-100vw";
    document.getElementById("main").style.marginLeft= "0vw";
  }

const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);


let state=false;
function clickBell(){
  // state=!state;
  console.log(state)
  let notification = document.getElementById("notification-icon");




if (state===false){
  notification.innerHTML="Subscribed"

  state=true
} else{
  notification.innerHTML="Subscribe for notifications";

  state=false;
}
}



const key = '50c2bc48e2ae5b37bf4637a5d16d2377';
if(key=='') document.getElementById('temp').innerHTML = ('Remember to add your api key from openweathermap.org/api');



function weatherBallon( cityID ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
    
    console.log(data);
		drawWeather(data);
	})
	.catch(function() {
		// catch any errors
	});
}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  var description = d.weather[0].description; 
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
  
  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  } else {
  	document.body.className = 'clear';
  }
}
window.onload = function() {
	weatherBallon( 1255634 );
}