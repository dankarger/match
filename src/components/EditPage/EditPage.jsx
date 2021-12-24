import React from "react";
import './EditPage.css'
import Button from "../Button/Button";
import {deleteShoe,findShoe} from "../Api/Api";
import {Link, Navigate} from "react-router-dom";


class EditPage extends  React.Component {
       state={shoe:{},brand:'',model:'',size:''}

    componentDidMount() {
           const{id}=this.props
           console.log('id',id)
        findShoe(id.id)
            .then(res=>this.setState({shoe:res.data,brand:res.data.brand,
                                            model:res.data.model,size:res.data.size}))
    }

    handleOnChane=(e)=>{
        const { name, value } = e.target;
            this.setState({ [name]:value} )
    }
    handleDeleteButton=()=>{
        console.log('sdfsdfsdfsdfsdfsdfsdfsdf')
        deleteShoe(this.props.id.id).then(res=>this.props.history.push('/'))
    }
    handleCancelButton=()=>{
        // Navigate(`/`);

    }
    handleAcceptButton=()=>{

}

    render() {
       const{shoe}=this.state
        return(
            <div>
                <div className="ui form">
                    <div className="fields">
                        <div className="field">
                            <label>Brand</label>
                            <input onChange={this.handleOnChane} placeholder={this.state.brand} name="brand" type="text"  value={this.state.brand}/>
                        </div>
                        <div className="field">
                            <label>Model</label>
                            <input onChange={this.handleOnChane} placeholder={this.state.model} name="model" type="text"  value={this.state.model}/>
                        </div>
                        <div className="field">
                            <label>Size</label>
                            <input type="text" onChange={this.handleOnChane} placeholder={this.state.size} name="size"  value={this.state.size}/>
                        </div>
                    </div>
                    <div className="EditPage-buttons-divs">
                        <Button callback={this.handleAcceptButton}  name='Accept changes' icon={<i className="fas fa-edit"></i>} />
                        <Button callback={this.handleCancelButton}  name='Cancel changes' icon={<i className="fas fa-edit"></i>} />
                    </div>
                    <Link to={'/'}>
                        <Button className={'red'} callback={this.handleDeleteButton}  name='Delete from store ' icon={<i className="fas fa-edit"></i>} />

                    </Link>

                </div>

             </div>

)
    }
}
export default EditPage