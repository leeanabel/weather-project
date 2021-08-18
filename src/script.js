function displayTemperature(response){
console.log(response.data);
}

let apiKey = "915204bb13bbec134e32fb3c5dd5973e"; 
let city = "New York";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);



