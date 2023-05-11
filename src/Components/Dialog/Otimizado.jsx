import { useContext } from 'react';
import { VarContext } from '../../Context/VarContext'
import './Dialog.css'

const Otimizado = () => {

    const {setTotPag,
          totPag,
          setDoce1, 
          setDoce2, 
          setDoce3, 
          doce1, 
          doce2, 
          doce3,
        } = useContext(VarContext)

    function changeOt(e){
        let n = e.target.value;
        setTotPag(n)
    }

    


    return ( 
        <>
            <h3>Nessa modalidade, vamos gerar para você o maior numero de doces de acordo com o dinheiro que quer gastar 😁</h3>
            <label htmlFor="otim">Quantos Reais você pretende gastar?</label>
            <input type="number" name="otim"  id="otim" onChange={changeOt}/>
        </>
     );
}
 
export default Otimizado;