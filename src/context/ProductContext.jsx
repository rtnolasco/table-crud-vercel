import { createContext , useState, useEffect} from "react"
import axios from "axios"

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
            console.log(data.data)
            setProducts(data.data)
            setLoading(false)
            
        }
        fetchData()
    },[])

    
   
    return (
        <ProductContext.Provider value={{products, loading}}>
            {props.children}
        </ProductContext.Provider>
    )
 }
 export default ProductContextProvider
