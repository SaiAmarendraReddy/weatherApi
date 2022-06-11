import { setCurrentWeather, setHourslyAndDaily } from "../reduxStore/reducers/WeatherReducer"
import { store } from "../reduxStore/Store"

export const APIKEY = "671ade2a8a1c9dad34dddd497500be31"

export const getWeatherData = async () => {
    try {
        const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=14.1606175&lon=79.7775407&appid=${APIKEY}&units=metric`)
        const data = await apiCall.json()
        // console.log(data)
        store.dispatch(setCurrentWeather(data))
    } catch (err) {
        console.log("api fetching error", err)
    }
}

// hourly
// daily
export const getHourlyAndDaily = async () => {
    try {
        const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=14.1606175&lon=79.7775407&appid=${APIKEY}&units=metric`)
        const data = await apiCall.json()
        // hourly
        console.log("hourly", data.hourly,data)
        //daily
        console.log("daily", data.daily)
        store.dispatch(setHourslyAndDaily({ daily: data.daily.slice(1,6), hourly: data.hourly }))
    } catch (error) {
        console.log("hourly , daily Api call error ", error)
    }
}



// convert Fahrenheit to Celsius 
export const fahrenheitToCelsius = (fahrenheit) => {
    return (Math.floor((fahrenheit - 273.15)))
}

//convert timeStamp to hh:mm
export const convertTimeStamp = (timeStamp) => {
    return new Date(timeStamp * 1000).toString().substr(15, 6)
}

// get weather icon
export const getWeatherIcon = (weatherID) => {
    const weatherIcons = {
        Thunderstorm: "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain: "wi-storm-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog"
    }

    switch (true) {
        //Thunderstorm
        case (weatherID >= 200 && weatherID <= 232):
            return weatherIcons.Thunderstorm
        // Drizzle 300-321
        case (weatherID >= 300 && weatherID <= 321):
            return weatherIcons.Drizzle
        //rain 500-531
        case (weatherID >= 500 && weatherID <= 531):
            return weatherIcons.Rain
        // snow 600-622
        case (weatherID >= 600 && weatherID <= 622):
            return weatherIcons.Snow
        // atmosphere 701-781  
        case (weatherID >= 701 && weatherID <= 781):
            return weatherIcons.Atmosphere
        // clear 800
        case (weatherID == 800):
            return weatherIcons.Clear
        // clouds 801-804   
        case (weatherID >= 801 && weatherID <= 804):
            return weatherIcons.Clouds

    }
}

// Convert timestamp to day,date, month
export const timeStampToDDM = (timeStamp) => {
    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const tmp = new Date(timeStamp * 1000);
    // day
    let data = `${Days[tmp.getDay()]}, ${tmp.getDate()} ${tmp.toDateString().substring(3, 7)}`

    return data
}