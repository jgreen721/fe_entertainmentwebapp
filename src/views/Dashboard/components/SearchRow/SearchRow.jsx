import React, {useState} from 'react'
import "./SearchRow.css"
import { searchBtn } from '../../../../const'
import { useAppContext } from '../../../../context/context_args'

const SearchRow = () => {
  const [query,setQuery] = useState("")
  const {filterTitles} = useAppContext();

  return (
    <div className="search-row">
      <div className="search-div">
        <input type="text" className="search-input" placeholder="Search for movies or TV series" name="query"  onChange={(e)=> filterTitles(e.target.value)} />
        <button className="search-btn"><img className="search-icon" src={searchBtn} alt="" /></button>
      </div>
    </div>
  )
}

export default SearchRow