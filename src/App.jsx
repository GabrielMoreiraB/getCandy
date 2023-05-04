import { useState } from 'react'
import './App.css'
import Candy from './Components/Candy'

function App() {
  const [name, setName] = useState("")
  const [aberto, setAberto] = useState(false);

  function abrirDialogo() {
    setAberto(true);
  }

  function fechaDialogo(){
    setAberto(false)
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
        <h2>Total a pagar: R$ 0,00</h2>
      </div>

      <div className='container'>
        <Candy
        img= '/img/limao.jpg'
        name ='Trufa Doce Desejo'
        desc='Doce chocolate trufado com leite condesado e limão siciliano'
        price='2,00'
        />
        <Candy
        img= '/img/leite.jpg'
        name ='Doce de Leite dos Deuses'
        desc='Doce de doce de leite com recheio de maracujá com sementes cristalizadas de maracujá'
        price='3,00'
        />
        <Candy
        img= '/img/laranjamel.jpg'
        name ='Paletta Dolce Gusto'
        desc='Doce de bolacha com paleta italiana de (morango, limão ou laranja) e mel'
        price='4,50'
        />
      </div>

      <dialog open={aberto} onClose={()=>fechaDialogo()}>
          <h2>Título do diálogo</h2>
          <p>blablabla</p>
          <button onClick={()=>fechaDialogo()}>Fechar</button>
        </dialog>

      <footer><span>Orgulhosamente Produzido por Gabriel Moreira</span></footer>
    </>
  )
}

export default App
