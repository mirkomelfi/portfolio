
//import imgUsuario from '../../img/user.png'

import { useLocation } from "react-router-dom"
import { CardContainer } from "../CardContainer/CardContainer"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { products } from "../Products/Products"
import { productsEN } from "../Products/ProductsEN"
import { useState } from "react"


const Home =()=>{
    const {state}=useLocation();

    return(
        <>
        <div className="homeContainer">
            <Navbar from={state.from} />
            {state.from==1?
            <CardContainer itemList={products} from={state.from} />
            :
            <CardContainer itemList={productsEN} from={state.from} />
            }
        </div> 
        <div className="footer">
        <Footer from={state.from} />
        </div>
        </>
                
        
    )
}

export {Home}