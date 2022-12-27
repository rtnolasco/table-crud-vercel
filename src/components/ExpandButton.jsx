import React from 'react'
import chevron from '../assets/fi_chevrons-down.svg'
export const ExpandButton = ({isOpen, toggle}) => {
    return (
        <td onClick={toggle} style={{borderBottom: "none"}}>
            <span className="img-bg"  style=
                            {{transform: `rotate(${isOpen ? 180 :0 }deg)`,
                                transition: "all 0.25s"
                            }}>&nbsp;</span> 
            {/* <span 
            style=
                            {{transform: `rotate(${isOpen ? 180 :0 }deg)`,
                                transition: "all 0.25s"
                            }}  
                        className='table-expand'>
            <img src={chevron} alt="expand"/>
            </span> */}
        </td>
    )
}