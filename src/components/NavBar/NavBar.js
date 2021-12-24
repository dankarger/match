import React from "react";
import {Link} from "react-router-dom";



export default function NavBar() {

    return(
        <div>
            <h1>Shoe </h1>
            <div className="ui three item menu">
                <Link to='/' className="item">Home</Link>
                <Link  to='/create/new' className="item">Add Shoe</Link>
                {/*<Link className="item">Upcoming Events</Link>*/}
            </div>
        </div>
    )
}