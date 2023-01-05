import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import { Link } from "react-router-dom"
import './Footer.css'


const Footer = () => {
  return (
    <div id="footer">
        <h1 className="titleFooter">Libra Shoes</h1>
        
        <div className="iconsFooter">
            <Link to='/facebook' className="icons"><FaFacebookF/></Link>
            <Link to='/instagram' className="icons"><FaInstagram/></Link>
            <Link to='/tiktok' className="icons"><FaTiktok/></Link>  
        </div>       
    </div>
  )
}

export default Footer