import React from 'react'

const NavIcon = ({id,icon,action,handleLinkClick}) => {
  return (
    <li onClick={()=>handleLinkClick(id,action)} className={id == 1 ? "icon-item highlight" : "icon-item"}>
        {icon}
      {/* <img  src={homeIcon} alt="" /> */}
    </li>
  )
}

export default NavIcon