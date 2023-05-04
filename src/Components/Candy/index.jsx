import "./Candy.css"


const Candy = ({img, name, desc, price, quant, valuepay}) => {
    return(
        <div className="candy">
            <p className="price">Quantidade na sacola: {quant}</p>
            <p className="price">Valor pago: {valuepay}</p>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{desc}</p>
            <p className="price">R${price}</p>
        </div>
    )
}

export default Candy