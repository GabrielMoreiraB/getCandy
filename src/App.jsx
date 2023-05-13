import { useEffect } from 'react'
import './App.css'
import Candy from './Components/Candy'
import { useContext } from 'react';
import { VarContext } from './Context/VarContext';
import Dialog from './Components/Dialog';

function App() {
  const {name, setAberto, doce1, doce2, doce3,totPag, setTotPag } = useContext(VarContext)


  let totPrice = 0.00
  useEffect(()=> {
    setTotPag ((doce1*2) + (doce2*3) + (doce3*4.5))
  }, [doce1, doce2, doce3])
  
  function abrirDialogo() {
    setAberto(true);
  }

  return (
    <>
      <h1 className='title'>🍭GetCandy🍬</h1>
      <div className='apresentation'>
        <h3>Olá senhor (a):{name}</h3>
        <h3>Seja bem vindo!</h3>
      </div>

      <div><button onClick={() => abrirDialogo()}>Novo Pedido</button></div>

      <div className='tot'>
        <h2>Total a pagar: R$ {(totPag.toFixed(2))}</h2>
      </div>

      <div className='container'>
        <Candy
        img= '/img/limao.jpg'
        name ='Trufa Doce Desejo'
        desc='Doce chocolate trufado com leite condesado e limão siciliano'
        price='2,00'
        quant={doce1}
        valuepay={(doce1*2)}
        />
        <Candy
        img= '/img/leite.jpg'
        name ='Doce de Leite dos Deuses'
        desc='Doce de doce de leite com recheio de maracujá com sementes cristalizadas de maracujá'
        price='3,00'
        quant={doce2}
        valuepay={(doce2*3)}
        />
        <Candy
        img= '/img/laranjamel.jpg'
        name ='Paletta Dolce Gusto'
        desc='Doce de bolacha com paleta italiana de (morango, limão ou laranja) e mel'
        price='4,50'
        quant={doce3}
        valuepay={(doce3*4.5)}
        />
      </div>

      <Dialog/>

      <footer><span>Orgulhosamente Produzido por Gabriel Moreira</span></footer>
    </>
  )
}

export default App
