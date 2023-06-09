import { useContext } from 'react'
import NoticiasContext from '../context/NoticiasProvider'

const useNoticias = () => {
    return useContext(NoticiasContext)
}

export default useNoticias

//* lo usamos importando primero donde lo vayamos a usar :
//*
//* import useNoticias from 'ruta del hook'
//*
//* const { datos que vayamos a sacar del Provider } = useNoticias()
//* crear el useNoticias en la carpeta /hooks