var cityBox = document.getElementById('City');
var tempBox = document.getElementById('Temp');
var windBox = document.getElementById('Wind');
var humidBox = document.getElementById('Humid');
var fiveBox = document.getElementById('fiveDay');
var temp2 = document.getElementById('temp2');
var wind2 = document.getElementById('wind2');
var humid2 = document.getElementById('humid2');
var temp3 = document.getElementById('temp3');
var wind3 = document.getElementById('wind3');
var humid3 = document.getElementById('humid3');
var temp4 = document.getElementById('temp4');
var wind4 = document.getElementById('wind4');
var humid4 = document.getElementById('humid4');
var temp5 = document.getElementById('temp5');
var wind5 = document.getElementById('wind5');
var humid5 = document.getElementById('humid5');
var temp6 = document.getElementById('temp6');
var wind6 = document.getElementById('wind6');
var humid6 = document.getElementById('humid6');
var date2 = document.getElementById('date2');

// var city = document.getElementById('search').value;
var form = document.getElementById('button');

let apiKey = '8eba77eeb7411a74f0653e3bdb8761e7';


// let geoApi = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=2&appid=';
// var geoURL = geoApi + apiKey;

var currentWeather = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid='

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
            tempBox.textContent = 'Temp: ' + data2.list[0].main.temp + '°';
            windBox.textContent = 'Wind Speed: ' + data2.list[0].wind.speed + 'MPH';
            humidBox.textContent = 'Humidity: ' + data2.list[0].main.humidity;
            cityBox.append = (cityBox);
            tempBox.append = (tempBox);
            windBox.append = (windBox);
            humidBox.append = (humidBox);

            var fiveDayWeather = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial' + '&appid=' + apiKey;

            fetch(fiveDayWeather)
            .then (function(response3) {
                return response3.json();
            })

            .then (function(data3){
                console.log(data3)
                temp2.textContent = 'Temp: ' + data3.list[0].main.temp + '°';
                wind2.textContent = 'Wind: ' + data3.list[0].wind.speed;
                humid2.textContent = 'Humidity: ' + data3.list[0].main.humidity;
                temp2.append = (temp2);
                wind2.append = (wind2);
                humid2.append = (humid2);
                temp3.textContent = 'Temp: ' + data3.list[13].main.temp + '°';
                wind3.textContent = 'Wind: ' + data3.list[13].wind.speed;
                humid3.textContent = 'Humidity: ' + data3.list[13].main.humidity;
                temp3.append = (temp3);
                wind3.append = (wind3);
                humid3.append = (humid3);
                temp4.textContent = 'Temp: ' + data3.list[20].main.temp + '°';
                wind4.textContent = 'Wind: ' + data3.list[20].wind.speed;
                humid4.textContent = 'Humidity: ' + data3.list[20].main.humidity;
                temp4.append = (temp4);
                wind4.append = (wind4);
                humid4.append = (humid4);
                temp5.textContent = 'Temp: ' + data3.list[29].main.temp + '°';
                wind5.textContent = 'Wind: ' + data3.list[29].wind.speed;
                humid5.textContent = 'Humidity: ' + data3.list[29].main.humidity;
                temp5.append = (temp5);
                wind5.append = (wind5);
                humid5.append = (humid5);
                temp6.textContent = 'Temp: ' + data3.list[37].main.temp + '°';
                wind6.textContent = 'Wind: ' + data3.list[37].wind.speed;
                humid6.textContent = 'Humidity: ' + data3.list[37].main.humidity;
                temp6.append = (temp6);
                wind6.append = (wind6);
                humid6.append = (humid6);
            })

        })
        
    })}; 


form.addEventListener('click', cW);














    






