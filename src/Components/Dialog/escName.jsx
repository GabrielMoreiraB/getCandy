import { useContext } from 'react';
import { VarContext } from '../../Context/VarContext'
import './Dialog.css'

const EscName = () => {
    const {setName, setBtnDesabled} = useContext(VarContext)

    function changeName(e){
        let n = e.target.value;
        setName(n)
        setBtnDesabled(false)
    }

    return ( 
        <>
            <h2>Vamos iniciar seu pedido!</h2>
          <label htmlFor="name">Digite seu nome, por favor:</label>
          <input type="text" name="name" id="name" onChange={changeName}/>
          <p>como gostaria de fazer seu pedido? Caso queira selecionar os doces, aperte em "Escolher"; caso queira uma seleção otimizada para a maior quantidade de doces, aperte em "Otimizar"!</p>
          
        </>
     );
}
 
export default EscName;