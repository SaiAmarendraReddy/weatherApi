import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloudIcon from '@mui/icons-material/Cloud';
import React from "react";

// props {time:21:40}, temp:23deg, day:sun
const HoursForeCastData = (props) => {

    return (
        <Stack
            backgroundColor={"black"}
            color={"white"}
            height={"150px"}
            width={"130px"}
            alignItems={"center"}
            justifyContent={"space-around"}
            margin={"5px"}
        >
            {/* time */}
            <Typography sx={{ width: "inherit", textAlign: "center", borderBottom: "1px solid #363030" }} >{props.time}</Typography>
            {/* icon & deg */}
            <Box
                sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}
            >
                {/* icon */}
                <i className={`wi ${props.icon}`} ></i>
                <Typography sx={{ marginTop: "5px" }}>{props.temp}&deg;</Typography>
            </Box>
            {/* day */}
            <Typography sx={{ textTransform: "capitalize", width: "inherit", color: "#625e5e", textAlign: "center", borderTop: "1px solid #363030" }}>{props.day}</Typography>
        </Stack>
    )
}

export default HoursForeCastData