import React from "react";
import {getDataBase} from "../Api/Api";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

import './ShoeApp.css'



class ShoeApp extends React.Component {
        state = {data:[]}


    componentDidMount() {
            const DATA = getDataBase();
            console.log('dd',DATA)
            this.setState({data:DATA.data})
    }


    render() {
        return(
            <div>
                <BrowserRouter >
                    <Routes>
                        <Route path='/' element={<HomePage/>} />

                    </Routes>


                </BrowserRouter>

            </div>
        )
    }

}
export default ShoeApp