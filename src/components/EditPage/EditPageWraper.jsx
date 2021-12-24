import React from "react";
import {useParams} from "react-router-dom";
import EditPage from "./EditPage";



export default function  EditPageWrapper() {
    const {id} = useParams();
    console.log(id)
    return(
        <div>

          <EditPage id={{id}} />
        </div>
    )
}