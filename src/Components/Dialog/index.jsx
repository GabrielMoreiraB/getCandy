import { useContext } from 'react';
import { VarContext } from '../../Context/VarContext'
import './Dialog.css'

const Dialog = () => {
    const {setName, aberto, setAberto} = useContext(VarContext)

  
    function fechaDialogo(){
      setAberto(false)
    }
    
    function changeName(e){
      let n = e.target.value;
      setName(n)
    }

    const dialogo = document.querySelector('.dialog-box');
    


    return ( 
        <dialog open={aberto} onClose={()=>fechaDialogo()}>

      <div className="overlay"></div>
      <div className="dialog-box">
          <h2>Vamos iniciar seu pedido!</h2>
          <label htmlFor="name">Digite seu nome, por favor:</label>
          <input type="text" name="name" id="name" onChange={changeName}/>
          <p>como gostaria de fazer seu pedido? Caso queira selecionar os doces, aperte em "Escolher"; caso queira uma seleção otimizada para a maior quantidade de doces, aperte em "Otimizar"!</p>
          <button >Otimizar</button>
          <button >Escolher</button>
          {/* <button onClick={()=>fechaDialogo()}>Fechar</button> */}
      </div>
          
        </dialog>
    )
}

export default Dialog