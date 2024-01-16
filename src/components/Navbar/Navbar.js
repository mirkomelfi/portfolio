import React, { useRef } from "react";
import {Link} from "react-router-dom";


const Navbar = ({from}) =>{
    console.log(from)
    return (
        <header>
            <div className="navbarContainer">
            { from==1?
                <div className="presentacion">
                   <h1>Mirko Melfi</h1>
                    <h2> Desarrollador Full Stack - Analista Informático</h2>
                </div>

                :

                <div className="presentacion">
                    <h1>Mirko Melfi</h1>
                    <h2> Full Stack Developer - <br></br> IT Analyst</h2>
                </div>
             }
                <div class="contacto">
                    <i class="fa-brands fa-whatsapp"></i><a href="https://wa.me/+5491170180090"> +54  9  11 - 3316 - 9586</a>
                </div>

            </div>
           
        </header>
    );
  }
  
  export default Navbar;
  