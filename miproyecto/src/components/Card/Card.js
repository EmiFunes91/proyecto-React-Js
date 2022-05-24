import './Card.scss'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';


const CardItem = ({ image, title, price, stock }) => {
    const [count, setCount] = useState(0)

    const addCount = () => {
        console.log("stock: ", stock)
        setCount(count + 1)
    }

    const removeCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (

        <Card sx={{ maxWidth: 375 }}>
            <CardContent>
                <div className='card-item'>
                    <div>
                        <img alt='' src={`${image}`} />
                    </div>
                    <div className='card-info-data'>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    </div>
                    <div className='count-item'>
                        <Button onClick={removeCount}>-</Button>
                        <p>{count}</p>
                        <Button onClick={addCount}>+</Button>
                    </div>
                    <Button variant={'contained'} className="card-item-button">Agregar</Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default CardItem
