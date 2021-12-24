import React from "react";
import './EditPage.css'
import Button from "../Button/Button";
import {deleteShoe, findShoe, UpdateShoe, AddeShoe} from "../Api/Api";
import {Link} from "react-router-dom";
import Message from "../Message/Mesage";


class EditPage extends  React.Component {
       state={shoe:{},brand:'',model:'',size:'',redirect:false,isNew:false,isMessage:false,message:'Please Enter a Valid Input'}

    componentDidMount() {
        const {id} = this.props
        console.log('id', id)
        if (id.id === 'new') {
            let shoe = {
                // id:new Date()+(Math.floor(Math.random()*100)+1),
                brand: '',
                model: '',
                size: ''
            }
            this.setState({shoe: shoe, isNew: true})

        } else {
            findShoe(id.id)
                .then(res => this.setState({
                    shoe: res.data, brand: res.data.brand,
                    model: res.data.model, size: res.data.size
                }))
        }
    }
    handleOnChane=(e)=>{
        const { name, value } = e.target;
            this.setState({ [name]:value} )
    }
    handleDeleteButton=()=>{

        deleteShoe(this.props.id.id).then(res=>this.props.history.push('/'))
    }
    handleCancelButton=()=> {
      this.setState({redirect:true})

    }
    handleAcceptButton=()=>{


           let shoe={
               id:this.state.shoe.id,
               brand:this.state.brand,
               model:this.state.model,
               size:this.state.size
           }
        if(this.state.isNew) {

            let newShoe={
                brand:this.state.brand,
                model:this.state.model,
                size:this.state.size
            }
            if(newShoe.brand!=='' && newShoe.model!==''&& newShoe.size!=='' ){
                return AddeShoe(newShoe)
            }else{
               this.showMessage()
                return
            }

        }

        UpdateShoe(this.state.shoe.id, shoe)
        }

        showMessage=()=>{
           this.setState({message:'Please enter a valid input',isMessage:true},()=>{
               setTimeout(()=>{this.setState({message:'',isMessage:false})},1000)
           })

        }
        injectMessage(){
            if(this.state.isMessage){
                return(
                    <div className="Message-div ">

                        <Message message={this.state.message}/>
                    </div>
                )
            }
        }

    render() {


        return(
            <div>
                <div className="header">
                    <h2 className="ui icon header">
                        <i className="settings icon"></i>
                        <div className="content">

                            <div className="sub header">{this.state.isNew && <h1>Add Shoe</h1>} {!this.state.isNew && <h1>Edit Shoe</h1>}</div>
                        </div>
                    </h2>

                </div>

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


                </div>

                <div className="EditPage-buttons-divs">
                    <Button callback={this.handleAcceptButton}  name='Accept changes' icon={<i className="fas fa-edit"></i>} />

                    { !this.state.isNew && <Button callback={this.handleDeleteButton}  name='Delete' icon={<i className="fas fa-edit"></i>} />}
                    <Link className='ui button' to='/'>cancel</Link>
                    {this.state.isMessage && this.injectMessage()}

                </div>

             </div>

)
    }
}
export default EditPage