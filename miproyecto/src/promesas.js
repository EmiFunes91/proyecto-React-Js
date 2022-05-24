const productos = [
  {
    title: 'zapatillas',
    price: '999',
    image: 'remera 1',
    description: '',
    stock: 1,
    id: 1
  },
  {
    title: 'medias',
    price: '999',
    image: 'remera 2',
    description: '',
    stock: 5,
    id: 2
  },
  {
    title: '',
    price: '999',
    image: 'remera 3',
    description: '',
    stock: 9,
    id: 3
  },

]

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 4000)
  })
}


getProducts()
  .then((response) => {
    console.log('Then: respuesta promesa:', response)
  })

  .catch((err) => {
    console.log('Catch: fallo la llamada.')
  })

  .finally(() => {
    console.log('Finally: termino la promesa')
  })

async function getProductsAsincrono = () => {
  try {
    const productos = await getProducts()
    console.log(productos)
  } catch { 
    console.log(err)
  }
  }