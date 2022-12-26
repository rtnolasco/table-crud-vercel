import React from 'react'
export const TableRow = ({product, loading}) => {
    return (
        
            <>
                <td></td>
                <td colSpan="2">{product.description}</td>
                    <td>{product.rating.rate}</td> 
                <td></td>
            </>
           
        
    )

}