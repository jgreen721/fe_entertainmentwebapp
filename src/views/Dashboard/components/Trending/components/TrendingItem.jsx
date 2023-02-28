import React from 'react'
import {movieCategory,bookmarkEmpty} from "../../../../../const"
// import { useAppContext } from '../../../../../context/AppStoreContext'
import { useAppContext } from '../../../../../context/context_args';


const TrendingItem = ({item}) => {
  const {bookmarkItem} = useAppContext();
  return (
    <li className="trending-item">
        <div className="img-overlay">
            <img className='trending-img' src={item.thumbnail.regular.large} alt="" />
        </div>
        <div className="content-overlay">
          <div onClick={()=>bookmarkItem(item)} className="bookmark-div">
          <img className="bookmark-icon" src={bookmarkEmpty} alt="bookmark-img" />
          </div>
          <div className="content-card-wrapper">
          <div className="content-card">
            <div className="content-row">
              <h5 className="blurb content-info">{item.year}</h5>
              <div className="middle-content-col">
                <img className="film-img" src={movieCategory} alt="film-img" />
                <p className="blurb content-info">Movie</p>
              </div>
              <p className="blurb content-info">{item.rating}</p>
            </div>
            <h3 className="heading-md content-movie-title">{item.title}</h3>
          </div>
          </div>
        </div>

    </li>
  )
}

export default TrendingItem