import "./Candy.css"


const Candy = ({img, name, desc, price, quant, valuepay}) => {
    return(
        <div className="candy">
            <h2 className="price">Quantidade na sacola: {quant}</h2>
            <h2 className="price">Valor pago: R${valuepay.toFixed(2)}</h2>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{desc}</p>
            <h2 className="price">R${price}</h2>
        </div>
    )
}

export default Candy