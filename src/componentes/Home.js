import React from 'react';
import './Home.css';

function Home(){
    return(
        <body className='Textao'>
        <h1>Bem-vindo à Página Inicial da nossa AV2</h1>
        <p>Conheça os melhores Cosplays do SESI/SENAI</p>

        <ul>
            <div className='Imagens'>
                <div className='img'>
                <li>
                    <img src={require('../imgs/FOTO1.jpg')} className='Imagen'/>
                    <p>Povo da turma da Mônica</p>
                </li>
                </div>

                <div className='img'>
                <li>
                    <img src={require('../imgs/FOTO2.jpg')}  className='Imagen'/>
                    <p>As foveiras e o Teacher TOP!!!</p>
                </li>
                </div>
                
                <div className='img'>
                <li>
                    <img src={require('../imgs/FOTO3.jpg')} className='Imagen'/>
                    <p>As operadoras TIM e CLARO <br/>+ flanelinhas</p>
                </li>
                </div>
                
                <li>
                <img src={require('../imgs/FOTO4.jpg')} className='Imagen'/>
                    <p>Tigrinho man</p>
                </li>
                
                <li>
                <img src={require('../imgs/FOTO5.jpg')} className='Imagen'/>
                    <p>Dolly e não sei as outras</p>
                </li>
                
                <li>
                <img src={require('../imgs/FOTO6.jpg')} className='Imagen'/>
                    <p>A turma mais F$#% do SESI/SENAI</p>
                </li>
            </div>
        </ul>
        </body>
    )
}
export default Home;