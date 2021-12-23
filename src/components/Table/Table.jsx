import React from "react";
import './Table.css'
import Button from "../Button/Button";

class Table extends React.Component {

    getShoesTd = () => {
        console.log('dasdasd', this.props.data)
        if (this.props.data) {
            return this.props.data.map(shoe => {
                return (
                    <tr key={shoe.id}>
                        <td data-label="Brand">{shoe.brand}</td>
                        <td data-label="Model">{shoe.model}</td>
                        <td data-label="Size">{shoe.size}</td>
                        <Button name='Edit' icon={<i className="fas fa-edit"></i>} />
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
                {/*<table className="ui celled table">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th>Brand</th>*/}
                {/*        <th>Model</th>*/}
                {/*        <th>Size</th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    {this.getShoesTd()}*/}

                {/*    </tbody>*/}
                {/*</table>*/}


                {/*<table className="ui celled striped table">*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th colSpan="3">*/}
                {/*            Git Repository*/}
                {/*        </th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    <tr>*/}
                {/*        <td className="collapsing">*/}
                {/*            <i className="folder icon"></i> node_modules*/}
                {/*        </td>*/}
                {/*        <td>Initial commit</td>*/}
                {/*        <td className="right aligned collapsing">10 hours ago</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>*/}
                {/*            <i className="folder icon"></i> test*/}
                {/*        </td>*/}
                {/*        <td>Initial commit</td>*/}
                {/*        <td className="right aligned">10 hours ago</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>*/}
                {/*            <i className="folder icon"></i> build*/}
                {/*        </td>*/}
                {/*        <td>Initial commit</td>*/}
                {/*        <td className="right aligned">10 hours ago</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>*/}
                {/*            <i className="file outline icon"></i> package.json*/}
                {/*        </td>*/}
                {/*        <td>Initial commit</td>*/}
                {/*        <td className="right aligned">10 hours ago</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>*/}
                {/*            <i className="file outline icon"></i> Gruntfile.js*/}
                {/*        </td>*/}
                {/*        <td>Initial commit</td>*/}
                {/*        <td className="right aligned">10 hours ago</td>*/}
                {/*    </tr>*/}
                {/*    {this.getShoesTd()}*/}

                {/*    </tbody>*/}
                {/*</table>*/}


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
                    <tr>
                        <td data-label="Name">James</td>
                        <td data-label="Age">24</td>
                        <td data-label="Job">Engineer</td>
                    </tr>
                    <tr>
                        <td data-label="Name">Jill</td>
                        <td data-label="Age">26</td>
                        <td data-label="Job">Engineer</td>
                    </tr>
                    <tr>
                        <td data-label="Name">Elyse</td>
                        <td data-label="Age">24</td>
                        <td data-label="Job">Designer</td>
                    </tr>
                    {this.getShoesTd()}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Table