import React from "react";
import './Button.css'


export default function Button({ name,callback,icon,className }) {

    return(
        <>
            <button className={'Button-div'+{className}} name = {name} onClick={callback}>{name}{icon}</button>
        </>
    )
}