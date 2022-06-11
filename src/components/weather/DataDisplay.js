import React from "react"
import { Stack, Typography } from "@mui/material"
import CloudIcon from '@mui/icons-material/Cloud';
import { getWeatherIcon } from "../Common";

const DataDisplay = (props) => {

    return (
        <Stack
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            flex={6}
            color={"white"}
        >
            {/* icon */}
            <i className={`wi ${getWeatherIcon(props.weatherID)}`} style={{ fontSize: "77px" }}></i>
            {/* name */}
            <Typography variant="h4">{props.description}</Typography>
            {/* day,data month */}
            <Typography variant="subtitle1">{props.date}</Typography>
            {/* temperature */}
            <Typography variant="h1">{props.temp}</Typography>
        </Stack>
    )

}

export default DataDisplay