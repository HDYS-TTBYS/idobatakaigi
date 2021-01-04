import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import { messagesRef } from "../firebase";

const useStyles = makeStyles({
    root: {
        gridRow: 1,
    },
});


const MessageList = () => {
    const [messaages, setMessaages] = useState([])
    const classes = useStyles();

    useEffect(() => {
        messagesRef
            .orderByKey()
            .limitToLast(3)
            .on("value", (snapshot) => {
                const messaages = snapshot.val();
                if (messaages === null) return;
                const entries = Object.entries(messaages);
                const newMessages = entries.map((entry) => {
                    const [key, nameAndText] = entry;
                    return { key: key, ...nameAndText };
                });
                setMessaages(newMessages);
            });
    }, [])


    return (
        <div className={classes.root}>MessageList

        </div>
    )
}

export default MessageList;
