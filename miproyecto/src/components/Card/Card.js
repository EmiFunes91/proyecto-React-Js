import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const CardItem = ({ image, title, price, stock, id }) => {

    
    return (

        <Card sx={{ maxWidth: 375 }}>
            <CardContent>
                <div className='card-item'>
                    <div>
                        <img alt='' src={`${image}`} />
                    </div>
                    <Button variant={'contained'} className="card-btn-details">
                        <Link to={`/product/${id}`}>Ver Detalle</Link>
                    </Button>
                    <div className='card-info-data'>
                        <p>{title}</p>
                        <span>$ {price}</span>
                    </div>
                    <Button variant={'contained'} className="card-item-button">Agregar al carrito</Button>
                </div>
            </CardContent>
        </Card >
    );
}

export default CardItem
