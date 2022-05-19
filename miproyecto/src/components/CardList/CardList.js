import CardItem from '../Card/Card'
import { Grid } from '@mui/material';
import reebokNano from '../../assets/img/ReebokNano.png';
import adidasDuramo from '../../assets/img/AdidasDuramo.png';
import nikeAir from '../../assets/img/NikeAir.png';
import salomonHypulse from '../../assets/img/SalomonHypulse.png';

const CardList = ({title}) => {

    return(
        <>
        <h2>{title}</h2>
        <Grid container className='containerCard'>
            <Grid item md={3}>
                <CardItem title={"Zapatilla Reebok Nano"} price={17.999} alt={'ReebokNano'} image={reebokNano}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Zapatilla Adidas Duramo"} price={13.999} alt={'AdidasDuramo'} image={adidasDuramo}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Zapatilla Nike Air"} price={26.999} alt={'NikeAir'} image={nikeAir}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Zapatilla Salomon Hypulse"} price={23.999} alt={'SalomonHypulse'} image={salomonHypulse}/>
            </Grid>
        </Grid>
        </>
    )
}

export default CardList