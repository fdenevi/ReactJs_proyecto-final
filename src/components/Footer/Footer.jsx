import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import './Footer.css'


const Footer = () => {
  return (
    <div id="footer">
        <h1 className="titleFooter">Libra Shoes</h1>
        <div className="iconsFooter">
            <a href="" className="icons"><FaFacebookF/></a>
            <a href="" className="icons"><FaInstagram/></a>
            <a href="" className="icons"><FaTiktok/></a>
            
            
            
        </div>
        
    </div>
  )
}

export default Footer