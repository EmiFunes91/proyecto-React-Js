import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../../utils/productsMock'

const ItemDetailContainer = () => {
    const [products, setProduct] = useState({})

    useEffect(() => {
        const getItem = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products)
                    resolve(productos)
                }, 2000)
            }).then(response => setProduct(response,))
        }
    }, [])

    return (
        <>
            <ItemDetail data={products} />

        </>
    )
}

export default ItemDetailContainer