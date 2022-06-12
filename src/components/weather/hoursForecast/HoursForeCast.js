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
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:'center', alignItems:'center' }}>
                {data.map((value) => <HoursForeCastData
                    key={value.dt}
                    time={`${convertTimeStamp(value.dt)}`}
                    temp={`${Math.floor(value.temp)}`}
                    day={`${new Date(value.dt * 1000).toDateString().substring(0, 3)}`}
                    icon={`${getWeatherIcon(value.weather[0].id)}`} />
                )
                }
            </Box>
        </Stack>
    )
}

export default HoursForeCast;