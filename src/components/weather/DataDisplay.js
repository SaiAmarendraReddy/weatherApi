import React from "react"
import { Stack, Typography } from "@mui/material"
import CloudIcon from '@mui/icons-material/Cloud';

const DataDisplay = () => {

    return (
        <Stack
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            flex={6}
            color={"white"}
        >
            {/* icon */}
            <CloudIcon sx={{fontSize:"120px"}}/>
            {/* name */}
            <Typography variant="h4">ugam</Typography>
            {/* day,data month */}
            <Typography variant="subtitle1">sunday, 27 FEB</Typography>
            {/* temperature */}
            <Typography variant="h1">27&deg;</Typography>
        </Stack>
    )

}

export default DataDisplay