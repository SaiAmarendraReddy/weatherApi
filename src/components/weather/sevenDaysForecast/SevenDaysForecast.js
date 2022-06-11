import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SevenDaysData from "./SevenDaysData";

const SevenDaysForecast = () => {
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
                <SevenDaysData />
            </Box>
        </Stack>
    )
}

export default SevenDaysForecast;