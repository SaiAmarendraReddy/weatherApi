import { Button } from "@mui/material"
import React from "react"

// props :- iconm title, eventHandler
const ReUsableIconButton = (props) => {
    return (
        <Button
            variant="outlined"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: 'center',
                color: "gray",
                borderColor: 'gray',
                ...props.style,
                '&:hover':{
                    borderColor:'gray',
                    backgroundColor:'black',
                    color:'white'
                }
            }}
            onClick={props.eventHandler}
        >
            {props.icon} {props.title}
        </Button>
    )
}

export default ReUsableIconButton