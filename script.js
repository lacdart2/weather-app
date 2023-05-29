const apiKey = "c89982f3b3b2619955f6af86b2a1b64f"
const api_url = "https://api.openweathermap.org/data/2.5/weather"
const weatherDataEl = document.getElementById("weather-data")
const cityInputEl = document.getElementById("city-input")
const formEl = document.querySelector("form")
const weatherIcon = document.querySelector(".icon")
const background = document.querySelector(".background");
const cityName = document.querySelector(".city-name")
const countryName = document.querySelector(".country")
const searchButton = document.querySelector(".searchBtn")

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);

});





async function getWeatherData(cityValue) {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data)
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description
        const icon = data.weather[0].icon


        const city = data.name;
        const country = data.sys.country;
        console.log(country)
        cityName.innerHTML = `<h6>${city}</h6>`
        countryName.innerHTML = `<h6>${country}</h6>`

        const details = [
            `<p class="p-block">Feels </p> ${Math.round(data.main.feels_like)} °C`,
            `<p class="p-block">Humidity</p>${data.main.humidity} %`,
            `<p class="p-block">Wind</p>${data.wind.speed}m/s`
        ]



        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
            document.body.style.backgroundImage = "url('images/clouds-bg.jpg')";
            weatherIcon.innerHTML = `<img src= "images/clouds.png"/>`


        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";

            weatherIcon.innerHTML = `<img src= "images/clear.png"/>`
            document.body.style.backgroundImage = "url('images/sun-bg.jpg')";


        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
            document.body.style.backgroundImage = "url('images/rain-bg.jpg')";
            weatherIcon.innerHTML = `<img src= "images/rain.png"/>`

        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
            weatherIcon.innerHTML = `<img src= "images/drizzle.png"/>`
            document.body.style.backgroundImage = "url('images/rain-bg.jpg')";

        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
            document.body.style.backgroundImage = "url('images/snow-bg.jpg')";
            weatherIcon.innerHTML = `<img src= "images/snow.png"/>`

        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
            weatherIcon.innerHTML = `<img src= "images/mist.png"/>`

        } else {
            /*     weatherIcon.src = "images/clear.png"; */
        }
        // to check :
        /*   weatherIcon.innerHTML = `<img src= "images/clouds.png"/>` */

        /*  weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" />` */
        weatherDataEl.querySelector(".temperature").textContent = `${temperature}`
        weatherDataEl.querySelector(".description").textContent = description;
        weatherDataEl.querySelector(".details").innerHTML = details.map((detail) => `<div class="details-data">${detail}</div>`
        ).join();



    } catch (error) {

        weatherDataEl.querySelector(".icon").innerHTML = "";
        weatherDataEl.querySelector(".temperature").textContent = ""
        weatherDataEl.querySelector(".description").textContent = "An Error Occurred. Please Try Again"
        weatherDataEl.querySelector(".details").innerHTML = "";
        cityName.innerHTML = ""
        countryName.innerHTML = ""

    }
}

/* if (cityInputEl.value == "") {
    weatherDataEl.style.height = "0";
    weatherDataEl.style.backgroundColor = "transparent";
 
} else if (cityInputEl.value) {
    weatherDataEl.style.height = "auto";
} */

