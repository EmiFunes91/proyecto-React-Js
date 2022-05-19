import './Card.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';






const CardItem = ({ image, title, price }) => {

    return (

        <Card sx={{ maxWidth: 375 }}>
            <CardContent>
                <div className='card-item'>
                    <div>
                        <img alt='' src={`${image}`} />
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <Button variant={'contained'}>Agregar</Button>
                </div>
            </CardContent>
        </Card>
        


    );
}

export default CardItem
