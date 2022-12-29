import { createContext , useState, useEffect} from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

export const ProductContext = createContext()

const ProductContextProvider = (props) => { 

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    

    //Getdata from fakestoreApi

    const fetchProducts = "https://fakestoreapi.com/products"
    useEffect (() => {
        async function fetchData() {
            setLoading(true)
            const data = await axios.get(fetchProducts)
            
            setProducts(data.data)
            setLoading(false)
            
        }
        fetchData()
    },[])

    const addProduct = (title, category, description, price, image ,rating) => {
          setProducts (...products,{id:uuidv4(),title, category, description, price, image, rating})
        }

    const deleteProduct = (id) => {
            setProducts(products.filter(products => products.id !== id))

    }
    
    return (
        <ProductContext.Provider value={{products, loading, addProduct,  deleteProduct}}>
            {props.children}
        </ProductContext.Provider>
    )
 }
 export default ProductContextProvider
