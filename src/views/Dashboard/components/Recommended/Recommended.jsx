import React from 'react'
import {RecommendedItem} from "./components"
// import {useAppContext} from "../../../../context/AppStoreContext"
import { useAppContext } from '../../../../context/context_args';

import "./Recommended.css"


const Recommended = () => {
  const {clientData,resultsTitle} = useAppContext()

  // console.log("data",clientData);
  return (
    <div className="recommended-parent">
      <div className="recommended-content-wrapper">
     <h1 className="heading-lg recommended-h1"> {resultsTitle} </h1>
     <ul className="recommended-grid">
       {clientData.map((r,idx)=>(
         <RecommendedItem item={r} key={r.title} delay={idx * .25}/>
       ))}
     </ul>
     </div>
      </div>
  )
}

export default Recommended