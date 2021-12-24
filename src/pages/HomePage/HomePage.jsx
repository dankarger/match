import React from "react";
import Table from "../../components/Table/Table";
import './HomePage.css';



class HomePage extends React.Component {


    render() {
        return (
            <div>
              Avaible shoes:
                <Table callback={this.props.callback} data={this.props.data}/>

            </div>
        );
    }
}
export default HomePage