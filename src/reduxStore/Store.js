import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './reducers/LoginReducer'
import weatherReducer from './reducers/WeatherReducer'

export const store = configureStore({
    reducer: {
        loginStore: loginReducer,
        weatherStore: weatherReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})