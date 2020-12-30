import React, { useState } from 'react';
import Signin from "./signin";
import Main from "./Main"
import config from "../config.json";


export default () => {
    const [name, setName] = useState("");
    // console.log({ name });

    if (config.signInEnabled === true && name === "") {
        return <Signin setName={setName} />;
    } else {
        return <Main name={name} />;
    }


};
