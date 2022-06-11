import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { convertTimeStamp, fahrenheitToCelsius, getWeatherIcon } from "../../Common";
import HoursForeCastData from "./HoursForecastDataDisplay";


const HoursForeCast = (props) => {
    const { data } = props;
    console.log("props hours", data)
    return (
        <Stack
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            marginTop={"5px"}
        >
            <Typography variant="h4">24 Hours Forecast</Typography>
            {/* data display */}
            <Box sx={{display:"flex",flexWrap:"wrap"}}>
                {data.map((value)=><HoursForeCastData time={`${convertTimeStamp(value.dt)}`} temp={`${fahrenheitToCelsius(value.temp)}`} day={`${new Date(value.dt).toDateString().substring(0,3)}`} icon={`${getWeatherIcon(value.weather[0].id)}`} />)}
            </Box>
        </Stack>
    )
}

export default HoursForeCast;