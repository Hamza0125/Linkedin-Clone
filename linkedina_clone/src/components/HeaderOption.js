import React from 'react'
import "../assets/style/Header.css";

const HeaderOption = ({title, Icon}) => {
    return (
        <div className="Header_items">
            <Icon />
           <div>{title}</div>
            
        </div>
    )
}

export default HeaderOption;
