// function getCity(event){
//     event.preventDefault();
//     let value1= document.getElementById("#city-input").value;
//     let h1= document.querySelector("#city-name");
//     document.getElementById("#city-name").innerHTML = value1;
// }



function displayTemperature(response){
    console.log(response.data);
    let temperatureElement=document.querySelector("#temperature"); 
    temperatureElement.innerHTML= Math.round(response.data.main.temp);
    let cityElement= document.querySelector("#city");
    cityElement.innerHTML= response.data.name;
}

let apiKey = "915204bb13bbec134e32fb3c5dd5973e"; 
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);



