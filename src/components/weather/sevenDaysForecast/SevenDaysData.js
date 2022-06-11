import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloudIcon from '@mui/icons-material/Cloud';

const SevenDaysData = () => {
    return (
        <Stack
            direction={"row"}
            sx={{ borderBottom: "1px solid #e1d7d7" }}
            padding={"3px"}
        >
            {/* icon & date */}
            <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <CloudIcon />
                <Typography sx={{ marginLeft: "15px" }}>sunday 47</Typography>
            </Box>
            {/* rank */}
            <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>rank</Box>
        </Stack>
    )
}

export default SevenDaysData