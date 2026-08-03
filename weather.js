const cityInput=document.getElementById("cityInput");
const searchBtn =document.getElementById("searchBtn");
const weatherResult=document.getElementById("weatherResult");
searchBtn.addEventListener("click",async function() {
const city = cityInput.value;
const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
const geoResponse = await fetch(geoUrl);
const geoData=await geoResponse.json();
const lat= geoData.results[0].latitude;
const lon =geoData.results[0].longitude;
const weatherUrl=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
const  weatherResponse=await fetch(weatherUrl);
const weatherData=await weatherResponse.json();
weatherResult.innerHTML = `<p>City: ${city}</p><p>Temperature: ${weatherData.current_weather.temperature}°C</p>`;
});
