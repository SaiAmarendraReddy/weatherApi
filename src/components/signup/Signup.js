import React, { useEffect, useState } from "react"
import { Box, Stack, Button, Typography, Container, TextField, InputLabel, Select, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio, FormControl } from "@mui/material"
import { SignUpStyles } from "./SignupStyles.styles";
import { useNavigate } from "react-router-dom";
import { countriesList } from "./CountriesList";
import { useDispatch } from 'react-redux'
import { setUserData } from "../../reduxStore/reducers/LoginReducer";

const Signup = () => {

    const
        classes = SignUpStyles(),
        [gender, setGender] = useState(""),
        [firstName, setFirstName] = useState(""),
        [lastName, setLastName] = useState(""),
        [email, setEmail] = useState(""),
        [country, setCountry] = useState(""),
        [dob, setDob] = useState(""),
        [password, setPassword] = useState(""),
        [confirmPassword, setConfirmPassword] = useState(""),
        [isSignupDisabled, setIsSignupDisabled] = useState(true),
        dispatch = useDispatch(),
        navigate = useNavigate();

    useEffect(() => {
        const isNotEmpty = (firstName !== "" && email !== "" && password !== "" && gender !== "" && dob !== "" && country !== "")
        if (isNotEmpty) {
            setIsSignupDisabled(false)
        }
        else {
            setIsSignupDisabled(true)
        }
    }, [[firstName, email, password, gender, dob, country]])

    useEffect(() => {

    }, [])

    // all fields should present

    // when user click login or signup button
    // navigate to login screen
    const onSignup = () => {
        // store userdata in store
        userData()
        // clear all fields
        clearFields()
        // navigate
        navigate("/", { replace: true })
    }

    // store data in redux store ,in structure Formate
    const userData = () => {
        const data = {
            firstName,
            lastName,
            email,
            password,
            gender,
            dob,
            country,
            age: (parseInt(new Date().getFullYear()) - parseInt(dob.split("-")[0]))
        }
        dispatch(setUserData(data))
        
    }

    //clear all fiels
    const clearFields = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setGender("")
        setDob("")
        setCountry("")
    }

    return (
        <Container
        >
            <Stack
                className={classes.rootStack}
                spacing={3}
            >
                {/* title */}
                <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                    sx={{ width: "500px", textAlign: "center" }}
                >
                    Create an account
                </Typography>
                {/* fast and last name */}
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    spacing={5}
                    sx={{ width: "500px" }}
                >
                    {/* first name */}
                    <TextField
                        placeholder={"First name *"}
                        required
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value) }}
                    />
                    {/* last name */}
                    <TextField
                        placeholder={"Last name"}
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value) }}
                    />
                </Stack>
                {/* email */}
                <Box>
                    <TextField
                        placeholder="Email *"
                        required
                        value={email}
                        sx={{ width: "500px" }}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </Box>

                {/* password and confirm password */}
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    spacing={5}
                    sx={{ width: "500px" }}
                >
                    {/* password */}
                    <TextField
                        type={"password"}
                        placeholder={"Password *"}
                        required
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                    />
                    {/* Confirm password */}
                    <TextField
                        type={"password"}
                        placeholder={"Confirm Password *"}
                        required
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                    />
                </Stack>

                {/* gender, DOB, Country */}
                <Stack
                    direction={"row"}
                    justifyContent={"space-evenly"}
                    spacing={3}
                    sx={{ width: "500px" }}
                >
                    {/* gender */}
                    <FormControl sx={{ border: '0.5px solid lightgray', borderRadius: "5px", padding: "10px" }}>
                        <FormLabel id="demo-radio-buttons-group-label">Gender *</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={gender}
                            onChange={(e, value) => { setGender(value) }}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    {/* DOB */}
                    <TextField
                        id="date"
                        inputformat="dd-mm-yyyy"
                        label="Birthday"
                        type="date"
                        placeholder="dd"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                        value={dob}
                        onChange={(e) => { setDob(e.target.value) }}
                    />
                    {/* country */}
                    <FormControl sx={{ width: "max-content" }}>
                        <InputLabel id="country">Country *</InputLabel>
                        <Select
                            value={country}
                            label="country"
                            required
                            sx={{ minWidth: "130px", maxWidth: "max-content" }}
                            onChange={(e) => { setCountry(e.target.value) }}
                        >
                            {countriesList.map((value) => <MenuItem key={value.Code} value={value.Name}>{value.Name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Stack>
                {/* Signup button */}
                <Button
                    variant="contained"
                    disabled={isSignupDisabled}
                    onClick={onSignup}
                >
                    Sign Up
                </Button>
                {/* Have an account */}
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    sx={{ width: "500px", textAlign: "center" }}
                >
                    Have an account ?  <Button variant="outlined" onClick={onSignup}>Login</Button> instead.
                </Typography>
            </Stack>
        </Container>
    )
}

export default Signup