import React from 'react'
import "./Price.scss"

const Price = () => {
  return (
    <div className="Price">
      <h1>Price</h1>
      <div className="p-wrapper">
        <div className="basic">
          <h1>Basic</h1>
        </div>
        <div className="standard">
          <h1>Standard</h1>
        </div>
        <div className="pro">
          <h1>Pro</h1>
        </div>
      </div>
    </div>
  );
}

export default Price
