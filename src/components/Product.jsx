import React from 'react'
import { TableRow } from './TableRow';
import { ExpandButton } from './ExpandButton';
import useOpenController from '../hooks/useOpenController';



const Product = ({product, loading, index}) => {
 const {isOpen, toggle}= useOpenController(false)
if (loading) {
    return <td>Loading...</td>
}


    return (
        
        <>
            <tr key={index}>
                {/* <td>{product.id}</td>  */}
                <td>{product.title}</td> 
                <td>{product.category}</td> 
                <td>${product.price}</td> 
                <td><img src={product.image} className="tbl-image"></img></td> 
                <td style={{width:"111px"}}> 
                    <a href="#" className="edit" data-toggle="modal"> Edit </a> &nbsp;   
                    <a href="#" className="edit" data-toggle="modal"> Delete </a>
                </td> 
               
                <ExpandButton isOpen={isOpen} toggle={toggle}/>
                  
               
            </tr>
            <tr>{isOpen && <TableRow product={product} />}
            </tr>
                </>
                    )
}
export default Product;