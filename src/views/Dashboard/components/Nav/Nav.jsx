import React from 'react'
import { logo, tvSeriesIcon, moviesIcon, bookmark,homeIcon,avatar } from '../../../../const'
// import { useAppContext } from '../../../../context/AppStoreContext'
import { useAppContext } from '../../../../context/context_args';

import "./Nav.css"
const Nav = () => {
  const {restoreData, getMovies,getTv,getBookmarks} = useAppContext()
  return (
    <nav className="nav">
      <div className="nav-flex-wrapper">
      <div className="nav-icons-column">
        <img className="nav-logo" src={logo} alt="" />
        <ul className="icon-list">
            <li onClick={restoreData} className="icon-item">
              <img  src={homeIcon} alt="" />
            </li>
            <li onClick={getMovies} className="icon-item">
              <img src={moviesIcon} alt="" />
            </li>
            <li onClick={getTv} className="icon-item">
              <img src={tvSeriesIcon} alt="" />
            </li>
            <li onClick={getBookmarks} className="icon-item">
              <img src={bookmark} alt="" />
            </li>
        </ul>
      </div>
    <div className="avatar-img-div">
      <img className="avatar-img" src={avatar} alt="" />
    </div>
    </div>
    </nav>
  )
}

export default Nav