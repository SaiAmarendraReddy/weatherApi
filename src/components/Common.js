import { keys, setIsUserLogin, setUserData } from "../reduxStore/reducers/LoginReducer"
import { setCoordinates, setCurrentWeather, setHourslyAndDaily } from "../reduxStore/reducers/WeatherReducer"
import { store } from "../reduxStore/Store"

export const APIKEY = "671ade2a8a1c9dad34dddd497500be31"
export const BASE_URL = "https://api.openweathermap.org/data/2.5"

export const getCoordinates = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {

            const data = { lat: position.coords.latitude, lon: position.coords.longitude }
            store.dispatch(setCoordinates(data))
        },
            (error) => {
                console.log(error)
            })

        let id = navigator.geolocation.watchPosition((position) => {
            const data = { lat: position.coords.latitude, lon: position.coords.longitude }
            store.dispatch(setCoordinates(data))
        })
    }
    else {
        console.log("no geloaction")
    }
}

// url
const getUrl = (type) => {
    const coordinates = store.getState().weatherStore.coordinates
    const country = store.getState().loginStore.userData.country
    let url;

    if (coordinates !== null) {
        url = `${BASE_URL}/${type}?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${APIKEY}&units=metric`
    }
    else {
        if (type == "weather")
            url = `${BASE_URL}/${type}?q=${country}&appid=${APIKEY}&units=metric`
        else {
            const { coord } = store.getState().weatherStore.current
            // console.log((coord != null | coord != undefined),"----------------")
            url = `${BASE_URL}/${type}?lat=${coord.lat}&lon=${coord.lon}&appid=${APIKEY}&units=metric`
        }

    }
    return url;
}

export const getWeatherData = async () => {
    const url = getUrl("weather");
    try {
        const apiCall = await fetch(url)
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
    const url = getUrl("onecall");
    try {
        const apiCall = await fetch(url)
        const data = await apiCall.json()
        // hourly
        console.log("hourly", data.hourly, data)
        //daily
        console.log("daily", data.daily)
        store.dispatch(setHourslyAndDaily({ daily: data.daily.slice(1, 6), hourly: data.hourly }))
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

// get data from localstorage
export const getDataFromLocalStorage = (navigate) => {
    const userLogin = window.localStorage.getItem(keys.loggedKey)
    const user = window.localStorage.getItem(keys.detailsKey)
    // console.log(userLogin, user)
    if (userLogin != null) {
        const userlog = JSON.parse(userLogin)
        store.dispatch(setIsUserLogin(userlog.isUserLogin))
        navigate("/home")
    }
    if (user !== null) {
        const usrdetails = JSON.parse(user)
        store.dispatch(setUserData(usrdetails.userData))
    }
}

// store data in localstorage
export const dataToLocalStorage = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data))
}
