import './Dialog.css'

const EscCandy = ({name, valor, change, value}) => {

    
    function changeCandy(e){
        let n = e.target.value;
        change(n)
      }
    return ( 
        <div>
            <h1>{name}</h1>
            <h2>R$ {valor}</h2>
            <label htmlFor="quant">Quantas unidades desse doce?</label>
            <input type="number" name="quant" value={value} id="quant" onChange={changeCandy}/>
        </div>
     );
}
 
export default EscCandy;