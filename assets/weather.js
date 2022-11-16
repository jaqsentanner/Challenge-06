var cityBox = document.getElementById('City');
var tempBox = document.getElementById('Temp');
var windBox = document.getElementById('Wind');
var humidBox = document.getElementById('Humid');


let apiKey = '8eba77eeb7411a74f0653e3bdb8761e7';
let baseAPI = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=';

var currentWeather = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=';
var fiveDayWeather;

var city = document.getElementById('search').value;
var form = document.getElementById('button')

function cW() {

    var city = document.getElementById('search').value;
    var currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
    
    fetch(currentURL)

    .then (function(response) {
        return response.json();
    })

    .then (function(data){
        console.log(data);
        cityBox.textContent = data.name;
        tempBox.textContent = 'Temperature: ' + data.main.temp;
        windBox.textContent = 'Wind Speed: ' + data.wind.speed;
        humidBox.textContent = 'Humidity: ' + data.main.humidity;
        cityBox.append = (cityBox);
        tempBox.append = (tempBox);
        windBox.append = (windBox);
        humidBox.append = (humidBox);
    });
}

form.addEventListener('click', cW);













    






