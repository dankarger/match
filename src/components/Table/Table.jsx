import React from "react";
import './Table.css'
import Button from "../Button/Button";
import EditPageWrapper from "../EditPage/EditPageWraper";
import {Link} from "react-router-dom";

class Table extends React.Component {
  // handleEditButton=(e)=>{
  //    return (
  //        <Link to={`/edit/${e.target.value}`}>
  //    )
  //     </Link>
  // }

    getShoesTd = () => {
        console.log('dasdasd', this.props.data)
        if (this.props.data) {
            return this.props.data.map(shoe => {
                return (
                    <tr key={shoe.id}>
                        <td data-label="Brand">{shoe.brand}</td>
                        <td data-label="Model">{shoe.model}</td>
                        <td data-label="Size">{shoe.size}</td>

                        {/*<Link to={`/edit/${shoe.id}`}>*/}
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