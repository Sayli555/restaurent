import React from 'react'

const RatingFilter = ({updaterating,currentratingby,rating}) => {
  return (
    <div className="container restaurants">
    <h1>Rating</h1>
    <div className="restaurant-options">
        {Object.entries(rating).map(([key,value])=>(
                <div key={key} className="restaurant-option" onClick={()=>{updaterating(key)}}>
                {value}
                </div>
       ))}
    </div>
</div>
  )
}

export default RatingFilter
