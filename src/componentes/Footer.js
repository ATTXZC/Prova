import React from 'react';
import './Footer.css';

function Footer(){
    return(
    <footer className='fundo'>
         <ul>
            <img src={require('../imgs/SESI.png')} className='sesi'/>
            <li className='foter'>&copy; 2024 Todos os Direitos Reservados ao povo 3°N/Informática para Internet.</li>
            <li className='foter'>Contato: leandrobochecha@delício.do.senai.com.br</li>
        </ul>
    </footer>
    )
}
export default Footer;