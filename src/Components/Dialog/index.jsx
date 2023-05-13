import { useContext } from 'react';
import { VarContext } from '../../Context/VarContext'
import './Dialog.css'
import EscName from './escName';
import EscCandy from './EscCandy';
import Otimizado from './Otimizado';
import Finish from './Finish';

const Dialog = () => {
    const {aberto, 
          setAberto, 
          setCurrentPage, 
          currentPage, 
          setDoce1, 
          setDoce2, 
          setDoce3, 
          doce1, 
          doce2, 
          doce3,
          btnDesabled} = useContext(VarContext)

    function fechaDialogo(){
      setAberto(false)
      setCurrentPage(1);
    }

    function handleNextPage() {
      setCurrentPage(currentPage + 1);
    }
    function handlePrevPage() {
      setCurrentPage(currentPage - 1);
    }
    function handleOtPage(){
      setCurrentPage('ot')
    }

    let page;

    switch (currentPage){
      case 1:
        page = <EscName/>;
        break;
      case 2:
        page = <EscCandy
                name ='Trufa Doce Desejo'
                valor='2,00'
                change={setDoce1}
                value = {doce1}
                />
        break;
      case 3:
        page = <EscCandy
                name ='Doce de Leite dos Deuses'
                valor='3,00'
                change={setDoce2}
                value = {doce2}
                />
        break;
      case 4:
        page = <EscCandy
                name ='Paletta Dolce Gusto'
                valor='4,50'
                change={setDoce3}
                value = {doce3}
                />
        break;
      case 'ot':
        page = <Otimizado/>
        break;
      case 'fin':
        page = <Finish/>
        break;
      default:
        page = <EscName/>;
    }

    return ( 
        <dialog open={aberto} onClose={()=>fechaDialogo()}>
        <div className="overlay"></div>
        <div className="dialog-box">
          <>{page}</>
        {(currentPage < 2) && <button onClick={()=>handleOtPage()} disabled={btnDesabled}>Otimizar</button>}
        {(currentPage != 'ot' && currentPage<4) && <button onClick={()=>handleNextPage()} disabled={btnDesabled}>{(currentPage <2) ? "Escolher":"Próximo"} </button>}
        {(currentPage>1 && currentPage<4) && <button onClick={()=>handlePrevPage()} disabled={btnDesabled}>voltar</button>}
        <button onClick={()=>fechaDialogo()}>Fechar</button>
        </div>
          
        </dialog>
    )
}

export default Dialog