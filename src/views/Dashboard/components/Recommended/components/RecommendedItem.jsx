import React, {useState} from 'react'
import {movieCategory,bookmarkEmpty} from "../../../../../const";
// import { useAppContext } from '../../../../../context/AppStoreContext';
import { useAppContext } from '../../../../../context/context_args';

const RecommendedItem = ({item,delay}) => {
  const {bookmarkItem,removeItem, resultsTitle} = useAppContext();
  const [remove,setRemove] = useState(false)
  return (
    <li style={{[`--i`]:`${delay}s`}} className={remove ? "recommended-item remove-item" : "recommended-item"}>
        <div className="recommended-img-div">
            <img className="recommended-img" src={item.thumbnail.regular.large} alt="img" />
           {resultsTitle != "Bookmarked Movies" ? <div onClick={()=>bookmarkItem(item)} className="bookmark-rec-div">
          <img className="bookmark-rec-icon" src={bookmarkEmpty} alt="bookmark-img" />
          </div>
          :
          <div onClick={()=>{setRemove(true);removeItem(item)}} className="bookmark-rec-div">
          X
          </div>
}
        </div>
        <div className="content-card rec-card">
            <div className="content-row">
              <h5 className="small-blurb content-info">{item.year}</h5>
              <div className="middle-content-col">
                <img className="film-img" src={movieCategory} alt="film-img" />
                <p className="small-blurb content-info">Movie</p>
              </div>
              <p className="small-blurb content-info">{item.rating}</p>
            </div>
            <h3 className="heading-sm rec-movie-title">{item.title}</h3>
          </div>
          {/* </div> */}
    </li>
  )
}

export default RecommendedItem