import { Button } from "@mui/material";
import React from "react";

// props :- title, evenHandler(function)
const ReUsableButton = (props) => {
    return (
        <Button
            variant="outlined"
            onClick={props.eventHandler}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: 'center',
                color: "gray",
                borderColor: 'gray',
                '&:hover': {
                    borderColor: 'gray',
                    backgroundColor: 'black',
                    color: 'white'
                }
            }}
        >
            {props.title}
        </Button>
    )
}

export default ReUsableButton