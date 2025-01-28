import React from "react";
import "../styles/footer.css"
import {FaTwitter,FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa"
const Footer=()=>
{
return(
    <footer>
        {/* <p>�� 2021 My Website. All rights reserved.</p> */}
        <div className="footer-icon">
            <a href="#" target="blank" ><FaGithub size="24" /></a>
            <a href="#" target="blank" ><FaTwitter size="24" /></a>
            <a href="#" target="blank" ><FaInstagram size="24" /></a>
            <a href="#" target="blank" ><FaLinkedin size="24" /></a>
        </div>
        <p>&copy; 2023 Mireille Irafasha. All rights reserved.</p>
    </footer>
 );

}
export default Footer