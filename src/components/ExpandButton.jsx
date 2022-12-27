import React from 'react'
import chevron from '../assets/fi_chevrons-down.svg'
export const ExpandButton = ({isOpen, toggle}) => {
    return (
        <td onClick={toggle}>
            <span className="img-bg"  style=
                            {{transform: `rotate(${isOpen ? 180 :0 }deg)`,
                                transition: "all 0.25s"
                            }}>&nbsp;</span> 
        
        </td>
    )
}