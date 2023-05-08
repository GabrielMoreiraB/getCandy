import { useContext } from 'react';
import { VarContext } from '../../Context/VarContext'

const Dialog = () => {
    const {setName, aberto, setAberto} = useContext(VarContext)

  
    function fechaDialogo(){
      setAberto(false)
    }
    
    function changeName(e){
      let n = e.target.value;
      setName(n)
    }
    return ( 
        <dialog open={aberto} onClose={()=>fechaDialogo()}>

      <div className="overlay"></div>
      <div className="dialog-box">
          <h2>Título do diálogo</h2>
          <label htmlFor="name">Digite seu nome, por favor:</label>
          <input type="text" name="name" id="name" onChange={changeName}/>
          <button onClick={()=>fechaDialogo()}>Fechar</button>
      </div>
          
        </dialog>
    )
}

export default Dialog