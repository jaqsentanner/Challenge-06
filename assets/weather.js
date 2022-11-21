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
var icon1 = document.getElementById('icon1');
var icon2 = document.getElementById('icon2');
var icon3 = document.getElementById('icon3');
var icon4 = document.getElementById('icon4');
var icon5 = document.getElementById('icon5');
var icon6 = document.getElementById('icon6');

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
            var image1 = data2.list[0].weather[0].icon;
            cityBox.textContent = data2.city.name;
            tempBox.textContent = 'Temp: ' + data2.list[0].main.temp + '°';
            windBox.textContent = 'Wind Speed: ' + data2.list[0].wind.speed + 'MPH';
            humidBox.textContent = 'Humidity: ' + data2.list[0].main.humidity + '%';
            icon1.innerHTML = `<img src='http://openweathermap.org/img/wn/${image1}@2x.png' alt='weathericon'>`
            cityBox.append = (cityBox);
            tempBox.append = (tempBox);
            windBox.append = (windBox);
            humidBox.append = (humidBox);
            icon1.append = (icon1);
            

            var fiveDayWeather = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial' + '&appid=' + apiKey;

            fetch(fiveDayWeather)
            .then (function(response3) {
                return response3.json();
            })

            .then (function(data3){
                console.log(data3)
                var image2 = data3.list[0].weather[0].icon;
                var image3 = data3.list[13].weather[0].icon;
                var image4 = data3.list[20].weather[0].icon;
                var image5 = data3.list[29].weather[0].icon;
                var image6 = data3.list[37].weather[0].icon;
                temp2.textContent = 'Temp: ' + data3.list[0].main.temp + '°';
                wind2.textContent = 'Wind: ' + data3.list[0].wind.speed;
                humid2.textContent = 'Humidity: ' + data3.list[0].main.humidity + '%';
                icon2.innerHTML = `<img src='http://openweathermap.org/img/wn/${image2}@2x.png' alt='weathericon'>`;
                temp2.append = (temp2);
                wind2.append = (wind2);
                humid2.append = (humid2);
                icon2.append = (icon2);
                temp3.textContent = 'Temp: ' + data3.list[13].main.temp + '°';
                wind3.textContent = 'Wind: ' + data3.list[13].wind.speed;
                humid3.textContent = 'Humidity: ' + data3.list[13].main.humidity + '%';
                icon3.innerHTML = `<img src='http://openweathermap.org/img/wn/${image3}@2x.png' alt='weathericon'>`;
                temp3.append = (temp3);
                wind3.append = (wind3);
                humid3.append = (humid3);
                icon3.append = (icon3);
                temp4.textContent = 'Temp: ' + data3.list[20].main.temp + '°';
                wind4.textContent = 'Wind: ' + data3.list[20].wind.speed;
                humid4.textContent = 'Humidity: ' + data3.list[20].main.humidity + '%';
                icon4.innerHTML = `<img src='http://openweathermap.org/img/wn/${image4}@2x.png' alt='weathericon'>`;
                temp4.append = (temp4);
                wind4.append = (wind4);
                humid4.append = (humid4);
                icon4.append = (icon4);
                temp5.textContent = 'Temp: ' + data3.list[29].main.temp + '°';
                wind5.textContent = 'Wind: ' + data3.list[29].wind.speed;
                humid5.textContent = 'Humidity: ' + data3.list[29].main.humidity + '%';
                icon5.innerHTML = `<img src='http://openweathermap.org/img/wn/${image5}@2x.png' alt='weathericon'>`;
                temp5.append = (temp5);
                wind5.append = (wind5);
                humid5.append = (humid5);
                icon5.append = (icon5);
                temp6.textContent = 'Temp: ' + data3.list[37].main.temp + '°';
                wind6.textContent = 'Wind: ' + data3.list[37].wind.speed;
                humid6.textContent = 'Humidity: ' + data3.list[37].main.humidity + '%';
                icon6.innerHTML = `<img src='http://openweathermap.org/img/wn/${image6}@2x.png' alt='weathericon'>`;
                temp6.append = (temp6);
                wind6.append = (wind6);
                humid6.append = (humid6);
                icon6.append = (icon6);
            })

        })
        
    })}; 


form.addEventListener('click', cW);














    






