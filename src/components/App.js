import React, { useState } from 'react';
import Signin from "./signin";
import Main from "./Main"


export default () => {
    const [name, setName] = useState("");
    console.log({ name });

    if (name === "") {
        return <Signin setName={setName} />;
    } else {
        return <Main name={name} />;
    }


};
