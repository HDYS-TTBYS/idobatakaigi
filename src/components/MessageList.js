import React, { useState, useEffect } from "react";
import { List } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import { messagesRef } from "../firebase";
import MessageItem from "./MessageItem"

const useStyles = makeStyles({
    root: {
        gridRow: 1,
        overflow: "auto",
        width: "100%",
    },
});


const MessageList = () => {
    const [messaages, setMessaages] = useState([])
    const classes = useStyles();

    useEffect(() => {
        messagesRef
            .orderByKey()
            .limitToLast(15)
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
        <List className={classes.root}>
            {
                messaages.map(({ key, name, text }) => {
                    return (
                        <MessageItem key={key} name={name} text={text}></MessageItem>)
                })
            }
        </List>
    )
}

export default MessageList;
