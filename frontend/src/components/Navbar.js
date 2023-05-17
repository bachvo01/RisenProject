import './navbar.scss';
import logo from '../images/logo.png'
import { MdAccountCircle } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsFillCartFill } from 'react-icons/bs';
function Navbar(){
    return(
        <div id="nav-container">
                <div id="navigation-bar">
                    <div id='logo-container'>
                        <a href='http://localhost:3000/en/home'>
                            <img src={logo}></img>
                        </a>
                    </div>
                    
                    <div id='right-nav-bar'>
                        <ul>                          
                            <li><BiSearch id="search"/></li>
                            <li><BsFillCartFill id="cart"/></li>
                            <li><MdAccountCircle id = "account"/></li>
                        </ul>
                    </div>
            </div>
        </div>
        
    )
}

export default Navbar;