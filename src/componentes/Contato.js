import React, { useState } from 'react';
import './Contato.css';

const Cont = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    setEnviado(true);
  }
 

  return (
    <div className="formulario-container">

      <form onSubmit={handleSubmit} className="formulario">
        <fieldset className='f1'>  
          <legend className='contactar'>Quem você deseja contactar?</legend>
          <div className="input-group">
            <input type="text" name="nome" className= "input"placeholder="Digite o seu nome" />
          </div>
          <div className="input-group">
            <input type="number" name="numPessoas" className= "input" placeholder="Quantidade de pessoas" />
          </div>
          <div className="input-group">
            <input type="email" name="email" className= "input" placeholder="Digite o seu email" />
          </div>
          <div className="input-group">
            <label htmlFor="dtaNascimento">Data que você quer ver a pessoa</label>
            <br/>
            <input type="date" id="dtaNascimento" name="dtaNascimento" className= "input"/>
          </div>
        </fieldset>

        <fieldset className='complete'>
          <legend className='cabaço'>Complete a frase: "Filho de cabaço, cabaço ___"</legend>
          <div className="checkbox-group">
            <input type="checkbox" id="fixacao" name="frase" value="é" />
            <label htmlFor="fixacao">é</label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="projecao" name="frase" value="tem" />
            <label htmlFor="projecao">Jamais será cabaço</label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="cheiro" name="frase" value="verde" />
            <label htmlFor="cheiro">Alienígena</label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="cor" name="frase" value="bonito" />
            <label htmlFor="cor">Bonito</label>
          </div>
        </fieldset>

        <fieldset className='f2'>
          <legend className='nota'>Dê uma nota para seu professor:</legend>
          <div className="input-range">
            <label>O professor é top?</label>
            <input type="range" min="1" max="100" defaultValue="50" className="SatisfacaoGeral" id="SatisfacaoGeral" />
          </div>
        </fieldset>
      </form>
    </div>

  );
}

export default Cont;