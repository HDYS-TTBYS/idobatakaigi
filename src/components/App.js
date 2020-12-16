import React, { useState } from 'react';
import Signin from "./signin";



export default () => {
    const [name, setName] = useState("");
    console.log(name);

    return <Signin setName={setName} />;
};
