import React, {useState} from 'react'
import "./SearchRow.css"
import { searchBtn } from '../../../../const'

const SearchRow = () => {
  const [query,setQuery] = useState("")
  return (
    <div className="search-row">
      <div className="search-div">
        <input type="text" className="search-input" placeholder="Search for movies or TV series" name="query" value={query} onChange={(e)=>setQuery(e.target.value)} />
        <button className="search-btn"><img className="search-icon" src={searchBtn} alt="" /></button>
      </div>
    </div>
  )
}

export default SearchRow