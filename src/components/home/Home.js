import React, { useEffect } from "react"
import { Container, Typography, Stack, Button } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Display from "./Display";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, Outlet, useNavigate } from "react-router-dom";
import { clearStorage, setIsUserLogin } from "../../reduxStore/reducers/LoginReducer";
import { Route, Routes } from 'react-router-dom';
import Weather from "../weather/Weather";
import { setWeatherComponent } from "../../reduxStore/reducers/WeatherReducer";

const Home = () => {
    const
        name = useSelector(state => state.loginStore.userData.fullName),
        age = useSelector(state => state.loginStore.userData.age),
        gender = useSelector(state => state.loginStore.userData.gender),
        Dob = useSelector(state => state.loginStore.userData.dob),
        email = useSelector(state => state.loginStore.userData.email),
        isWeatherComponent = useSelector(state => state.weatherStore.weatherCompentRender),
        dispatch = useDispatch(),
        navigate = useNavigate(),
        country = useSelector(state => state.loginStore.userData.country);

    // when user click logout 
    const onLogoutHandler = () => {
        // changer isuserlog state
        dispatch(setIsUserLogin(false))
        // clear localstorage
        dispatch(clearStorage())
        // navigate to login
        navigate("/", { replace: true })
    }

    // when user click check weather button
    const weatherClick = () => {
        navigate("weather")
    }

    return (
        <Container sx={{ padding: 3 }}>
            {
                !isWeatherComponent
                &&
                <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    spacing={1}
                    margin={3}
                >
                    {/* title */}
                    <Typography
                        variant="h4"
                        gutterBottom
                        component="div"
                        sx={{ width: "500px", textAlign: "center", fontWeight: "bold" }}
                    >
                        User Profile
                    </Typography>
                    {/* name display */}
                    <Display data={`Name : ${name}`} />
                    {/* display age */}
                    <Display data={`Age : ${age}`} />
                    {/* gender */}
                    <Display data={`Gender : ${gender}`} />
                    {/* DOB */}
                    <Display data={`Date Of Birth : ${Dob}`} />
                    {/* email */}
                    <Display data={`Email : ${email}`} />
                    {/* country */}
                    <Display data={`Country : ${country}`} />
                    {/* LogOut Button */}
                    <Button variant="outlined"
                        sx={{
                            borderColor: "red", color: 'red', textTransform: "capitalize"
                        }}
                        onClick={onLogoutHandler}
                    >
                        < LogoutIcon sx={{ marginRight: "5px" }}
                        />
                        Logout
                    </Button>
                    {/* Check weather button*/}
                    {/* <Button
                    variant="contained"
                    sx={{ backgroundColor: "#0de5db", color: "black", textTransform: "capitalize" }}
                    onClick={weatherClick}
                >
                    <ThunderstormIcon />
                    Check Weather
                </Button> */}
                    <Link
                        id="weather"
                        to={"weather"}
                        onClick={()=>{dispatch(setWeatherComponent(true))}}
                        style={{
                            backgroundColor: "#0de5db",
                            color: "black",
                            textTransform: "capitalize",
                            textDecoration: "none",
                            display: "inline-flex",
                            padding: "4px",
                            width: "150px",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "4px",
                            fontWeight: "600",
                            boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"
                        }}>
                        <ThunderstormIcon sx={{ marginRight: "4px" }} />
                        Check Weather
                    </Link>
                </Stack>
            }

            {isWeatherComponent && <Outlet />}
        </Container >
    )
}

export default Home