import React from 'react'
import './style.css' // import your CSS file

const Strip = ({ data }) => {
  return (
    <div className="strip-container">
      <div className="strip-items">
        {data?.items?.map((item, index) => (
          <div key={index} className="strip-item">
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Strip
