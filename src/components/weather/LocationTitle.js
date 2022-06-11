import React from "react"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography } from "@mui/material"

const LocationTitle = (props) => {

    return (
        <Box
            sx={{
                backgroundColor: "#10cfb0",
                color: "white",
                flex: 0.5,
                fontSize: "35px",
                fontWeight: "lighter",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px"
            }}
        >
            {/* Icon */}
            <LocationOnIcon sx={{ fontSize: "50px" }} />
            {/* location name */}
            <Typography variant="h5">{props.locationName}</Typography>
        </Box>
    )
}

export default LocationTitle