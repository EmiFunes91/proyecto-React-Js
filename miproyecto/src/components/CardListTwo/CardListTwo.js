import CardItem from '../Card/Card'
import { Grid } from '@mui/material';
import camperaReebok from '../../assets/img/camperaReebok.png';
import camperaAdidas from '../../assets/img/camperaAdidas.png';
import camperaNike from '../../assets/img/camperaNike.png';
import camperaSalomon from '../../assets/img/camperaSalomon.png';

const CardListTwo = ({title}) => {

    return(
        <>
        <h2>{title}</h2>
        <Grid container className='containerCard'>
            <Grid item md={3}>
                <CardItem title={"Reebok Rompeviento Essentials"} price={9.499} alt={'CamperaReebok'} image={camperaReebok}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Campera Adidas New Authentic"} price={8.999} alt={'CamperaAdidas'} image={camperaAdidas}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Campera Impermeable Hombre Nike"} price={10.499} alt={'CamperaNike'} image={camperaNike}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Campera Salomon Icerocket"} price={62.999} alt={'CamperaSalomon'} image={camperaSalomon}/>
            </Grid>
        </Grid>
        </>
    )
}

export default CardListTwo