import React from "react";
import { AiOutlineMessage,AiOutlineMail  } from "react-icons/ai";
import {Link} from "react-router-dom";

const Footer = ({from}) =>{
    return (
        <div className="footer">
            
        <footer id="contact">            
        { from==1?<p>Formas de Contacto</p>:<p>Contact</p> }
            <div className="footerInfo">

            
        <i class="fa-regular fa-envelope"></i><p>mmelfideveloper@gmail.com</p>
   

            </div>
            <div className="footerInfo">
            <i class="fa-brands fa-whatsapp"></i><a href="https://wa.me/+5491170180090"> +54  9  11 - 3316 - 9586</a>
                
                
            </div>
            { from==1?<p>Espero atentamente su llamado</p>:<p>Looking forward to hearing from you</p> }
        </footer>
        </div>
    );
  }
  
  export default Footer;
  