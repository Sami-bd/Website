// apki key    a73543a94eaab793503a772949bf1bf3


//     https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}





function getWeather(){
    const apiKey = 'a73543a94eaab793503a772949bf1bf3';
    const city = document.getElementById('search-input').value;
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={a73543a94eaab793503a772949bf1bf3}'

    
    fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const weatherInfo = document.getElementById('weather-info');
                    const cityName = data.name;
                    const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius

                    weatherInfo.innerHTML = `<h2>Weather in ${cityName}</h2>
                                             <p>Temperature: ${temperature}°C</p>`;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    const weatherInfo = document.getElementById('weather-info');
                    weatherInfo.innerHTML = '<p>Error fetching weather data</p>';
                });


}