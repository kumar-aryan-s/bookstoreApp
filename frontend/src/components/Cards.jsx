import React from 'react'
import image from '../../public/banner2.png'

const Cards = ({item}) => {
    console.log(item);
    
  return (
    <>
    <div>
      <div className="card bg-base-100 w-96 shadow-xl my-10 hover:scale-105 duration-200">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer p-5 hover:bg-pink-500 duration-150 text-white ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
