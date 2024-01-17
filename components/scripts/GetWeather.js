export default function GetWeather(done, store, router, axios) {
  axios
    // Get request to retrieve the current weather data using the API key and providing city name
    .get(
      `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
    )
    .then(response => {
      // Convert Kelvin to Fahrenheit since OpenWeatherMap does not provide otherwise
      const kelvinToFahrenheit = kelvinTemp =>
        Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

      // Create an object to be stored in the Home state from the response
      store.Footer.weather = {
        city: response.data.name,
        temp: kelvinToFahrenheit(response.data.main.temp),
        feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
        description: response.data.weather[0].main
      };
      done();
    })
    .catch(err => {
      console.log(err);
      done();
    });
}
