const inpb=document.querySelector("input");
const  searchbt=document.querySelector("button");
const weatherimg=document.querySelector("#imgw");
const temp=document.querySelector("#temp");
const humidity =document.querySelector("#humidity");
const windspeed=document.querySelector("#wind");
const dis=document.querySelector("#city");
const bg=document.querySelector("#main");

bg.style.backgroundImage = 'url("cloudy.jpg")';

async function weatherupdate(city){


  if (!city) {
    
    temp.innerHTML = "";
    humidity.innerHTML = "";
    windspeed.innerHTML = "";
    dis.innerHTML = "Please provide a city name.";
    document.getElementById("weatherDetails").classList.add("hidden");
    

    return; 
}
 
    const api_key="20ea4dbb2899183311392147b8289543";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data=await fetch(`${url}`).then(response =>response.json());
  temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)+"°C"}`;
  
  if (weather_data.cod && weather_data.cod !== 200) {
    // Clear UI elements or display a message indicating invalid city
    temp.innerHTML = "";
    humidity.innerHTML = "";
    windspeed.innerHTML = "";
    dis.innerHTML = "Invalid city name. Please try again.";
    document.getElementById("weatherDetails").classList.add("hidden");
    return; // Exit the function
}
  
  humidity.innerHTML=`${weather_data.main.humidity +"%"}`;
  windspeed.innerHTML=`${weather_data.wind.speed+"KM/h"}`;
  dis.innerHTML=`${weather_data.name}`;



  
  if(weather_data.weather[0].description=="fog"){
    weatherimg.src="fog.png";
  
    bg.style.backgroundImage=("url('mist.jpg')");


  }
  else if(weather_data.weather[0].description=="cloudy"){
    weatherimg.src="cloudy.png";
    
    bg.style.backgroundImage="url('cloudy.jpg')";
  }
  else if(weather_data.weather[0].description=="haze"){
    weatherimg.src="haze.png";
    
    bg.style.backgroundImage="url('haze.jpg')";
  }
  else if(weather_data.weather[0].description=="clear sky"){
    weatherimg.src="sun.png";
    
    bg.style.backgroundImage="url('clear.jpg')";
  }
  else if(weather_data.weather[0].description=="rain"){
    weatherimg.src="rain(1).png";
    
    bg.style.backgroundImage="url('rain.jpg')";
  }
  else if(weather_data.weather[0].description=="mist"){
    weatherimg.src="haze.png";
   
    bg.style.backgroundImage="url('haze.jpg')";
  }

  document.getElementById("weatherDetails").classList.remove("hidden");
  document.getElementById("weatherDetails").classList.add("opacity-1")
  
}



searchbt.addEventListener("click",()=>{
    weatherupdate(inpb.value);
    
});
inpb.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    weatherupdate(inpb.value);
  }
});




