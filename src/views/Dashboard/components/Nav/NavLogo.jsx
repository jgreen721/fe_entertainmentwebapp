import React from 'react'
import { useAppContext } from '../../../../context/context_args'

const NavLogo = () => {
    const {clientData} = useAppContext();
  return (
    <div className="logo-parent-square">
           <div className="cubespinner">
        {clientData.slice(0,6).map((s,idx)=>(
          <div key={s.id} className={`face${idx+1}`}>
            <img className="logo-img" src={s.thumbnail.regular.medium} alt="img"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavLogo