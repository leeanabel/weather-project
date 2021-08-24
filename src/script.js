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

    let h2 = document.querySelector("#today");
    document.getElementById("today").innerHTML = `${day} ${hours}:${minutes}`; 
    
}


function displayTemperature(response){
    let temperatureElement=document.getElementById("temperature"); 
    temperatureElement.innerHTML= Math.round(response.data.main.temp);
    let cityElement= document.getElementById("city");
    cityElement.innerHTML= response.data.name;
    let precipitationElement= document.getElementById("description");
    precipitationElement.innerHTML = response.data.weather[0];
    let windElement = document.getElementById("wind-speed");
    windElement.innerHTML = Math.round(responses.data.wind.speed); 
   
}

let apiKey = "915204bb13bbec134e32fb3c5dd5973e"; 
let city= document.getElementById("city");
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

function searchCity(city){
let apiKey = "915204bb13bbec134e32fb3c5dd5973e"; 
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}

function searchLocation(position){
    lon = position.coords.longitude;
    lat = position.coords.latitude; 
    let apiKey = "915204bb13bbec134e32fb3c5dd5973e"; 
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
axios.get(apiUrl).then(displayTemperature); 
}

function getCurrentLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentLocation(searchLocation); 
}

// Convert F -> C

function convertFarenheitToCelsius(event){
    event.preventDefault();
    let temperature = document.querySelector("#temperature");
    let F= document.querySelector(".farenheit");
    F.addEventListener("click", convertFarenheitToCelsius);
    return ((temperature - 32) * 5) /9 ;
}

// Convert C -> F

function convertCelsiustoFarenheit(event){
    event.preventDefault();
    let celsiusElement = document.querySelector("#temperature");
    return (temperature * 9/5) +32 ); 
    celsiusElement.addEventListener ("click", convertCelsiustoFarenheit);
}
