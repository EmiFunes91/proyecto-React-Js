import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '../Item/Item';
import './ItemList.scss'

const ItemList = ({ items }) => {
    return (
            <Container>
                <Grid container spacing={3}>
                    {
                        items.map((product) => {

                            return (
                                <Grid item lg={2} md={3} sm={4} xs={6} key={product.id}>
                                    <Item product={product} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
    )
}


export default ItemList;