import React from "react";
import {getDataBase} from "../Api/Api";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

import './ShoeApp.css'



class ShoeApp extends React.Component {
        state = {data:[],isEdit:false}


    componentDidMount() {
            getDataBase().then((result)=>{
                this.setState({data:result.data},()=> console.log('dd',result.data))

            });

    }


    render() {
        return(
            <div>
                <BrowserRouter >
                    <Routes>
                        <Route path='/' element={<HomePage data={this.state.data}/>} />

                    </Routes>


                </BrowserRouter>

            </div>
        )
    }

}
export default ShoeApp