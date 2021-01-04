import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from "../firebase";


const MessageSubmitButtom = ({ inputEl, name, setText, text }) => {
    return (
        <IconButton
            disabled={text === ""}
            onClick={() => {
                pushMessage({ name: "Hdys", text });
                setText("");
                inputEl.current.focus();
            }}
        >
            <SendIcon />
        </IconButton>
    )
}

export default MessageSubmitButtom;
