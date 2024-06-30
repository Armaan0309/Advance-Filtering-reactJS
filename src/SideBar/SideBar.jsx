import React from 'react'
import "./SideBar.css"
import Category from './Category/Category'
import Price from './Prices/Price'
import Colors from './Colors/Colors'


const SideBar = ({handleChange}) => {
  return (
    <>
        <section className="sidebar">
            <div className="logo-container">
                <h1>CArt..</h1>
            </div>
            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Colors handleChange={handleChange}/>
        </section>
    </>
  )
}

export default SideBar
