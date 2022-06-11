import { createSlice } from "@reduxjs/toolkit"

// initial value
const initialValues = {
    daily: [],
    hourly: [],
    current: null
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
        }
    }
})

export const { setCurrentWeather, setHourslyAndDaily } = weatherReducer.actions

export default weatherReducer.reducer