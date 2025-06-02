import React,{createContext, useState, useContext} from 'react'

//Creo el contexto
const passwordCOntext = createContext();

//Hook para acceder al contexto mas facil
export const usePassword = () => {
    return useContext(passwordCOntext)
}

//Provedor del contexto 
export const PasswordProvider = ({children}) =>{

    const [password, setPassword] = useState("") //El valor para compartir

    return(
        <passwordCOntext.Provider value={{password, setPassword}}>
            {children}
        </passwordCOntext.Provider>
    )
}