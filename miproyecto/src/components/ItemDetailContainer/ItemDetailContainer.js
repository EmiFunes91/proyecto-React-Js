import { useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [products , setProduct] = useState({})
    
    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(products)
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
            <ItemDetail data={products}/>
            
        </>
    )
}

export default ItemDetailContainer