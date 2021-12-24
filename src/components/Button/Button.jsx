import React from "react";
import './Button.css'


export default function Button({ name,callback,icon,className }) {

    return(
        <>
            <button className={'Button-div '+{className}} onClick={callback}>  <span>{icon}</span>{name}  </button>
        </>
    )
}