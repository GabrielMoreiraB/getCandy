import { createContext, useState } from "react";

export const VarContext = createContext()

export const VarProvider = ({children}) => {

    const [name, setName] = useState("")
    const [aberto, setAberto] = useState(false);
    const [doce1, setDoce1] = useState();
    const [doce2, setDoce2] = useState();
    const [doce3, setDoce3] = useState();






    return <VarContext.Provider value={{
        name, 
        setName, 
        aberto, 
        setAberto,
        doce1,
        setDoce1,
        doce2,
        setDoce2,
        doce3,
        setDoce3,
    }}>{children}</VarContext.Provider>;
}