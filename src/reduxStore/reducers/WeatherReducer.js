import { createSlice } from "@reduxjs/toolkit"

// initial value
const initialValues = {
    daily: [],
    hourly: [],
    current: null,
    weatherCompentRender: false
}

export const weatherReducer = createSlice({
    name: "weatherStore",
    initialState: initialValues,
    reducers: {
        // set current weather
        setCurrentWeather: (state, action) => {
            console.log("current weather ", action.payload)
            state.current = action.payload
        },
        setHourslyAndDaily: (state, action) => {
            state.daily = action.payload.daily
            state.hourly = action.payload.hourly
        },
        setWeatherComponent: (state, action) => {
            state.weatherCompentRender = action.payload
        }
    }
})

export const { setCurrentWeather, setHourslyAndDaily, setWeatherComponent } = weatherReducer.actions

export default weatherReducer.reducer