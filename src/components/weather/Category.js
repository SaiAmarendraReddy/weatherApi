import React from "react"
import { Stack, Typography } from "@mui/material"

const Category = (props) => {

    return (
        <Stack
            sx={{ flex: 1, border: "1px solid white" }}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            padding={"3px"}
            color={"white"}
        >
            {/* icon */}
            {props.icon}
            {/* title */}
            <Typography variant="subtitle2">{props.title}</Typography>
            {/* data */}
            <Typography variant="subtitle2">{props.data}</Typography>
        </Stack>
    )
}

export default Category