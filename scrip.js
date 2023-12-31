const inpb=document.querySelector("input");
const  searchbt=document.querySelector("button");
const weatherimg=document.querySelector("#imgw");
const temp=document.querySelector("#temp");
const humidity =document.querySelector("#humidity");
const windspeed=document.querySelector("#wind");
const dis=document.querySelector("#city");

async function weatherupdate(city){
 
    const api_key="20ea4dbb2899183311392147b8289543";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data=await fetch(`${url}`).then(response =>response.json());
  temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)+"°C"}`;
  
  
  
  humidity.innerHTML=`${weather_data.main.humidity +"%"}`;
  windspeed.innerHTML=`${weather_data.wind.speed+"KM/h"}`;
  dis.innerHTML=`${weather_data.name}`;
  if(weather_data.weather[0].description=="fog"){
    weatherimg.src="fog.png";
  }
  else if(weather_data.weather[0].description=="cloudy"){
    weatherimg.src="cloudy.png";
  }
  else if(weather_data.weather[0].description=="haze"){
    weatherimg.src="haze.png";
  }
  else if(weather_data.weather[0].description=="clear"){
    weatherimg.src="sun.png";
  }
  else if(weather_data.weather[0].description=="rain"){
    weatherimg.src="rain(1).png";
  }
  else if(weather_data.weather[0].description=="mist"){
    weatherimg.src="haze.png";
  }
  
}



searchbt.addEventListener("click",()=>{
    weatherupdate(inpb.value);
    
});
inpb.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    weatherupdate(inpb.value);
  }
});