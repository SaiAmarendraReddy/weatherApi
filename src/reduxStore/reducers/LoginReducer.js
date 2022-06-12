import { createSlice } from "@reduxjs/toolkit"

//export localstorage keys
export const keys = {
    loggedKey: "bitCotUserLogged",
    detailsKey: "bitCotUserDetails"
}

// initial values
const initialValues = {
    isUserLogin: false,
    userData: {
        firstName: "",
        lastName: "",
        fullName: "",
        email: "",
        password: "",
        gender: "",
        dob: "",
        country: "",
        age: 0
    }
}

// createSlice
export const loginReducer = createSlice({
    name: "loginReducer",
    initialState: initialValues,
    reducers: {
        // change the state of isUserLogin or not
        setIsUserLogin: (state, action) => {
            state.isUserLogin = action.payload
            // store data in localstore
            // isUserLogin: state.isUserLogin,
            window.localStorage.setItem(keys.loggedKey, JSON.stringify({ isUserLogin: state.isUserLogin }))
        },
        // store the user data
        setUserData: (state, action) => {
            console.log("user data in store ", action.payload)
            // firstName
            state.userData.firstName = action.payload.firstName
            // lastName
            state.userData.lastName = action.payload.lastName
            // full name
            state.userData.fullName = action.payload.firstName.concat(" ").concat(action.payload.lastName)
            // email
            state.userData.email = action.payload.email
            // password
            state.userData.password = action.payload.password
            // gender
            state.userData.gender = action.payload.gender
            // DOB
            state.userData.dob = action.payload.dob
            // age
            state.userData.age = action.payload.age
            // Country
            state.userData.country = action.payload.country

            // store data in localstore
            window.localStorage.setItem(keys.detailsKey, JSON.stringify({ userData: state.userData }))
        },

        // when user click logout clear the storage
        clearStorage: (state, action) => {
            window.localStorage.removeItem(keys.detailsKey)
            window.localStorage.removeItem(keys.loggedKey)
            state.isUserLogin = false
            state.userData = {
                firstName: "",
                lastName: "",
                fullName: "",
                email: "",
                password: "",
                gender: "",
                dob: "",
                country: "",
                age: 0
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { setIsUserLogin, setUserData, clearStorage } = loginReducer.actions

export default loginReducer.reducer