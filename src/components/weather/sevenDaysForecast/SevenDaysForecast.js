import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SevenDaysData from "./SevenDaysData";

const SevenDaysForecast = (props) => {
    return (
        <Stack
            marginTop={"10px"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            padding={"4px"}
        >
            {/* title */}
            <Typography variant="h4">7 Days Forecast</Typography>
            {/* Data */}
            <Box sx={{ width: "90%" }}>
                {props.data.map((value)=><SevenDaysData daysData={value}/>)}
            </Box>
        </Stack>
    )
}

export default SevenDaysForecast;