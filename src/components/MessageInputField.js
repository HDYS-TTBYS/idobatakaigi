import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { gravatarPath } from "../gravatar";
import MessageField from "./MessageField";
import MessageSubmitButtom from "./MessageSubmitButtom";

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: "26px",
    },
});

const MessageInputField = ({ name }) => {
    const [text, setText] = useState("");
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar src={avatarPath} />
                </Grid>
                <Grid item xs={10}>
                    <MessageField name={name} setText={setText} text={text} />
                </Grid>
                <Grid item xs={1}>
                    <MessageSubmitButtom name={name} setText={setText} text={text} />
                </Grid>
            </Grid>

        </div>
    )
}

export default MessageInputField;
