import React from 'react'
import StarsRating from './StarsRating'

export const TableRow = ({product, loading}) => {
    
    
    return (
        
            <>
                {/* <td></td> */}
                <td colSpan="2">{product.description}</td>
                    <td style={{display:"flex"}}><StarsRating /></td> 
                <td></td>
                <td></td>
                <td></td>
            </>
           
        
    )

}