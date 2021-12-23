import React from "react";
import './Table.css'

class Table extends React.Component {

    getShoesTd=()=>{
        return (this.props.data).map(shoe=>{
            return(
                <div>
                    <tr>
                        <td data-label="Brand">{shoe.brand}</td>
                        <td data-label="Model">24</td>
                        <td data-label="Size">Designer</td>
                    </tr>
                </div>
            )
        })
    }


    render() {
    return(
        <div>
            <table className="ui celled table">
                <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Size</th>
                </tr>
                </thead>
                <tbody>

                {/*<tr>*/}
                {/*    <td data-label="Name">Elyse</td>*/}
                {/*    <td data-label="Age">24</td>*/}
                {/*    <td data-label="Job">Designer</td>*/}
                {/*</tr>*/}
                </tbody>
            </table>
        </div>
    )
}
}
export default Table