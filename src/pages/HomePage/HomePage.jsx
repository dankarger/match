import React from "react";
import Table from "../../components/Table/Table";
import './HomePage.css';
import {Link} from "react-router-dom";



class HomePage extends React.Component {


    render() {
        return (
            <div>
                HomePage
                <Table callback={this.props.callback} data={this.props.data}/>

            </div>
        );
    }
}
export default HomePage