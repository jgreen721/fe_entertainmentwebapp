import React from 'react'
import {RecommendedItem} from "./components"
// import {useAppContext} from "../../../../context/AppStoreContext"
import { useAppContext } from '../../../../context/context_args';

import "./Recommended.css"


const Recommended = () => {
  const {clientData,resultsTitle,clientShows} = useAppContext()

  // console.log("data",clientData);
  return (
    <div className="recommended-parent">
      <div className="recommended-content-wrapper">
     {clientData.length > 0 && <h1 className="heading-lg recommended-h1"> {resultsTitle} </h1>}
     <ul className="recommended-grid">
       {clientData.map((r,idx)=>(
         <RecommendedItem item={r} key={r.title} delay={idx * .25}/>
       ))}
     </ul>

     {resultsTitle == "Your results (0)" && <h2 className="no-matches">Sorry, doesn't look like we have what you're looking for! 😖 </h2>}
     {(!clientData.length && !clientShows.data.length && resultsTitle == "Bookmarked Movies") && <h2 className="no-matches">Ooops, doesn't look like you've saved any favorites...yet!😎 </h2>}

      {clientShows.data.length > 0 &&
      <div className="tvshows-grid">
        <h1 className="heading-lg recommended-h1"> {clientShows.title} </h1> 
     <ul className="recommended-grid">
       {clientShows.data.map((r,idx)=>(
         <RecommendedItem item={r} key={r.title} delay={idx * .25}/>
       ))}
     </ul>
     </div>}
     </div>
      </div>
  )
}

export default Recommended