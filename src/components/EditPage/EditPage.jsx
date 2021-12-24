import React from "react";
import './EditPage.css'
import Button from "../Button/Button";
import {deleteShoe,findShoe} from "../Api/Api";


class EditPage extends  React.Component {
       state={shoe:{}}
    componentDidMount() {
        findShoe(this.props.id)
            .then(res=>this.setState({shoe:res}))
    }

    render() {
        return(
            <div>
                editpaged
             </div>
        )
    }
}
export default EditPage