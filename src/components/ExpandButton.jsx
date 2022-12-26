import React from 'react'
import chevron from '../assets/fi_chevrons-down.svg'
export const ExpandButton = ({isOpen, toggle}) => {
    return (
        <button onClick={toggle}>
            <span className="material-symbols-outlined"  style=
                            {{transform: `rotate(${isOpen ? 180 :0 }deg)`,
                                transition: "all 0.25s"
                            }}>expand_more</span> 
            {/* <span 
            style=
                            {{transform: `rotate(${isOpen ? 180 :0 }deg)`,
                                transition: "all 0.25s"
                            }}  
                        className='table-expand'>
            <img src={chevron} alt="expand"/>
            </span> */}
        </button>
    )
}