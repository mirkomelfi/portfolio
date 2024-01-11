import React from "react";
import { AiOutlineMessage,AiOutlineMail  } from "react-icons/ai";
import {Link} from "react-router-dom";

const Footer = () =>{
    return (
        <footer id="contact">            
            <p>Formas de Contacto</p>
            <div className="footerInfo">

            
        <i class="fa-regular fa-envelope"></i><p>mmelfideveloper@gmail.com</p>
   

            </div>
            <div className="footerInfo">
            <i class="fa-brands fa-whatsapp"></i><a href="https://wa.me/+5491170180090"> +54  9  11 - 3316 - 9586</a>
                
                
            </div>
            <p>Espero atentamente su llamado</p>
        </footer>
    );
  }
  
  export default Footer;
  