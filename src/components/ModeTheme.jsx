import { createContext,Children, useState } from "react"

export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {

    const [Tema,setTema] = useState(false)

    const toggleTema = ()=>{
        setTema(!Tema)
    }

    return (
        <ThemeContext.Provider value={{Tema,setTema,toggleTema}}>
            {children}
        </ThemeContext.Provider>
    )

}

export {ThemeProvider}