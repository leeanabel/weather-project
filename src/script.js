// function getCity(event){
//     event.preventDefault();
//     let value1= document.getElementById("#city-input").value;
//     let h1= document.querySelector("#city-name");
//     document.getElementById("#city-name").innerHTML = value1;
// }



function displayTemperature(response){
    let temperatureElement=document.querySelector("#temperature"); 
    temperatureElement.innerHTML= response.data.main.temp;
}

let apiKey = "915204bb13bbec134e32fb3c5dd5973e"; 
let city = "New York";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);



