import { createContext, useState } from "react";

export const VarContext = createContext()

export const VarProvider = ({children}) => {

    const [name, setName] = useState("")
    const [aberto, setAberto] = useState(false);
    const [doce1, setDoce1] = useState(0);
    const [doce2, setDoce2] = useState(0);
    const [doce3, setDoce3] = useState(0);
    const [totPag, setTotPag] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [btnDesabled, setBtnDesabled] = useState(true)




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
        currentPage,
        setCurrentPage,
        totPag, 
        setTotPag,
        btnDesabled, 
        setBtnDesabled
    }}>{children}</VarContext.Provider>;
}