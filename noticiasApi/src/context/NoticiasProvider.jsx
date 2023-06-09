import axios from 'axios'
import { createContext, useState, useEffect } from 'react'


const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {
    const [categoria, setCategoria] = useState("home") //*  aca guardaremos la categoria elegida
    const [noticias, setNoticias] = useState([])


    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    const consultarApiNYTimes = async () => {
        const apiNYKeys = import.meta.env.VITE_NY_API_KEY
        const url = `https://api.nytimes.com/svc/topstories/v2/${categoria}.json?api-key=${apiNYKeys}`
        console.log(url)
        const { data } = await axios(url)
        setNoticias(data.results)
    }

    useEffect(() => {
        consultarApiNYTimes()
    }, [categoria])
    //* cada vez que cambia la categoria con el select , consultamos la Api



    return (
        <NoticiasContext.Provider
            value={{
                handleChangeCategoria, categoria, noticias
                //Que valor o funcion queres compartir?
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext


//* recomendado : crear el archivo en NoticiasProvider.jsx en la carpeta context
//* modo de uso : <NoticiasProvider>
//*             :    <App/> o un Componente de Alto Orden (HOC)
//*               </NoticiasProvider>

