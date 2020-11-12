import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import LocalBarIcon from '@material-ui/icons/LocalBar';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav_logo'>
                <LocalBarIcon style={{fontSize:"250%", marginRight:"10px"}}/>
                <Link to="/" className="nav_title"> Cocktails</Link>
            </div>
            <div className='nav_links'>
                <ul>
                    <li><Link to="/" className="nav_link"> Home</Link></li>
                    <li><Link to="/about" className="nav_link">About us</Link></li>
                </ul>
            </div>
            <div className="nav_links_m">
               <li><Link to="/about" className="nav_link">About us</Link></li>
            </div>
        </div>
    )
}

export default Navbar
