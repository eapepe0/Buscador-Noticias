import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"

export default function ListadoNoticias() {

    const { noticias, totalNoticias, handleChangePagina } = useNoticias()
    const generarId = () => {
        const random = `${Math.random().toString(36) + Date.now().toString(12)}-${Math.random().toString(36) + Date.now().toString(22)}`
        return random
    }

    const totalPaginas = Math.ceil(totalNoticias / 20); //* dividimos el total de noticias dividivo 20 (cantidad de noticias por pagina)
    return (
        <>
            <Typography variant="h3" component={'h2'} textAlign={'center'} marginY={5} >
                Ultimas Noticias
            </Typography>

            <Grid container spacing={2}>
                {noticias.map(noticia => (
                    <Noticia key={generarId()} noticia={noticia} />
                ))}

            </Grid>
            <Stack spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'} sx={{ marginY: 5 }}>
                <Pagination count={totalPaginas} variant="outlined" shape="rounded" onChange={handleChangePagina} />
            </Stack>
        </>
    )
}