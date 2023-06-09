import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import useNoticias from "../hooks/useNoticias"

const CATEGORIAS = [
    { value: 'arts', label: 'Arts' },
    { value: 'automobiles', label: 'Automobiles' },
    { value: 'books/review', label: 'Books Review' },
    { value: 'business', label: 'Business' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'food', label: 'Food' },
    { value: 'health', label: 'Health' },
    { value: 'home', label: 'Home' },
    { value: 'insider', label: 'Insider' },
    { value: 'magazine', label: 'Magazine' },
    { value: 'movies', label: 'Movies' },
    { value: 'nyregion', label: 'NY Region' },
    { value: 'obituaries', label: 'obituaries' },
    { value: 'opinion', label: 'Opinion' },
    { value: 'politics', label: 'Politics' },
    { value: 'realestate', label: 'Realstate' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'sundayreview', label: 'Sunday Review' },
    { value: 'technology', label: 'Technology' },
    { value: 'theater', label: 'Theater' },
    { value: 't-magazine', label: 'T Magazine' },
    { value: 'travel', label: 'Travel' },
    { value: 'upshot', label: 'Upshot' },
    { value: 'us', label: 'Us' },
    { value: 'world', label: 'World' },
]


export default function Formulario() {
    const { handleChangeCategoria, categoria } = useNoticias()
    return (
        <form action="">

            <FormControl fullWidth spacing={2} margin='normal' >
                <InputLabel id="categoria">Categorias</InputLabel>
                <Select label="Categoria" onChange={handleChangeCategoria} value={categoria} id="categoria">
                    {CATEGORIAS.map(cat => (
                        <MenuItem key={cat.value} value={cat.value}>{cat.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>


        </form >
    )
}