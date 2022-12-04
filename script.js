let linkUrl = "https://api.openweathermap.org/data/2.5/weather"
let apiKey = "1f7f11f7cf71d683fd23d2b083b3c02a"
//let queryParams = "Harrisburg&units=imperial"
//("https://api.openweathermap.org/data/2.5/weather?q=Harrisburg&units=imperial&appid=1f7f11f7cf71d683fd23d2b083b3c02a")


let weather = {
    "apiKey": "1f7f11f7cf71d683fd23d2b083b3c02a",
    fetchWeather: function (city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "mph";
        document.querySelector(".weather").classList.remove("default");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}
document.querySelector(".pushMe").addEventListener("click", function () {
    weather.search();
});     

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});
weather.fetchWeather();
        






/* function getWeather(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Harrisburg&units=imperial&appid=1f7f11f7cf71d683fd23d2b083b3c02a")
        .then((res) => res.json())
        .then((data) => console.log(data))

        .catch((err) => {
            console.log("there was an error");
        });

}

getWeather(); */


/* function getWeather(){
    fetch(`${linkUrl}?q=${queryParams}&appid=${apiKey}`)
        .then((res) => res.json())
        .then((data) => console.log(data))

        .catch((err) => {
            console.log("there was an error");
        });

}

getWeather(); */








/* async function getByLocation(){
    try {
        const res = await fetch("https://api.openweathermap.org/geo/1.0/direct?q=Harrisburg,PA,US&limit=1&appid=1f7f11f7cf71d683fd23d2b083b3c02a");
        return await res.json();
    } catch (err) {
        console.error(err);
    }

}

const localWeather = getByLocation(); 
console.log("Harrisburg Info::", localWeather); */





