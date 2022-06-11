import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HoursForeCastData from "./HoursForecastDataDisplay";


const HoursForeCast = () => {
    return (
        <Stack
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            marginTop={"5px"}
        >
            <Typography variant="h4">24 Hours Forecast</Typography>
            {/* data display */}
            <Box>
                <HoursForeCastData time={"21:30"} temp={23} day={"sun"} />
            </Box>
        </Stack>
    )
}

export default HoursForeCast;