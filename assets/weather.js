var cityBox = document.getElementById('City');
var tempBox = document.getElementById('Temp');
var windBox = document.getElementById('Wind');
var humidBox = document.getElementById('Humid');
// var city = document.getElementById('search').value;
var form = document.getElementById('button');

let apiKey = '8eba77eeb7411a74f0653e3bdb8761e7';


// let geoApi = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=2&appid=';
// var geoURL = geoApi + apiKey;

var currentWeather = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=';
var fiveDayWeather;

 function cW() {

    var city = document.getElementById('search').value;
    let geoApi = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=2&appid=';
    var geoURL = geoApi + apiKey;
    var lon = [];
    var lat = [];

    
    fetch(geoURL)

    .then (function(response) {
        return response.json();
    })

    .then (function(data){
        console.log(data);
        lon = data[0].lon;
        lat = data[0].lat;
        let baseAPI = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial' + '&appid=' + apiKey;
        fetch(baseAPI)

        .then (function(response2){
            return response2.json();
        })

        .then (function(data2){
            console.log(data2);
            cityBox.textContent = data2.city.name;
            tempBox.textContent = 'Temperature: ' + data2.list[0].main.temp + '°';
            windBox.textContent = 'Wind Speed: ' + data2.list[0].wind.speed + 'MPH';
            humidBox.textContent = 'Humidity: ' + data2.list[0].main.humidity;
            cityBox.append = (cityBox);
            tempBox.append = (tempBox);
            windBox.append = (windBox);
            humidBox.append = (humidBox);
        })
        
    })}; 

form.addEventListener('click', cW);

// function geoCode() {
//     fetch(geoURL)

//     .then(function(feedback) {
//         return feedback.json();
//     })

//     .then (function(data2){ 
//         console.log(data2);
//     })
// }

// geoCode();













    






