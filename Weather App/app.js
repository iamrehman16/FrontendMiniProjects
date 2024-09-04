//api key
const APIkey = "35d4aa18df0b80fdeb35dc2b8e3966df";

//api url
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric"; //&q={city name}&appid={API key}

//getting button
const searchButton = document.querySelector(".search button");
const container=document.querySelector(".container");

//main code event
searchButton.addEventListener("click", () => {
  let cityName = document.querySelector(".search input").value;

  //getting weather data
  updateWeather(cityName);
});

//api interaction
async function updateWeather(city) {
  // city='lahore';
  let response = await fetch(URL + `&q=${city}&appid=` + APIkey);
  let weatherData = await response.json();


  if(weatherData.cod==404){
    document.querySelector(".search input").value='Invalid City/Country';
  }
  else{
    //update animation delay
    if(container.classList.contains("transit")){
        container.classList.remove("transit");
        void container.offsetWidth;
    }
    container.classList.add("transit");

  //setting elements
  document.querySelector(".temp").innerHTML = Math.floor(weatherData.main.temp) + "°C";
  document.querySelector(".name").innerHTML = weatherData.name;
  document.querySelector(".min-temp").innerHTML =
    Math.floor(weatherData.main.temp_min) + "°C";
  document.querySelector(".max-temp").innerHTML =
    Math.floor(weatherData.main.temp_max) + "°C";
  document.querySelector(".feel").innerHTML =
    Math.floor(weatherData.main.feels_like) + "°C";
  document.querySelector(".humidity-value").innerHTML =
    weatherData.main.humidity + "%";
  document.querySelector(".wind-value").innerHTML =
    Math.floor(weatherData.wind.speed) + " mph";
  document.querySelector(".caption").innerHTML =
    weatherData.weather[0].description;
  document.querySelector(".rise-value").innerHTML = getTime(
    weatherData.sys.sunrise,weatherData.timezone
  );
  document.querySelector(".set-value").innerHTML = getTime(
    weatherData.sys.sunset,weatherData.timezone
  );

  let image=document.querySelector(".weather img");
  let atmos=weatherData.weather[0].description;
  console.log(atmos);

  if(atmos.includes('haze')){
    image.src='haze.png';
  }else if(atmos.includes('snow')){
    image.src='snow.png';
  }
  else if(atmos.includes('clear')){
    image.src='clear.png';
  }
  else if(atmos.includes('mist')){
    image.src='mist.png';
  }else if(atmos.includes('drizzle')){
    image.src='drizzle.png';
  }else if(atmos.includes('rain')){
    image.src='rain.png';
  }else if(atmos.includes('smoke')){
    image.src='smoke.png';
  }else {
    image.src='clouds.png';
  }
  }
}

//convert timestamp to hours:mins
function getTime(timestamp, timezoneOffsetInSeconds) {
    // Adjust the timestamp by adding the timezone offset (in seconds)
    const adjustedTimestamp = timestamp + timezoneOffsetInSeconds;

    // Create a new Date object using the adjusted timestamp
    const date = new Date(adjustedTimestamp * 1000);

    // Get hours and minutes
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    // Return the time in HH:MM format
    return `${hours}:${minutes}`;
}

updateWeather('New York');
