import React from "react";
import Table from "../../components/Table/Table";
import './HomePage.css';



class HomePage extends React.Component {


    render() {
        return (
            <div>
                HomePage
                <Table data={this.props.data}/>

            </div>
        );
    }
}
export default HomePage