/* eslint-disable react/prop-types */
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Grid'


export default function Noticia({ noticia }) {
    const { url, title, abstract, byline } = noticia
    const foto = noticia?.multimedia[0].url
    /*     console.log(noticia)
        console.log(url)
        console.log(title) */
    return (
        <>
            {title && (
                <Grid item md={6} lg={4}>
                    <Card>
                        {foto && (
                            <CardMedia component={"img"} alt={`Imagen de la ${title}`} image={foto} height={"250px"} />
                        )}

                        <CardContent>
                            <Typography variant='body1' color="error">{byline}</Typography>
                            <Typography variant="h5" component="div">{title}</Typography>
                            <Typography variant="body2" >{abstract}</Typography>
                        </CardContent>
                        <CardActions>
                            <Link href={url} target='_blank' variant='button' width={'100%'} textAlign={'center'} sx={{ textDecoration: 'none' }}>Leer Noticia</Link>
                        </CardActions>
                    </Card>
                </Grid>

            )

            }
        </>
    )
}