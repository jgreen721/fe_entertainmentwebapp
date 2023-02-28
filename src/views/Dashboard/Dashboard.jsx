import React from 'react'
import {Nav,SearchRow,Trending,Recommended} from "./components"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dash-container">
      <div className="nav-wrapper">
        <Nav/>
      </div>
      <div className="main-section-wrapper">
        <SearchRow/>
        <Trending/>
        <div className="main-section-relative">

        <Recommended/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard