import React, { useEffect, useState } from "react"
import { Stack, TextField, Button, Container, Typography } from "@mui/material"
import { LoginStyles } from "./LoginStyles.styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setIsUserLogin, setUserData } from "../../reduxStore/reducers/LoginReducer";

const Login = () => {
    const
        classes = LoginStyles(),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        navigate = useNavigate(),
        dispatch = useDispatch(),
        [loginButtonDisable, setLoginButtonDisale] = useState(true);

    // check data is present in store or not
    useEffect(() => {
        let data = window.localStorage.getItem("bitCotData")
        if (data != null) {
            const convertData = JSON.parse(data)
            // if isUserLogin , property present or not
            if (convertData.hasOwnProperty("isUserLogin")) {
                // if value true
                if (convertData.isUserLogin) {
                    // dispatch data to store
                    dispatch(setIsUserLogin(convertData.isUserLogin))
                    // userData
                    dispatch(setUserData(convertData.userData))
                    // navigate to home
                    navigate("/home", { replace: true })
                }
            }
            console.log("data ", convertData)
        }
        
    }, [])

    useEffect(() => {
        const isEmpty = (email !== "" && password !== "")
        // if text fields not empty
        if (isEmpty) {
            // enable login button
            setLoginButtonDisale(false)
        }
        else {
            // disable login button
            setLoginButtonDisale(true)
        }
    }, [email, password])

    // when user click create one button
    // navigate to signup
    const onCreateOneHandler = () => {
        navigate("/signup")
    }

    // when use click login button navigate to Home screen
    const onLoginHandler = () => {
        // set islogin
        dispatch(setIsUserLogin(true))
        navigate("/home")
    }

    return (
        <Container>
            <Stack
                spacing={2}
                alignItems={"center"}
                marginTop={4}
            >
                {/* title */}
                <Typography variant="h4" gutterBottom component="div">
                    Login to your Account
                </Typography>
                {/* email text field */}
                <TextField
                    placeholder="Email"
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                    className={classes.textField}
                />
                {/* password text field */}
                <TextField
                    placeholder="Password"
                    type={"password"}
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                    className={classes.textField}
                />
                {/* Login button */}
                <Button
                    variant="contained"
                    disabled={loginButtonDisable}
                    className={classes.loginButton}
                    sx={{
                        textTransform: "capitalize"
                    }}
                    onClick={onLoginHandler}
                >
                    Login
                </Button>
                {/* create new account */}
                <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Don't you have an account?
                    </Typography>
                    {/* createOne button */}
                    <Button
                        variant="outlined"
                        className={classes.createButton}
                        sx={{
                            textTransform: "capitalize"
                        }}
                        onClick={onCreateOneHandler}
                    >
                        Create one!
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Login