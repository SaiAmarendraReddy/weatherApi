import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './reducers/LoginReducer'


export const store = configureStore({
    reducer: {
        loginStore: loginReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})