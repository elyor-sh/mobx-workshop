import React from 'react';
import './global.scss'
import {Routing} from "./routing";
import {setDevTools} from "./dev-tools";

setDevTools()

const App = () => {
    return (
        <>
            <Routing />
        </>
    );
};

export {App}