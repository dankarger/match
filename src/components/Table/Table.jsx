import React from "react";
import './Table.css'
import {Link} from "react-router-dom";
import {getDataBase} from "../Api/Api";

class Table extends React.Component {
state = {data:[]}


    componentDidMount() {
        getDataBase().then((result)=>{
            this.setState({data:result.data},()=> console.log('dd',result.data))

        });

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // getDataBase().then((result)=>{
        //     this.setState({data:result.data},()=> console.log('dd',result.data))
        //
        // });

    }
    getShoesTd = () => {
        console.log('dasdasd', this.state.data)
        if (this.state.data) {
            return this.state.data.map(shoe => {
                return (
                    <tr key={shoe.id}>
                        <td data-label="Brand">{shoe.brand}</td>
                        <td data-label="Model">{shoe.model}</td>
                        <td data-label="Size">{shoe.size}</td>

                        <Link className="ui button" to={`/edit/${shoe.id}`}> Edit</Link>
                        {/*    <Button onClick={this.handleEditButton}  name='Edit' icon={<i className="fas fa-edit"></i>} />*/}

                        {/*</Link>*/}
                    </tr>
                )
            })
        }
        return (<tr>
            <td>{this.props[0]}ghjghj</td>
        </tr>)
    }


    render() {
        return (
            <div>
                <table className="ui celled table">
                    <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Size</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>



                    {this.getShoesTd()}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Table