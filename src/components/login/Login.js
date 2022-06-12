import React, { useEffect, useState } from "react"
import { Stack, TextField, Button, Container, Typography } from "@mui/material"
import { LoginStyles } from "./LoginStyles.styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { keys, setIsUserLogin, setUserData } from "../../reduxStore/reducers/LoginReducer";
import { useSelector } from 'react-redux'
import { getCoordinates, getDataFromLocalStorage } from "../Common";

const Login = () => {
    const
        classes = LoginStyles(),
        emailStore = useSelector(state => state.loginStore.userData.email),
        passwordStore = useSelector(state => state.loginStore.userData.password),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        navigate = useNavigate(),
        dispatch = useDispatch(),
        [emailInvalid, setEmailInvalid] = useState(false),
        [passwordInvalid, setPasswordInvalid] = useState(false),
        [isEmailPasswordMatch, setIsEmailPasswordMatch] = useState(true),
        [loginButtonDisable, setLoginButtonDisale] = useState(true);

    // check data is present in store or not
    useEffect(() => {
        getDataFromLocalStorage(navigate)
        getCoordinates()
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
    // 
    const onLoginHandler = () => {
        const isMatch = (email === emailStore && password === passwordStore)
        // if email & password match
        if (isMatch) {
            setIsEmailPasswordMatch(true)
            // set islogin
            dispatch(setIsUserLogin(true))
            navigate("/home")
        }
        // if there is 
        else if (emailStore !== "" && passwordStore !== "") {
            // if email not match
            if (email !== emailStore) {
                setEmailInvalid(true)
            }
            else {
                setEmailInvalid(false)
            }

            // if password not match
            if (password !== passwordStore) {
                setPasswordInvalid(true)
            }
            else {
                setPasswordInvalid(false)
            }
        }
        else {
            setIsEmailPasswordMatch(false)
        }
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
                    error={emailInvalid}
                    helperText={emailInvalid ? "Invalid emailID" : null}
                />
                {/* password text field */}
                <TextField
                    placeholder="Password"
                    type={"password"}
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                    className={classes.textField}
                    error={passwordInvalid}
                    helperText={passwordInvalid ? "Invalid password" : null}
                />
                {!isEmailPasswordMatch ? <h6 style={{ color: "red", fontSize: "15px" }}>Invalid credentials, create new account</h6> : null}
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