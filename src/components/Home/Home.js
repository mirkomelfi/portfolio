
//import imgUsuario from '../../img/user.png'

import { CardContainer } from "../CardContainer/CardContainer"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { products } from "../Products/Products"


const Home =()=>{
    return(
        
        <div className="homeContainer">
            <Navbar/>
            <CardContainer title={"Proyectos"} itemList={products}/>
            <Footer/>
        </div>
                
        
    )
}

export {Home}