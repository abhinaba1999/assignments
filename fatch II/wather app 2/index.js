
let forcastCont = document.getElementById("display_weather");
let form=document.querySelector("form");

async function displayWeather() {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=kolkata&appid=b7ca0dbb676f8e66b8eeb8bff4b82ee3&units=metric`);
        let data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayForecast(data) {
    let groupedData = {};

    data.list.forEach((entry) => {
        let date = new Date(entry.dt * 1000).getDate();
        if (!(date in groupedData)) {
            groupedData[date] = {
                date: date,
                weatherIds: [entry.weather[0].id],
                maxTemp: entry.main.temp_max,
                minTemp: entry.main.temp_min,
                day: new Date(entry.dt * 1000).getDay(),
            };
        } else {
            groupedData[date].weatherIds.push(entry.weather[0].id);
            groupedData[date].maxTemp = Math.max(groupedData[date].maxTemp, entry.main.temp_max);
            groupedData[date].minTemp = Math.min(groupedData[date].minTemp, entry.main.temp_min);
        }
    });

    forcastCont.innerHTML = "";
    Object.values(groupedData).forEach((entry) => {
        let mostCommonWeatherId = findMostCommonElement(entry.weatherIds);
        let dayIndex = entry.day;
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let dayOfWeek = days[dayIndex];
        forcastCont.innerHTML += `
        <div class="card">
            <h5>${dayOfWeek}</h5>
            <img src="${findSrc(mostCommonWeatherId)}" alt="img">
            <h4>${entry.maxTemp}</h4>
            <h4>${entry.minTemp}</h4>
        </div>
        `;
    });
}

function findMostCommonElement(arr) {
    let counts = {};
    let mostCommonElement = arr[0];
    let maxCount = 1;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (counts[element] === undefined) {
            counts[element] = 1;
        } else {
            counts[element]++;
        }

        if (counts[element] > maxCount) {
            mostCommonElement = element;
            maxCount = counts[element];
        }
    }

    return mostCommonElement;
}

function findSrc(weatherId) {
    if (weatherId >= 200 && weatherId <= 232) {
        // Thunderstorm
        return 'https://openweathermap.org/img/wn/11d.png   ';
    } else if (weatherId >= 300 && weatherId <= 321) {
        // Drizzle
        return 'https://openweathermap.org/img/wn/09d.png';
    } else if (weatherId >= 500 && weatherId <= 531) {
        // Rain
        return 'https://openweathermap.org/img/wn/10d.png';
    } else if (weatherId >= 600 && weatherId <= 622) {
        // Snow
        return 'https://openweathermap.org/img/wn/13d.png';
    } else if (weatherId >= 701 && weatherId <= 781) {
        // Atmosphere (Fog, Mist, Haze, etc.)
        return 'https://openweathermap.org/img/wn/50d.png';
    } else if (weatherId === 800) {
        // Clear sky
        return 'https://openweathermap.org/img/wn/01d.png ';
    } else if (weatherId >= 801 && weatherId <= 804) {
        // Clouds
        return 'https://openweathermap.org/img/wn/02d.png';
    } else {
        // Default image for unknown weather conditions
        return 'https://openweathermap.org/img/wn/03d.png.png';
    }
}




// Call the function to display weather forecast
displayWeather();
