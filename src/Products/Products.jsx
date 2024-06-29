import React from 'react'
import "./Products.css"
import { AiFillStar, AiTwotoneStar } from 'react-icons/ai'
import { BsBagFill } from 'react-icons/bs'

const Products = () => {
  return (
    <>
      <section className="card-container">
        <section className="card">

          <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe"  className='card-img'/>

          <div className="card-details">

            <h3 className='card-title'>Shoe</h3>

            <section className="card-reviews">
              <AiFillStar className='rating-star'/> <AiFillStar className='rating-star'/> 
              <AiFillStar className='rating-star'/> <AiFillStar className='rating-star'/> 
              <AiTwotoneStar className='rating-star'/>
              <span className="total-reviews">5</span>
            </section>

            <section className="card-price">
              <div className="price">
                <del>$300</del> <span>200</span>
              </div>

              <div className="bag">
                <BsBagFill className='bag-icon'/>
              </div>


            </section>
          </div>
        </section>
      </section>
    </>
  )
}

export default Products
