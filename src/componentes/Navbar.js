import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Nave(){
    return(
    <div className='navee'>
            <img className="senai" src={require('../imgs/SENAI.png')}/>
        <ul className='itens-nave'>
            <li><Link to ={'/'}className='e'><b>Home</b></Link></li>
            <li><Link to = {'/Contato'}className='e'><b>Contato</b></Link></li>
            <li><Link to ={'/Quem'}className='e'><b>Quem somos</b></Link></li>
        </ul>
    </div>
    )
}
export default Nave;