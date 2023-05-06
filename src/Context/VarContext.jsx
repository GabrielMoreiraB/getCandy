import { createContext, useState } from "react";

export const VarContext = createContext()

export const VarProvider = ({children}) => {

    const [name, setName] = useState("")
    const [aberto, setAberto] = useState(false);






    return <VarContext.Provider value={{
        name, 
        setName, 
        aberto, 
        setAberto
    }}>{children}</VarContext.Provider>;
}