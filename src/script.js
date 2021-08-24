console.log("Hello");

// function getCity(event){
//     event.preventDefault();
//     let value1= document.getElementById("city-input").value;
//     let h1= document.querySelector("#city");
//     document.getElementById("city").innerHTML = value1;
// }

// document.addEventListener("click", getCity); 

function getDate(){
    let date= new Date();
    let hours = date.getHours();
    if (hours<10) {
        hours=`0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes<10) {
        minutes=`0${minutes}`;
    }
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[date.getDay()]; 

    document.getElementById("today").innerHTML = `${day} ${hours}:${minutes}`; 
    
}

function displayTemperature(response){
    let temperatureElement=document.getElementById("temperature"); 
    temperatureElement.innerHTML= Math.round(response.data.main.temp);
    let precipitationElement= document.getElementById("description");
    precipitationElement.innerHTML = response.data.weather[0].description;
    let windElement = document.getElementById("wind-speed");
    windElement.innerHTML = Math.round(response.data.wind.speed); 
    let city= document.getElementById("city"); 
    cityElement.innerHTML= response.data.city.name;
    
}

  let apiKey = "915204bb13bbec134e32fb3c5dd5973e"; 
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);


function searchCity(city){
axios.get(apiUrl).then(displayTemperature);
document.getElementById("city").innerHTML= searchCity(city);
}

function getCurrentLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentLocation(showPosition); 
}

function showPosition(position){
    lon = position.coords.longitude;
    lat = position.coords.latitude; 
    let apiKey = "915204bb13bbec134e32fb3c5dd5973e"; 
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    axios.get(apiUrl).then(getCurrentLocation); 
}

// Convert F -> C

function convertFarenheitToCelsius(farenheit){
    let temperature = document.getElementById("farenheit");
    return ((temperature - 32) * 5) /9 ;
}

    let F = document.getElementById("farenheit"); 
    F.addEventListener("click", convertFarenheitToCelsius); 
    document.querySelector(".farenheit").innerHTML = convertFarenheitToCelsius(); 
    

// Convert C -> F

function convertCelsiustoFarenheit(celsius){
    let temperature = document.getElementById("temperature");
    return (temperature * 9/5) + 32 ; 
}

document.getElementById("temperature").innerHTML = convertCelsiustoFarenheit(); 