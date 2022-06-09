import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import products from '../../utils/productsMock';


const ItemListContainer = () => {
    const [productsState, setProductsState] = useState([]);
    const [displaySpinner, setDisplaySpinner] = useState({ display: 'flex' })

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 5000);
        });
    };

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProductsState(res);
            })
            .catch((err) => {
                console.log('ERROR');
            })
            .finally(() => {
                setDisplaySpinner({display: 'none'})
            })
    }, [])
    return (

        <>
            {/*productsState[0] != null && <MainItem prop={productsState[0]} />*/}
            <ItemList items={productsState} />
            <LoadingSpinner display={displaySpinner}/>
        </>
    )

}


export default ItemListContainer;