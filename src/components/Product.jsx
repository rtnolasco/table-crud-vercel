import {React, useContext} from 'react'
import { TableRow } from './TableRow';
import { ExpandButton } from './ExpandButton';
import useOpenController from '../hooks/useOpenController';

import { ProductContext } from '../context/ProductContext';

const Product = ({product, loading, }) => {
    const {deleteProduct} = useContext(ProductContext)
    const {isOpen, toggle}= useOpenController(false)

if (loading) {
    return <td>Loading...</td>
}


    return (
        
        <>
            <tr>
                {/* <td>{product.id}</td>  */}
                <td>{product.title}</td> 
                <td>{product.category}</td> 
                <td>${product.price}</td> 
                <td><img src={product.image} className="tbl-image"></img></td> 
                <td style={{width:"111px"}}> 
                    <a href="#" className="edit" data-toggle="modal"> Edit </a> &nbsp;   
                    <button onClick={() => deleteProduct(product.id)} className="btn text-danger btn-act" data-toggle="modal"> Delete </button>
                </td> 
               
                <ExpandButton isOpen={isOpen} toggle={toggle}/>
                  
               
            </tr>
            <tr>{isOpen && <TableRow product={product} />}
            </tr>
                </>
                    )
}
export default Product;