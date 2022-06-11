import React, { useState } from "react"
import { Stack, Button, Container } from "@mui/material"
import RefreshIcon from '@mui/icons-material/Refresh';
import HomeIcon from '@mui/icons-material/Home';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Box } from "@mui/system";
import LocationTitle from "./LocationTitle";
import Category from "./Category";
import DataDisplay from "./DataDisplay";
import HoursForeCast from "./hoursForecast/HoursForeCast";
import SevenDaysForecast from "./sevenDaysForecast/SevenDaysForecast";
import ReUsableButton from "./ReUsableButton";
import ReUsableIconButton from "./ReusableIconButton";
import { Navigate, useNavigate } from "react-router-dom";

const constants = {
    SEVEN: "SEVEN",
    HOURS: "HOURS",
    EMPTY: ""
}

const Weather = () => {
    const
        navigate = useNavigate(),
        [hoursOrSeven, setHoursOrSeven] = useState("");

    // when user click Home Button
    // navigate to /home
    const onHomeButtonHandle = () => {
        setHoursOrSeven(constants.EMPTY)
        navigate("/home")
    }

    // when user click
    // hours buttons or seven days button
    // based on that display data
    const onHoursOrSeven = (type) => {
        if (type == constants.SEVEN)
            setHoursOrSeven(constants.SEVEN)
        else if (type == constants.HOURS)
            setHoursOrSeven(constants.HOURS)
    }

    // when user click refresh button
    // get the data from server
    const onRefreshHandler = () => {

    }

    return (
        <Container>
            <Stack>
                {/* buttons */}
                <Stack
                    sx={{ padding: "10px" }}
                    direction={"row"}
                    spacing={1}
                >
                    {/* refresh Button */}
                    <ReUsableIconButton icon={<RefreshIcon sx={{ marginRight: "5px" }} />} title={"Refresh Data"} eventHandler={onRefreshHandler} />
                    {/* Hourly forecast */}
                    <ReUsableButton title={"Hourly forecast"} eventHandler={() => { onHoursOrSeven(constants.HOURS) }} />
                    {/* Daily forecast */}
                    <ReUsableButton title={"Daily forecast"} eventHandler={() => { onHoursOrSeven(constants.SEVEN) }} />
                    {/* go home */}
                    <ReUsableIconButton icon={<HomeIcon sx={{ marginRight: "5px" }} />} style={{ flex: 1 }} title={"Go Home"} eventHandler={onHomeButtonHandle} />
                </Stack>
                {/* present Data Weather display */}
                <Stack sx={{ backgroundColor: "#43e5da", height: "530px" }}>
                    {/* title */}
                    <LocationTitle locationName={"HyderBad"} />
                    {/* temperature details display */}
                    <DataDisplay />
                    {/* temperature category */}
                    <Stack sx={{ flex: 1, marginTop: '2px' }} direction={"row"} >
                        {/* feels like */}
                        <Category icon={<ThermostatIcon />} title={"FEELS LIKE"} data={`22&deg;`} />
                        {/* wind */}
                        <Category icon={<AirIcon />} title={"WIND"} data={'3.3 KMPH'} />
                        {/* Sunrise */}
                        <Category icon={<WbTwilightIcon />} title={"SUNRISE"} data={'06:17 HRS'} />
                        {/* pressure */}
                        <Category icon={<ElectricBoltIcon sx={{ transform: "rotate(136deg)" }} />} title={"PRESSURE"} data={'1015 mbar'} />
                    </Stack>
                </Stack>

                {/* hoursforecast */}
                {hoursOrSeven === constants.HOURS && <HoursForeCast />}
                {/* sevenHoursForecast */}
                {hoursOrSeven === constants.SEVEN && <SevenDaysForecast />}
            </Stack>
        </Container>
    )
}

export default Weather;