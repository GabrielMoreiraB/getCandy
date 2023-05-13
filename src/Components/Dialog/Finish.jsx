import { useContext, useEffect } from 'react';
import { VarContext } from '../../Context/VarContext'
import './Dialog.css'

const Finish = () => {

    const {setTotPag,
        totPag,
        doce1, 
        doce2, 
        doce3,
        setCurrentPage
      } = useContext(VarContext)


    return ( 
        <>
        <h1>Resumo</h1>
        <p>Você acaba de comprar {doce1} trufa(s) Doce Desejo, {doce2} Doce de Leite dos Deuses e {doce3} Paletta Dolce Gusto, com um total de R${(totPag.toFixed(2))}, com troco de R${((totPag - (doce1*2 + doce2*3 + doce3*4.5)).toFixed(2))}  </p>
        </>
     );
}
 
export default Finish;