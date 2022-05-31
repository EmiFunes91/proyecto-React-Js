import { useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../../utils/productsMock'

const ItemDetailContainer = () => {
    const [product , setProduct] = useState({})
    
    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }

    useEffect(() => {
        getItem()
        .then( (res) => {
            console.log("Respuesta GetItem: ", res)
            setProduct(res)
        })
    }, [])

    return(
        <>
            <ItemDetail data={product}/>
            
        </>
    )
}

export default ItemDetailContainer