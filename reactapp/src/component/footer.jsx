
import "../styles/footer.css"
import {FaTwitter,FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa"
const Footer=()=>
{
return(
    <footer>
        <p>
      Thanks for visiting my portfolio. I’m a dedicated web developer passionate about creating innovative digital solutions. <br/>Feel free to connect for collaborations or inquiries.
    </p>
    
        <div className="footer-icon">
            <a href="#" target="blank" ><FaGithub size="18" /></a>
            <a href="#" target="blank" ><FaTwitter size="18" /></a>
            <a href="#" target="blank" ><FaInstagram size="18" /></a>
            <a href="#" target="blank" ><FaLinkedin size="18" /></a>
        </div>
        <p>&copy; 2023 Mireille Irafasha. All rights reserved.</p>
    </footer>
 );

}
export default Footer