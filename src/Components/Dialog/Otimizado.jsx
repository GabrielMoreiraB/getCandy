import { useContext, useEffect } from 'react';
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
          setCurrentPage,
        } = useContext(VarContext)

    function changeOt(e){
        let n = +e.target.value;
        setTotPag(n)
        
        let Totval = n
        let firstC = 0;
        let secC = 0;
        let thirdC = 0;

        do {
            if (Totval >= 4.5 && Totval < 5) {
                thirdC++;
                Totval -= 4.5;
            } else if (Totval >= 3 && Totval < 4) {
                secC++;
                Totval -= 3;
            } else {
                firstC++;
                Totval -= 2;
            }
        } while (2 > Totval);

        setDoce1(firstC) 
        setDoce2(secC) 
        setDoce3(thirdC)
    } 

    useEffect(()=>{
        
    })

    function finishPage(){
        setCurrentPage('fin')
    }


    return ( 
        <>
            <h3>Nessa modalidade, vamos gerar para você o maior numero de doces de acordo com o dinheiro que quer gastar 😁</h3>
            <label htmlFor="otim">Quantos Reais você pretende gastar?</label>
            <input type="number" name="otim"  id="otim" onChange={changeOt}/>
            <button onClick={()=>finishPage()}>Finalizar </button>
        </>
     );
}
 
export default Otimizado;