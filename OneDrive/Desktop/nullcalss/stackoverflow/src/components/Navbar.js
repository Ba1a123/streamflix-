import react from 'react';
import './nav.css';

//import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
        <nav>
            <div className='navbar'>
                < a href='' className='nav-item nav-bar'>
                <img src='https://www.logo.wine/a/logo/Stack_Overflow/Stack_Overflow-Logo.wine.svg' alt='dfgh' style={{ height:"30px", width:"150px"
                }}></img>
                </a>
                <a href='' className='nav-item nav-bar'>HOME</a>
                <a href='' className='nav-item nav-bar'>ABOUT</a>
                <a href='' className='nav-item nav-bar'> PRODUCTS</a>
                <a href='' className='nav-item nav-bar'> FOR TEAMS</a>
             </div>

        </nav>
    );
}