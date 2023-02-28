import React from 'react'
import {TrendingItem} from "./components"
// import {useAppContext} from "../../../../context/AppStoreContext"
import {useAppContext} from "../../../../context/context_args"

import "./Trending.css"

const Trending = () => {
    const {trendingData} = useAppContext();

    console.log(trendingData)
  {return trendingData.length ? (
    <div className="trending">
        <h1 className="heading-lg trending-h1">Trending</h1>
        <ul className="trending-gallery">
        {trendingData.map(t=>(
            <TrendingItem item={t} key={t.title}/>
        ))}
        </ul>
    </div>
  ) : null}
}

export default Trending