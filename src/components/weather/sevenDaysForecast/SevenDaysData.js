import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloudIcon from '@mui/icons-material/Cloud';
import { fahrenheitToCelsius, getWeatherIcon, timeStampToDDM } from "../../Common";

const SevenDaysData = (props) => {

    console.log("((((((((((((((( ", props.daysData)
    return (
        <Stack
            direction={"row"}
            sx={{ borderBottom: "1px solid #e1d7d7" }}
            padding={"3px"}
        >
            {/* icon & date */}
            <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* icon */}
                <i className={`wi ${getWeatherIcon(props.daysData.weather[0].id)}`} ></i>
                <Typography sx={{ marginLeft: "15px" }}>{timeStampToDDM(props.daysData.moonrise)}</Typography>
            </Box>
            {/* rank */}
            <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                {fahrenheitToCelsius(props.daysData.temp.max)}/{fahrenheitToCelsius(props.daysData.temp.min)}
            </Box>
        </Stack>
    )
}

export default SevenDaysData