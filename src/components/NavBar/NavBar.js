import React from "react";
import {Link} from "react-router-dom";
import './NavBat.css'



export default function NavBar() {

    return(
        <div id='NavBar'>
            <h1> <span><i className="fas fa-shoe-prints"></i></span> Shoe Store </h1>
            <div className="ui three item menu">
                <Link to='/' className="item link">Home</Link>
                <Link  to='/create/new' className="item link">Add Shoe</Link>
                {/*<Link className="item">Upcoming Events</Link>*/}
            </div>
        </div>
    )
}