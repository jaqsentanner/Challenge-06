const apiKey = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=8eba77eeb7411a74f0653e3bdb8761e7';

fetch(url)

.then (function(response) {
    return response.json();
})

.then (function(data){
    console.log(data);
})

