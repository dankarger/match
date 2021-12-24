import React from "react";
import './Mesage.css'

export default function Message({message}) {
    if(message) {
        return (
            <div className='Message'>
                <h1>{message}</h1>
            </div>
        )
    }

}