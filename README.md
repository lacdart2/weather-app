# Weather App

This is a simple weather app built using HTML, CSS, and Vanilla JavaScript. It allows users to retrieve weather information for a chosen city and displays it on the screen. Additionally, the background image of the body changes dynamically based on the weather condition of the selected city.

## How to Use

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Enter the name of the desired city in the input field provided.
4. Click on the "Get Weather" button to retrieve and display the weather information.

## Features

### Weather Information
Upon entering a city name and clicking the "Get Weather" button, the app retrieves the current weather data from an external API and displays the following information:

- Temperature: The current temperature in degrees Celsius.
- Weather Condition: A brief description of the weather condition (e.g., sunny, cloudy, rainy).
- Humidity: The percentage of humidity in the air.
- Wind Speed: The speed of the wind in kilometers per hour.

### Dynamic Background Image
The background image of the app's body changes dynamically based on the weather condition of the chosen city. Different weather conditions have corresponding background images to enhance the visual experience and provide a visual representation of the weather.

## APIs Used

This app utilizes an external API to retrieve the weather data. The API used is [OpenWeatherMap](https://openweathermap.org/), which provides a wide range of weather information for various locations worldwide. 

Please note that an API key is required to make requests to OpenWeatherMap. Ensure you have a valid API key and update the `script.js` file in the appropriate section with your API key:

```javascript
const apiKey = 'YOUR_API_KEY';
```

Replace `'YOUR_API_KEY'` with your actual API key.

## Credits

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data.
- Background images obtained from [Unsplash](https://unsplash.com/) and [Pexels](https://www.pexels.com/).

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and use it according to your needs.
