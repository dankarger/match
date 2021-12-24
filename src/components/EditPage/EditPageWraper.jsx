import React from "react";
import {useParams} from "react-router-dom";
import EditPage from "./EditPage";
import {Navigate} from "react-router-dom";


export default function  EditPageWrapper() {
    const {id} = useParams();
    console.log(id)
   const navigateToHome=()=>{
        Navigate('/')
    }
    function navigateWrapper(){
        navigateToHome()
    }
    return(
        <div>

          <EditPage id={{id}} callback={navigateWrapper} />
        </div>
    )
}