import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { pushMessage } from "../firebase";


const MessageField = ({ inputEl, name, setText, text }) => {
    const [isComposed, setIsComposed] = useState(false);

    return (
        <TextField
            autoFocus
            fullWidth={true}
            inputRef={inputEl}
            onChange={(e) => {
                setText(e.target.value);
            }}
            onKeyDown={(e) => {
                if (isComposed) return;

                if (e.key === "Enter") {
                    if (e.target.value === "") return;
                    pushMessage({ name: "秀康", text });
                    setText("");
                    e.preventDefault();
                }
            }}
            onCompositionStart={() => {
                setIsComposed(true);
            }}
            onCompositionEnd={() => {
                setIsComposed(false);
            }}
            value={text}
        />
    )
}

export default MessageField;
